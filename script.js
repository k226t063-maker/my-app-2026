const PUZZLE_LIBRARY = {
    "easy-heart": {
        size: 5,
        data: [
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]
        ]
    },
    "easy-duck": {
        size: 5,
        data: [
            [0, 1, 1, 0, 0],
            [1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [0, 0, 1, 1, 0]
        ]
    },
    "easy-note": {
        size: 5,
        data: [
            [0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0]
        ]
    },
    "normal-house": {
        size: 10,
        data: [
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,1,1],
            [1,1,0,1,1,1,1,0,1,1],
            [1,1,0,1,0,0,1,0,1,1],
            [1,1,0,1,1,1,1,0,1,1],
            [1,1,1,1,1,1,1,1,1,1]
        ]
    },
    "normal-mushroom": {
        size: 10,
        data: [
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,1,1,0,0,1,1,1,1,0],
            [1,1,1,0,0,1,1,0,0,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,0,0]
        ]
    },
    "normal-dog": {
        size: 10,
        data: [
            [0,0,1,1,1,1,1,0,0,0],
            [0,1,1,1,1,1,1,1,0,0],
            [0,1,1,0,1,1,1,1,0,0],
            [1,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,0,0,1,1,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0]
        ]
    },
    "hard-rocket": {
        size: 15,
        data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => {
            // Rocket shape logic
            if (c === 7) return 1; // Center axis
            if (r >= 2 && r <= 10 && Math.abs(c - 7) <= (r < 5 ? r - 2 : 2)) return 1; // Body
            if (r >= 11 && r <= 12 && Math.abs(c - 7) <= 4) return 1; // Fins
            if (r === 13 && Math.abs(c - 7) <= 1) return 1; // Flame
            if (r === 14 && c === 7) return 1; // Flame tip
            return 0;
        }))
    },
    "hard-tree": {
        size: 15,
        data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => {
            // Tree shape logic
            if (r < 10 && Math.abs(c - 7) <= r) return 1; // Leaves
            if (r >= 10 && r < 14 && Math.abs(c - 7) <= 1) return 1; // Trunk
            if (r === 14 && Math.abs(c - 7) <= 3) return 1; // Ground
            return 0;
        }))
    }
};

class PicrossGame {
    constructor() {
        this.size = 5;
        this.solution = [];
        this.board = []; // 0: empty, 1: filled, 2: x
        this.currentTool = 'fill'; // 'fill' or 'x'
        this.isDragging = false;
        this.dragState = null;
        this.isCleared = false;

        this.initElements();
        this.addEventListeners();
        this.loadPuzzle("easy-heart");
    }

    initElements() {
        this.gridBoard = document.getElementById('grid-board');
        this.cluesTop = document.getElementById('clues-top');
        this.cluesLeft = document.getElementById('clues-left');
        this.messageArea = document.getElementById('message-area');
        this.selectPuzzle = document.getElementById('select-puzzle');
        this.btnStart = document.getElementById('btn-start');
        this.toolFill = document.getElementById('tool-fill');
        this.toolX = document.getElementById('tool-x');
        this.btnReset = document.getElementById('btn-reset');
    }

    addEventListeners() {
        this.btnStart.addEventListener('click', () => {
            this.loadPuzzle(this.selectPuzzle.value);
        });
        this.toolFill.addEventListener('click', () => this.setTool('fill'));
        this.toolX.addEventListener('click', () => this.setTool('x'));
        this.btnReset.addEventListener('click', () => this.resetBoard());

        window.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.dragState = null;
        });

        this.gridBoard.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    setTool(tool) {
        this.currentTool = tool;
        this.toolFill.classList.toggle('active', tool === 'fill');
        this.toolX.classList.toggle('active', tool === 'x');
    }

    loadPuzzle(id) {
        const puzzle = PUZZLE_LIBRARY[id];
        if (!puzzle) return;

        this.size = puzzle.size;
        this.solution = puzzle.data;
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.isCleared = false;
        this.messageArea.textContent = "";
        this.render();
    }

    resetBoard() {
        if (this.isCleared) return;
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
        this.gridBoard.innerHTML = '';
        this.cluesTop.innerHTML = '';
        this.cluesLeft.innerHTML = '';

        this.gridBoard.style.gridTemplateColumns = `repeat(${this.size}, var(--cell-size))`;
        this.gridBoard.style.gridTemplateRows = `repeat(${this.size}, var(--cell-size))`;

        // Top Clues
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

        // Left Clues & Grid
        for (let r = 0; r < this.size; r++) {
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

            for (let c = 0; c < this.size; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                if (this.board[r][c] === 1) cell.classList.add('filled');
                if (this.board[r][c] === 2) cell.classList.add('x');
                
                if ((c + 1) % 5 === 0 && c !== this.size - 1) cell.classList.add('col-marker');
                if ((r + 1) % 5 === 0 && r !== this.size - 1) cell.classList.add('row-marker');

                cell.addEventListener('mousedown', (e) => this.handleCellClick(r, c, e));
                cell.addEventListener('mouseenter', () => this.handleCellEnter(r, c));
                
                this.gridBoard.appendChild(cell);
            }
        }
    }

    handleCellClick(r, c, e) {
        if (this.isCleared) return;
        this.isDragging = true;
        let targetState;

        if (e.button === 2) { // Right click
            targetState = this.board[r][c] === 2 ? 0 : 2;
        } else {
            const tool = this.currentTool === 'fill' ? 1 : 2;
            targetState = this.board[r][c] === tool ? 0 : tool;
        }

        this.dragState = targetState;
        this.updateCell(r, c, targetState);
    }

    handleCellEnter(r, c) {
        if (this.isCleared) return;
        if (this.isDragging && this.dragState !== null) {
            this.updateCell(r, c, this.dragState);
        }
    }

    updateCell(r, c, state) {
        if (this.board[r][c] === state) return;
        this.board[r][c] = state;
        
        const cellIdx = r * this.size + c;
        const cellEl = this.gridBoard.children[cellIdx];
        cellEl.classList.toggle('filled', state === 1);
        cellEl.classList.toggle('x', state === 2);
        
        this.checkWin();
    }

    checkWin() {
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                const isSolutionFilled = this.solution[r][c] === 1;
                const isBoardFilled = this.board[r][c] === 1;
                if (isSolutionFilled !== isBoardFilled) return;
            }
        }
        this.isCleared = true;
        this.messageArea.textContent = "🎉 クリア！！ おめでとうございます！";
        
        // Final polish: mark all empty cells with X or just clear them
        // (Optional: can add effect here)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.game = new PicrossGame();
});
