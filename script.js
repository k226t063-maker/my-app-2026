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
        this.startTime = null;
        this.timerInterval = null;

        this.initElements();
        this.addEventListeners();
        this.initConfetti();
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
        
        // Victory elements
        this.victoryOverlay = document.getElementById('victory-overlay');
        this.btnNextPuzzle = document.getElementById('btn-next-puzzle');
        this.finishTimeEl = document.getElementById('finish-time');
    }

    addEventListeners() {
        this.btnStart.addEventListener('click', () => {
            this.loadPuzzle(this.selectPuzzle.value);
        });
        this.toolFill.addEventListener('click', () => this.setTool('fill'));
        this.toolX.addEventListener('click', () => this.setTool('x'));
        this.btnReset.addEventListener('click', () => this.resetBoard());

        this.btnNextPuzzle.addEventListener('click', () => {
            this.loadNextPuzzle();
        });

        window.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.dragState = null;
        });

        this.gridBoard.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
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

    loadPuzzle(id) {
        const puzzle = PUZZLE_LIBRARY[id];
        if (!puzzle) return;

        this.size = puzzle.size;
        this.solution = puzzle.data;
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.isCleared = false;
        this.messageArea.textContent = "";
        
        // Reset victory overlay
        this.victoryOverlay.classList.remove('show');
        setTimeout(() => this.victoryOverlay.classList.add('hidden'), 500);
        this.stopConfetti();

        // Set select value in case it was loaded programmatically
        this.selectPuzzle.value = id;

        // Start timer
        this.startTime = Date.now();
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.updateTimerDisplay(); // Initial call
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

    loadNextPuzzle() {
        const options = Array.from(this.selectPuzzle.options);
        const currentIndex = options.findIndex(opt => opt.value === this.selectPuzzle.value);
        const nextIndex = (currentIndex + 1) % options.length;
        this.loadPuzzle(options[nextIndex].value);
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
        if (this.timerInterval) clearInterval(this.timerInterval);

        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        const timeStr = `${mins}分 ${secs}秒`;
        
        this.finishTimeEl.textContent = `クリアタイム: ${timeStr}`;
        this.messageArea.textContent = "🎉 クリア！！";

        // Add cleared class to cells for animation
        const cells = this.gridBoard.children;
        for (let i = 0; i < cells.length; i++) {
            const r = Math.floor(i / this.size);
            const c = i % this.size;
            if (this.solution[r][c] === 1) {
                cells[i].classList.add('cleared');
            } else {
                cells[i].classList.add('x'); // Auto-fill empty cells with X
            }
        }

        // Show spectacular victory overlay
        setTimeout(() => {
            this.victoryOverlay.classList.remove('hidden');
            setTimeout(() => {
                this.victoryOverlay.classList.add('show');
                this.startConfetti();
            }, 10);
        }, 800);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.game = new PicrossGame();
});
