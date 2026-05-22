const PUZZLE_LIBRARY = {
    // Easy (5x5)
    "easy-heart": { size: 5, data: [[0,1,0,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]] },
    "easy-duck": { size: 5, data: [[0,1,1,0,0],[1,1,1,1,0],[0,1,1,1,1],[0,1,1,1,1],[0,0,1,1,0]] },
    "easy-note": { size: 5, data: [[0,0,1,1,0],[0,0,1,0,1],[0,0,1,0,0],[0,1,1,0,0],[0,1,1,0,0]] },
    "easy-smile": { size: 5, data: [[0,1,0,1,0],[0,1,0,1,0],[0,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]] },
    "easy-fish": { size: 5, data: [[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,1,0,1,0]] },
    "easy-star": { size: 5, data: [[0,0,1,0,0],[1,1,1,1,1],[0,1,1,1,0],[0,1,0,1,0],[1,0,0,0,1]] },
    "easy-umbrella": { size: 5, data: [[0,1,1,1,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0]] },
    "easy-cup": { size: 5, data: [[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,0],[0,1,1,0,0],[0,0,0,0,0]] },
    "easy-cat": { size: 5, data: [[1,0,0,0,1],[1,1,1,1,1],[1,0,1,0,1],[0,1,1,1,0],[0,1,0,1,0]] },
    "easy-tree": { size: 5, data: [[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0]] },

    // Normal (10x10)
    "normal-house": {
        size: 10,
        data: [
            [0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,0,1,1],[1,1,0,1,0,0,1,0,1,1],[1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1]
        ]
    },
    "normal-mushroom": {
        size: 10,
        data: [
            [0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,1,1,1,1,0],[1,1,1,0,0,1,1,0,0,1],[1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0]
        ]
    },
    "normal-dog": {
        size: 10,
        data: [
            [0,0,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0,0],[0,1,1,0,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0]
        ]
    },
    "normal-robot": {
        size: 10,
        data: [
            [0,0,1,1,1,1,0,0,0,0],[0,1,1,1,1,1,1,0,0,0],[0,1,0,1,1,0,1,0,0,0],[0,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,0,0],
            [1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,0,0,0,0],[0,0,1,0,0,1,0,0,0,0],[0,1,1,0,0,1,1,0,0,0],[0,1,1,0,0,1,1,0,0,0]
        ]
    },
    "normal-flower": {
        size: 10,
        data: [
            [0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,0,0,1,1,0],[1,1,0,0,1,1,0,0,1,1],[1,1,0,1,1,1,1,0,1,1],
            [1,1,0,1,1,1,1,0,1,1],[1,1,0,0,1,1,0,0,1,1],[0,1,1,0,0,0,0,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,0,1,1,0,0,0,0]
        ]
    },
    "normal-plane": {
        size: 10,
        data: [
            [0,0,0,0,1,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0]
        ]
    },

    // Hard (15x15)
    "hard-rocket": {
        size: 15,
        data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => {
            if (c === 7) return 1;
            if (r >= 2 && r <= 10 && Math.abs(c - 7) <= (r < 5 ? r - 2 : 2)) return 1;
            if (r >= 11 && r <= 12 && Math.abs(c - 7) <= 4) return 1;
            if (r === 13 && Math.abs(c - 7) <= 1) return 1;
            if (r === 14 && c === 7) return 1;
            return 0;
        }))
    },
    "hard-tree": {
        size: 15,
        data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => {
            if (r < 10 && Math.abs(c - 7) <= r) return 1;
            if (r >= 10 && r < 14 && Math.abs(c - 7) <= 1) return 1;
            if (r === 14 && Math.abs(c - 7) <= 3) return 1;
            return 0;
        }))
    },
    "hard-castle": {
        size: 15,
        data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => {
            if (r === 0 && (c === 2 || c === 6 || c === 12)) return 1;
            if (r === 1 && (c >= 1 && c <= 3 || c >= 5 && c <= 7 || c >= 11 && c <= 13)) return 1;
            if (r >= 2 && r <= 4 && (c >= 1 && c <= 3 || c >= 5 && c <= 7 || c >= 11 && c <= 13)) return 1;
            if (r === 5 && (c >= 1 && c <= 13)) return 1;
            if (r >= 6 && r <= 10 && (c >= 1 && c <= 13)) {
                if (r === 8 && c >= 6 && c <= 8) return 0; // Window
                return 1;
            }
            if (r >= 11 && r <= 14 && (c >= 1 && c <= 13)) {
                if (c >= 6 && c <= 8) return 0; // Door
                return 1;
            }
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
        this.startTime = null;
        this.timerInterval = null;
        this.currentPuzzleId = null;

        // Progress Tracking
        this.clearedPuzzles = JSON.parse(localStorage.getItem('picross_cleared') || '[]');
        
        // Items
        this.items = {
            straightPunch: 3 // Initial bonus
        };

        this.initElements();
        this.addEventListeners();
        this.initConfetti();
        this.updateItemDisplay();
        this.updateProgressDisplay();
        this.loadRandomPuzzle("all");
    }

    initElements() {
        this.gridBoard = document.getElementById('grid-board');
        this.cluesTop = document.getElementById('clues-top');
        this.cluesLeft = document.getElementById('clues-left');
        this.messageArea = document.getElementById('message-area');
        this.selectDifficulty = document.getElementById('select-difficulty');
        this.btnRandom = document.getElementById('btn-random');
        this.toolFill = document.getElementById('tool-fill');
        this.toolX = document.getElementById('tool-x');
        this.btnReset = document.getElementById('btn-reset');
        
        // Items
        this.btnStraightPunch = document.getElementById('btn-straight-punch');
        this.itemCountEl = document.getElementById('item-count');

        // Progress
        this.clearedCountEl = document.getElementById('cleared-count');
        this.totalCountEl = document.getElementById('total-count');

        // Victory elements
        this.victoryOverlay = document.getElementById('victory-overlay');
        this.btnNextPuzzle = document.getElementById('btn-next-puzzle');
        this.finishTimeEl = document.getElementById('finish-time');
    }

    addEventListeners() {
        this.btnRandom.addEventListener('click', () => {
            this.loadRandomPuzzle(this.selectDifficulty.value);
        });
        this.toolFill.addEventListener('click', () => this.setTool('fill'));
        this.toolX.addEventListener('click', () => this.setTool('x'));
        this.btnReset.addEventListener('click', () => this.resetBoard());

        this.btnStraightPunch.addEventListener('click', () => {
            this.useStraightPunch();
        });

        this.btnNextPuzzle.addEventListener('click', () => {
            this.loadRandomPuzzle(this.selectDifficulty.value);
        });

        window.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.dragState = null;
        });

        this.gridBoard.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    updateItemDisplay() {
        this.itemCountEl.textContent = this.items.straightPunch;
        this.btnStraightPunch.disabled = this.items.straightPunch <= 0 || this.isCleared;
    }

    updateProgressDisplay() {
        this.clearedCountEl.textContent = this.clearedPuzzles.length;
        this.totalCountEl.textContent = Object.keys(PUZZLE_LIBRARY).length;
    }

    useStraightPunch() {
        if (this.items.straightPunch <= 0 || this.isCleared) return;

        const incompleteCols = [];
        for (let c = 0; c < this.size; c++) {
            let isCorrect = true;
            for (let r = 0; r < this.size; r++) {
                if (this.solution[r][c] === 1 && this.board[r][c] !== 1) {
                    isCorrect = false;
                    break;
                }
            }
            if (!isCorrect) incompleteCols.push(c);
        }

        if (incompleteCols.length === 0) return;

        const targetCol = incompleteCols[Math.floor(Math.random() * incompleteCols.length)];
        for (let r = 0; r < this.size; r++) {
            const state = this.solution[r][targetCol] === 1 ? 1 : 2;
            this.updateCell(r, targetCol, state);
        }

        this.items.straightPunch--;
        this.updateItemDisplay();
        this.messageArea.textContent = "🥊 ストレートパンチ！";
    }

    setTool(tool) {
        this.currentTool = tool;
        this.toolFill.classList.toggle('active', tool === 'fill');
        this.toolX.classList.toggle('active', tool === 'x');
    }

    initConfetti() {
        this.confettiCanvas = document.getElementById('confetti-canvas');
        this.ctx = this.confettiCanvas.getContext('2d');
        this.confettiParticles = [];
        this.isConfettiRunning = false;
        
        window.addEventListener('resize', () => {
            if (this.isCleared) {
                this.confettiCanvas.width = window.innerWidth;
                this.confettiCanvas.height = window.innerHeight;
            }
        });
    }

    startConfetti() {
        this.confettiCanvas.width = window.innerWidth;
        this.confettiCanvas.height = window.innerHeight;
        this.confettiParticles = [];
        this.isConfettiRunning = true;
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        for (let i = 0; i < 150; i++) {
            this.confettiParticles.push({
                x: Math.random() * this.confettiCanvas.width,
                y: Math.random() * this.confettiCanvas.height - this.confettiCanvas.height,
                size: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 3 + 2,
                angle: Math.random() * 6.28,
                rotation: Math.random() * 0.2 - 0.1
            });
        }
        this.animateConfetti();
    }

    animateConfetti() {
        if (!this.isConfettiRunning) return;
        this.ctx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
        this.confettiParticles.forEach(p => {
            p.y += p.speed;
            p.angle += p.rotation;
            if (p.y > this.confettiCanvas.height) {
                p.y = -20;
                p.x = Math.random() * this.confettiCanvas.width;
            }
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.angle);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
        });
        requestAnimationFrame(() => this.animateConfetti());
    }

    stopConfetti() {
        this.isConfettiRunning = false;
    }

    loadRandomPuzzle(difficulty) {
        let keys = Object.keys(PUZZLE_LIBRARY);
        if (difficulty !== 'all') {
            keys = keys.filter(key => key.startsWith(difficulty));
        }
        
        // Prefer uncleared puzzles
        const uncleared = keys.filter(k => !this.clearedPuzzles.includes(k));
        const finalKeys = uncleared.length > 0 ? uncleared : keys;
        
        if (finalKeys.length === 0) return;
        
        const randomKey = finalKeys[Math.floor(Math.random() * finalKeys.length)];
        this.loadPuzzle(randomKey);
    }

    loadPuzzle(id) {
        const puzzle = PUZZLE_LIBRARY[id];
        if (!puzzle) return;

        this.currentPuzzleId = id;
        this.size = puzzle.size;
        this.solution = puzzle.data;
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.isCleared = false;
        this.messageArea.textContent = "";
        
        this.victoryOverlay.classList.remove('show');
        setTimeout(() => this.victoryOverlay.classList.add('hidden'), 500);
        this.stopConfetti();
        this.updateItemDisplay();

        this.startTime = Date.now();
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => this.updateTimerDisplay(), 1000);

        this.render();
    }

    updateTimerDisplay() {
        if (this.isCleared) return;
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        this.messageArea.textContent = `Time: ${mins}:${secs.toString().padStart(2, '0')}`;
    }

    resetBoard() {
        if (this.isCleared) return;
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.render();
    }

    calculateClues(arr) {
        const clues = [];
        let count = 0;
        for (let val of arr) {
            if (val === 1) count++;
            else if (count > 0) { clues.push(count); count = 0; }
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
        if (e.button === 2) targetState = this.board[r][c] === 2 ? 0 : 2;
        else {
            const tool = this.currentTool === 'fill' ? 1 : 2;
            targetState = this.board[r][c] === tool ? 0 : tool;
        }
        this.dragState = targetState;
        this.updateCell(r, c, targetState);
    }

    handleCellEnter(r, c) {
        if (this.isCleared) return;
        if (this.isDragging && this.dragState !== null) this.updateCell(r, c, this.dragState);
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
                if ((this.solution[r][c] === 1) !== (this.board[r][c] === 1)) return;
            }
        }
        
        this.isCleared = true;
        if (this.timerInterval) clearInterval(this.timerInterval);

        // Update progress
        if (!this.clearedPuzzles.includes(this.currentPuzzleId)) {
            this.clearedPuzzles.push(this.currentPuzzleId);
            localStorage.setItem('picross_cleared', JSON.stringify(this.clearedPuzzles));
            this.updateProgressDisplay();
        }

        this.items.straightPunch++;
        this.updateItemDisplay();

        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        this.finishTimeEl.textContent = `クリアタイム: ${mins}分 ${secs}秒 (アイテム+1!)`;
        this.messageArea.textContent = "🎉 クリア！！";

        const cells = this.gridBoard.children;
        for (let i = 0; i < cells.length; i++) {
            const r = Math.floor(i / this.size);
            const c = i % this.size;
            if (this.solution[r][c] === 1) cells[i].classList.add('cleared');
            else cells[i].classList.add('x');
        }

        setTimeout(() => {
            this.victoryOverlay.classList.remove('hidden');
            setTimeout(() => { this.victoryOverlay.classList.add('show'); this.startConfetti(); }, 10);
        }, 800);
    }
}

document.addEventListener('DOMContentLoaded', () => { window.game = new PicrossGame(); });
