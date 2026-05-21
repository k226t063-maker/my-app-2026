class PicrossGame {
    constructor() {
        this.size = 20;
        this.solution = [];
        this.board = []; // 0: empty, 1: filled, 2: x
        this.isEditMode = false;
        this.currentTool = 'fill'; // 'fill' or 'x'
        this.isDragging = false;
        this.dragState = null;

        this.initElements();
        this.addEventListeners();
        this.loadFromUrl() || this.createNewGame(20);
    }

    initElements() {
        this.gridBoard = document.getElementById('grid-board');
        this.cluesTop = document.getElementById('clues-top');
        this.cluesLeft = document.getElementById('clues-left');
        this.messageArea = document.getElementById('message-area');
        this.btnPlay = document.getElementById('btn-play');
        this.btnEdit = document.getElementById('btn-edit');
        this.selectSize = document.getElementById('select-size');
        this.btnNewGame = document.getElementById('btn-new-game');
        this.toolFill = document.getElementById('tool-fill');
        this.toolX = document.getElementById('tool-x');
        this.btnReset = document.getElementById('btn-reset');
        this.btnShare = document.getElementById('btn-share');
        this.selectPreset = document.getElementById('select-preset');
        this.btnClear = document.getElementById('btn-clear');
    }

    addEventListeners() {
        this.btnPlay.addEventListener('click', () => this.setMode(false));
        this.btnEdit.addEventListener('click', () => this.setMode(true));
        this.btnNewGame.addEventListener('click', () => {
            const presetVal = this.selectPreset.value;
            if (presetVal) {
                const preset = this.getPresets()[presetVal];
                this.loadData(preset.data, preset.size);
            } else {
                const size = parseInt(this.selectSize.value);
                this.createNewGame(size);
            }
        });
        this.btnClear.addEventListener('click', () => this.resetBoard());
        this.toolFill.addEventListener('click', () => this.setTool('fill'));
        this.toolX.addEventListener('click', () => this.setTool('x'));
        this.btnReset.addEventListener('click', () => this.resetBoard());
        this.btnShare.addEventListener('click', () => this.shareLevel());

        // Mouse events for drawing
        window.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.dragState = null;
        });

        // Prevent context menu on grid for right-click marks
        this.gridBoard.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    setMode(isEdit) {
        this.isEditMode = isEdit;
        this.btnPlay.classList.toggle('active', !isEdit);
        this.btnEdit.classList.toggle('active', isEdit);
        this.playTools.classList.toggle('hidden', isEdit);
        this.editorTools.classList.toggle('hidden', !isEdit);
        
        if (isEdit) {
            this.messageArea.textContent = "エディタモード: 正解パターンを作成中...";
            // In edit mode, we use 'solution' as the board
            this.board = this.solution.map(row => [...row]);
        } else {
            this.solution = this.board.map(row => [...row]);
            this.resetBoard();
            this.messageArea.textContent = "プレイ開始！";
        }
        this.render();
    }

    setTool(tool) {
        this.currentTool = tool;
        this.toolFill.classList.toggle('active', tool === 'fill');
        this.toolX.classList.toggle('active', tool === 'x');
    }

    createNewGame(size) {
        this.size = size;
        this.solution = Array(size).fill().map(() => Array(size).fill(0));
        this.board = Array(size).fill().map(() => Array(size).fill(0));
        this.render();
        this.messageArea.textContent = "";
    }

    resetBoard() {
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.render();
        this.messageArea.textContent = "";
    }

    calculateClues(arr) {
        const clues = [];
        let count = 0;
        for (let val of arr) {
            if (val === 1) {
                count++;
            } else if (count > 0) {
                clues.push(count);
                count = 0;
            }
        }
        if (count > 0) clues.push(count);
        return clues.length > 0 ? clues : [0];
    }

    render() {
        // Clear elements
        this.gridBoard.innerHTML = '';
        this.cluesTop.innerHTML = '';
        this.cluesLeft.innerHTML = '';

        // Grid setup
        this.gridBoard.style.gridTemplateColumns = `repeat(${this.size}, var(--cell-size))`;
        this.gridBoard.style.gridTemplateRows = `repeat(${this.size}, var(--cell-size))`;

        // Render Top Clues
        for (let c = 0; c < this.size; c++) {
            const col = [];
            for (let r = 0; r < this.size; r++) col.push(this.solution[r][c]);
            const clues = this.calculateClues(col);
            
            const clueEl = document.createElement('div');
            clueEl.className = 'clue-col';
            if ((c + 1) % 5 === 0 && c !== this.size - 1) clueEl.classList.add('col-marker');
            clues.forEach(num => {
                const span = document.createElement('span');
                span.textContent = num;
                clueEl.appendChild(span);
            });
            this.cluesTop.appendChild(clueEl);
        }

        // Render Left Clues & Grid
        for (let r = 0; r < this.size; r++) {
            // Clues
            const clues = this.calculateClues(this.solution[r]);
            const clueEl = document.createElement('div');
            clueEl.className = 'clue-row';
            if ((r + 1) % 5 === 0 && r !== this.size - 1) clueEl.classList.add('row-marker');
            clues.forEach(num => {
                const span = document.createElement('span');
                span.textContent = num;
                clueEl.appendChild(span);
            });
            this.cluesLeft.appendChild(clueEl);

            // Row of cells
            for (let c = 0; c < this.size; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                if (this.board[r][c] === 1) cell.classList.add('filled');
                if (this.board[r][c] === 2) cell.classList.add('x');
                
                // Markers
                if ((c + 1) % 5 === 0 && c !== this.size - 1) cell.classList.add('col-marker');
                if ((r + 1) % 5 === 0 && r !== this.size - 1) cell.classList.add('row-marker');

                cell.addEventListener('mousedown', (e) => this.handleCellClick(r, c, e));
                cell.addEventListener('mouseenter', () => this.handleCellEnter(r, c));
                
                this.gridBoard.appendChild(cell);
            }
        }
    }

    handleCellClick(r, c, e) {
        this.isDragging = true;
        let targetState;

        if (this.isEditMode) {
            targetState = this.board[r][c] === 1 ? 0 : 1;
        } else {
            // In play mode, tool selection or right click
            if (e.button === 2) { // Right click
                targetState = this.board[r][c] === 2 ? 0 : 2;
            } else {
                const tool = this.currentTool === 'fill' ? 1 : 2;
                targetState = this.board[r][c] === tool ? 0 : tool;
            }
        }

        this.dragState = targetState;
        this.updateCell(r, c, targetState);
    }

    handleCellEnter(r, c) {
        if (this.isDragging && this.dragState !== null) {
            this.updateCell(r, c, this.dragState);
        }
    }

    updateCell(r, c, state) {
        if (this.board[r][c] === state) return;
        this.board[r][c] = state;
        
        if (this.isEditMode) {
            this.solution[r][c] = state;
            this.render(); // Need full render to update clues
        } else {
            // Optimization: Only update the specific cell's class
            const cellIdx = r * this.size + c;
            const cellEl = this.gridBoard.children[cellIdx];
            cellEl.classList.toggle('filled', state === 1);
            cellEl.classList.toggle('x', state === 2);
            this.checkWin();
        }
    }

    getPresets() {
        return {
            "Heart": {
                size: 5,
                data: "CBI=" // 01010 11111 11111 01110 00100 -> bitstring -> base64
            },
            "Smile": {
                size: 5,
                data: "EBEA" // 01010 01010 00000 10001 01110 -> 01010010 10000010 00101110 -> base64
            }
        };
    }

    checkWin() {
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                const isSolutionFilled = this.solution[r][c] === 1;
                const isBoardFilled = this.board[r][c] === 1;
                if (isSolutionFilled !== isBoardFilled) return;
            }
        }
        this.messageArea.textContent = "🎉 クリア！！ おめでとうございます！";
    }

    shareLevel() {
        const data = this.encodeGrid();
        const url = new URL(window.location);
        url.searchParams.set('p', data);
        url.searchParams.set('s', this.size);
        
        // Copy to clipboard
        navigator.clipboard.writeText(url.toString()).then(() => {
            alert("URLをコピーしました！このURLを共有するとパズルを遊べます。");
            window.history.pushState({}, '', url);
        });
    }

    encodeGrid() {
        // Convert grid to a bit-string then to base64
        let bits = "";
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                bits += this.solution[r][c] === 1 ? "1" : "0";
            }
        }
        
        // Pad to byte
        while (bits.length % 8 !== 0) bits += "0";
        
        let bytes = [];
        for (let i = 0; i < bits.length; i += 8) {
            bytes.push(parseInt(bits.substr(i, 8), 2));
        }
        
        return btoa(String.fromCharCode.apply(null, bytes));
    }

    loadData(p, s) {
        this.size = parseInt(s);
        const binaryString = atob(p);
        let bits = "";
        for (let i = 0; i < binaryString.length; i++) {
            bits += binaryString.charCodeAt(i).toString(2).padStart(8, '0');
        }

        this.solution = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));

        let bitIdx = 0;
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                this.solution[r][c] = bits[bitIdx++] === "1" ? 1 : 0;
            }
        }

        this.render();
        this.selectSize.value = this.size;
        this.messageArea.textContent = "パズルを読み込みました！";
    }

    loadFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const p = params.get('p');
        const s = params.get('s');
        if (!p || !s) return false;

        this.loadData(p, s);
        return true;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.game = new PicrossGame();
});
