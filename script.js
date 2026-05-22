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
    "easy-car": { size: 5, data: [[0,0,0,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,1,0,1,0],[0,0,0,0,0]] },
    "easy-bone": { size: 5, data: [[1,1,0,1,1],[1,1,1,1,1],[0,1,1,1,0],[1,1,1,1,1],[1,1,0,1,1]] },
    "easy-flag": { size: 5, data: [[1,1,1,1,0],[1,1,1,1,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0]] },
    "easy-diamond": { size: 5, data: [[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]] },
    "easy-box": { size: 5, data: [[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]] },

    // Normal (10x10)
    "normal-house": { size: 10, data: [[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,0,1,1],[1,1,0,1,0,0,1,0,1,1],[1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1]] },
    "normal-mushroom": { size: 10, data: [[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,1,1,1,1,0],[1,1,1,0,0,1,1,0,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0]] },
    "normal-dog": { size: 10, data: [[0,0,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0,0],[0,1,1,0,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0]] },
    "normal-robot": { size: 10, data: [[0,0,1,1,1,1,0,0,0,0],[0,1,1,1,1,1,1,0,0,0],[0,1,0,1,1,0,1,0,0,0],[0,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,0,0,0,0],[0,0,1,0,0,1,0,0,0,0],[0,1,1,0,0,1,1,0,0,0],[0,1,1,0,0,1,1,0,0,0]] },
    "normal-flower": { size: 10, data: [[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,0,0,1,1,0],[1,1,0,0,1,1,0,0,1,1],[1,1,0,1,1,1,1,0,1,1],[1,1,0,1,1,1,1,0,1,1],[1,1,0,0,1,1,0,0,1,1],[0,1,1,0,0,0,0,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,0,1,1,0,0,0,0]] },
    "normal-plane": { size: 10, data: [[0,0,0,0,1,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0]] },
    "normal-skull": { size: 10, data: [[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,0,1,1,1,1,0,1,1],[1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1],[0,1,1,1,0,0,1,1,1,0],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,1,0,1,1,0,1,0,0],[0,0,1,0,1,1,0,1,0,0]] },
    "normal-apple": { size: 10, data: [[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0]] },
    "normal-ghost": { size: 10, data: [[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,1,1,0,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,0,1,1,0,1,1,0,1],[1,0,1,1,1,1,0,1,1,0],[0,1,1,0,1,1,1,1,0,0]] },
    "normal-butterfly": { size: 10, data: [[1,1,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,1,1,1],[1,1,1,1,0,0,1,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,0,0,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1]] },

    // Hard (15x15)
    "hard-rocket": { size: 15, data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => { if (c === 7) return 1; if (r >= 2 && r <= 10 && Math.abs(c - 7) <= (r < 5 ? r - 2 : 2)) return 1; if (r >= 11 && r <= 12 && Math.abs(c - 7) <= 4) return 1; if (r === 13 && Math.abs(c - 7) <= 1) return 1; if (r === 14 && c === 7) return 1; return 0; })) },
    "hard-tree": { size: 15, data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => { if (r < 10 && Math.abs(c - 7) <= r) return 1; if (r >= 10 && r < 14 && Math.abs(c - 7) <= 1) return 1; if (r === 14 && Math.abs(c - 7) <= 3) return 1; return 0; })) },
    "hard-castle": { size: 15, data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => { if (r === 0 && (c === 2 || c === 6 || c === 12)) return 1; if (r === 1 && (c >= 1 && c <= 3 || c >= 5 && c <= 7 || c >= 11 && c <= 13)) return 1; if (r >= 2 && r <= 4 && (c >= 1 && c <= 3 || c >= 5 && c <= 7 || c >= 11 && c <= 13)) return 1; if (r === 5 && (c >= 1 && c <= 13)) return 1; if (r >= 6 && r <= 10 && (c >= 1 && c <= 13)) { if (r === 8 && c >= 6 && c <= 8) return 0; return 1; } if (r >= 11 && r <= 14 && (c >= 1 && c <= 13)) { if (c >= 6 && c <= 8) return 0; return 1; } return 0; })) },
    "hard-dragon": { size: 15, data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => { if (r === 2 && c >= 3 && c <= 11) return 1; if (r === 3 && (c === 2 || c === 12)) return 1; if (r === 4 && (c === 1 || c === 4 || c === 10 || c === 13)) return 1; if (r === 5 && (c === 1 || c === 13)) return 1; if (r === 6 && (c === 1 || c === 5 || c === 9 || c === 13)) return 1; if (r === 7 && (c >= 1 && c <= 13)) return 1; if (r === 8 && (c === 2 || c === 12)) return 1; if (r === 9 && (c >= 3 && c <= 11)) return 1; if (r >= 10 && r <= 12 && Math.abs(c - 7) <= 2) return 1; if (r === 13 && Math.abs(c - 7) <= 4) return 1; if (r === 14 && (c === 2 || c === 12)) return 1; return 0; })) },
    "hard-ship": { size: 15, data: Array(15).fill().map((_, r) => Array(15).fill().map((_, c) => { if (r >= 2 && r <= 8 && c === 7) return 1; if (r >= 3 && r <= 7 && Math.abs(c - 10) <= (7-r)) return 1; if (r === 9 && c >= 2 && c <= 12) return 1; if (r === 10 && c >= 1 && c <= 13) return 1; if (r === 11 && c >= 2 && c <= 12) return 1; if (r >= 12 && Math.abs(c-7) <= (r-12)*2) return 0; return 0; })) },

    // Boss (20x20)
    "boss-demon-king": {
        size: 20,
        data: Array(20).fill().map((_, r) => Array(20).fill().map((_, c) => {
            if (r === 2 && (c === 5 || c === 14)) return 1;
            if (r === 3 && (c === 5 || c === 6 || c === 13 || c === 14)) return 1;
            if (r === 4 && (c >= 5 && c <= 7 || c >= 12 && c <= 14)) return 1;
            if (r >= 6 && r <= 15 && c >= 4 && c <= 15) {
                if (r === 9 && (c === 6 || c === 7 || c === 12 || c === 13)) return 0;
                if (r === 12 && c >= 8 && c <= 11) return 0;
                if (r === 14 && c >= 6 && c <= 13) return 0;
                return 1;
            }
            if (r >= 16 && r <= 18 && (c === 6 || c === 13)) return 1;
            return 0;
        }))
    }
};

const THEMES = [
    { id: 'default', name: 'デフォルト', price: 0, class: '' },
    { id: 'dark', name: 'ダーク', price: 100, class: 'theme-dark' },
    { id: 'forest', name: 'フォレスト', price: 300, class: 'theme-forest' },
    { id: 'sakura', name: 'サクラ', price: 500, class: 'theme-sakura' },
    { id: 'midnight', name: 'ミッドナイト', price: 1000, class: 'theme-midnight' }
];

class PicrossGame {
    constructor() {
        this.size = 5;
        this.solution = [];
        this.board = [];
        this.isDragging = false;
        this.dragButton = null;
        this.dragState = null;
        this.isCleared = false;
        this.startTime = null;
        this.timerInterval = null;
        this.currentPuzzleId = null;

        // Progress Tracking
        this.clearedPuzzles = JSON.parse(localStorage.getItem('picross_cleared') || '[]');
        this.coins = parseInt(localStorage.getItem('picross_coins') || '0');
        this.ownedThemes = JSON.parse(localStorage.getItem('picross_themes') || '["default"]');
        this.currentThemeId = localStorage.getItem('picross_current_theme') || 'default';
        
        // Items
        const savedItems = JSON.parse(localStorage.getItem('picross_items') || '{"straightPunch": 3, "splashPunch": 3}');
        this.items = savedItems;

        this.initElements();
        this.addEventListeners();
        this.initConfetti();
        this.updateItemDisplay();
        this.updateProgressDisplay();
        this.applyTheme(this.currentThemeId);
        this.checkBossUnlock();
        this.loadRandomPuzzle("all");
    }

    claimReward(itemType) {
        if (!this.isCleared) return;
        this.items[itemType]++;
        this.saveItems();
        this.updateItemDisplay();
        this.rewardArea.classList.add('hidden');
        this.btnNextPuzzle.classList.remove('hidden');
        this.messageArea.textContent = `🎁 ${itemType === 'straightPunch' ? 'ストレートパンチ' : 'スプラッシュパンチ'}をゲット！`;
    }

    initElements() {
        this.gridBoard = document.getElementById('grid-board');
        this.cluesTop = document.getElementById('clues-top');
        this.cluesLeft = document.getElementById('clues-left');
        this.messageArea = document.getElementById('message-area');
        this.selectDifficulty = document.getElementById('select-difficulty');
        this.optBoss = document.getElementById('opt-boss');
        this.btnRandom = document.getElementById('btn-random');
        this.btnReset = document.getElementById('btn-reset');
        this.coinCountEl = document.getElementById('coin-count');
        this.btnStraightPunch = document.getElementById('btn-straight-punch');
        this.btnSplashPunch = document.getElementById('btn-splash-punch');
        this.itemCountEl = document.getElementById('item-count');
        this.itemCountSplashEl = document.getElementById('item-count-splash');

        // Progress
        this.clearedEasyEl = document.getElementById('cleared-easy');
        this.totalEasyEl = document.getElementById('total-easy');
        this.clearedNormalEl = document.getElementById('cleared-normal');
        this.totalNormalEl = document.getElementById('total-normal');
        this.clearedHardEl = document.getElementById('cleared-hard');
        this.totalHardEl = document.getElementById('total-hard');
        this.clearedBossEl = document.getElementById('cleared-boss');
        this.totalBossEl = document.getElementById('total-boss');
        this.bossRow = document.getElementById('progress-boss-row');

        // Shop
        this.btnOpenShop = document.getElementById('btn-open-shop');
        this.btnCloseShop = document.getElementById('btn-close-shop');
        this.shopModal = document.getElementById('shop-modal');
        this.themeListEl = document.getElementById('theme-list');

        // Victory
        this.victoryOverlay = document.getElementById('victory-overlay');
        this.btnNextPuzzle = document.getElementById('btn-next-puzzle');
        this.finishTimeEl = document.getElementById('finish-time');
        this.rewardArea = document.getElementById('reward-selection-area');
    }

    addEventListeners() {
        this.btnRandom.addEventListener('click', () => this.loadRandomPuzzle(this.selectDifficulty.value));
        this.btnReset.addEventListener('click', () => this.resetBoard());
        this.btnStraightPunch.addEventListener('click', () => this.useStraightPunch());
        this.btnSplashPunch.addEventListener('click', () => this.useSplashPunch());
        this.btnNextPuzzle.addEventListener('click', () => this.loadRandomPuzzle(this.selectDifficulty.value));
        
        // Shop events
        this.btnOpenShop.addEventListener('click', () => this.openShop());
        this.btnCloseShop.addEventListener('click', () => this.shopModal.classList.add('hidden'));

        window.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.dragButton = null;
            this.dragState = null;
        });

        this.gridBoard.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    applyTheme(themeId) {
        const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
        document.body.className = theme.class;
        this.currentThemeId = themeId;
        localStorage.setItem('picross_current_theme', themeId);
    }

    openShop() {
        this.renderShop();
        this.shopModal.classList.remove('hidden');
    }

    renderShop() {
        this.themeListEl.innerHTML = '';
        THEMES.forEach(theme => {
            const isOwned = this.ownedThemes.includes(theme.id);
            const isActive = this.currentThemeId === theme.id;
            
            const item = document.createElement('div');
            item.className = `theme-item ${isActive ? 'active' : ''}`;
            
            let actionHtml = '';
            if (isOwned) {
                actionHtml = isActive ? '<span>適用中</span>' : `<button class="btn-apply" onclick="game.applyTheme('${theme.id}'); game.renderShop();">適用</button>`;
            } else {
                const canAfford = this.coins >= theme.price;
                actionHtml = `<button class="btn-purchase" ${canAfford ? '' : 'disabled'} onclick="game.purchaseTheme('${theme.id}')">${theme.price}💰 購入</button>`;
            }

            item.innerHTML = `
                <div class="theme-info">
                    <div class="theme-name">${theme.name}</div>
                    <div class="theme-price">${isOwned ? '解放済み' : theme.price + ' コイン'}</div>
                </div>
                <div class="theme-action">${actionHtml}</div>
            `;
            this.themeListEl.appendChild(item);
        });
    }

    purchaseTheme(themeId) {
        const theme = THEMES.find(t => t.id === themeId);
        if (theme && this.coins >= theme.price) {
            this.coins -= theme.price;
            this.ownedThemes.push(themeId);
            localStorage.setItem('picross_coins', this.coins.toString());
            localStorage.setItem('picross_themes', JSON.stringify(this.ownedThemes));
            this.updateProgressDisplay();
            this.renderShop();
        }
    }

    checkBossUnlock() {
        const unlockThreshold = 10;
        const targetCleared = this.clearedPuzzles.filter(k => k.startsWith('normal') || k.startsWith('hard')).length;
        if (targetCleared >= unlockThreshold) {
            this.optBoss.disabled = false;
            this.optBoss.textContent = "魔王 (20x20)";
            this.bossRow.style.display = 'flex';
            return true;
        } else {
            this.optBoss.textContent = `？？？ (中・上級をあと${unlockThreshold - targetCleared}問)`;
            return false;
        }
    }

    updateItemDisplay() {
        this.itemCountEl.textContent = this.items.straightPunch;
        this.btnStraightPunch.disabled = this.items.straightPunch <= 0 || this.isCleared;
        this.itemCountSplashEl.textContent = this.items.splashPunch;
        this.btnSplashPunch.disabled = this.items.splashPunch <= 0 || this.isCleared;
    }

    updateProgressDisplay() {
        this.coinCountEl.textContent = this.coins;
        const allKeys = Object.keys(PUZZLE_LIBRARY);
        this.clearedEasyEl.textContent = this.clearedPuzzles.filter(k => k.startsWith('easy')).length;
        this.totalEasyEl.textContent = allKeys.filter(k => k.startsWith('easy')).length;
        this.clearedNormalEl.textContent = this.clearedPuzzles.filter(k => k.startsWith('normal')).length;
        this.totalNormalEl.textContent = allKeys.filter(k => k.startsWith('normal')).length;
        this.clearedHardEl.textContent = this.clearedPuzzles.filter(k => k.startsWith('hard')).length;
        this.totalHardEl.textContent = allKeys.filter(k => k.startsWith('hard')).length;
        this.clearedBossEl.textContent = this.clearedPuzzles.filter(k => k.startsWith('boss')).length;
        this.totalBossEl.textContent = allKeys.filter(k => k.startsWith('boss')).length;
    }

    saveItems() {
        localStorage.setItem('picross_items', JSON.stringify(this.items));
    }

    useStraightPunch() {
        if (this.items.straightPunch <= 0 || this.isCleared) return;
        const incompleteCols = [];
        for (let c = 0; c < this.size; c++) {
            let correct = true;
            for (let r = 0; r < this.size; r++) if (this.solution[r][c] === 1 && this.board[r][c] !== 1) { correct = false; break; }
            if (!correct) incompleteCols.push(c);
        }
        if (incompleteCols.length === 0) return;
        const targetCol = incompleteCols[Math.floor(Math.random() * incompleteCols.length)];
        for (let r = 0; r < this.size; r++) this.updateCell(r, targetCol, this.solution[r][targetCol] === 1 ? 1 : 2);
        this.items.straightPunch--;
        this.saveItems();
        this.updateItemDisplay();
        this.messageArea.textContent = "🥊 ストレートパンチ！";
    }

    useSplashPunch() {
        if (this.items.splashPunch <= 0 || this.isCleared) return;
        const incorrectCells = [];
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.board[r][c] === 0 || (this.board[r][c] === 1 && this.solution[r][c] === 0) || (this.board[r][c] === 2 && this.solution[r][c] === 1)) {
                    incorrectCells.push({r, c});
                }
            }
        }
        if (incorrectCells.length === 0) return;
        const numToReveal = Math.min(5, incorrectCells.length);
        for (let i = 0; i < numToReveal; i++) {
            const idx = Math.floor(Math.random() * incorrectCells.length);
            const {r, c} = incorrectCells.splice(idx, 1)[0];
            this.updateCell(r, c, this.solution[r][c] === 1 ? 1 : 2);
        }
        this.items.splashPunch--;
        this.saveItems();
        this.updateItemDisplay();
        this.messageArea.textContent = "💦 スプラッシュパンチ！";
    }

    initConfetti() {
        this.confettiCanvas = document.getElementById('confetti-canvas');
        this.ctx = this.confettiCanvas.getContext('2d');
        this.confettiParticles = [];
        this.isConfettiRunning = false;
        window.addEventListener('resize', () => { if (this.isCleared) { this.confettiCanvas.width = window.innerWidth; this.confettiCanvas.height = window.innerHeight; } });
    }

    startConfetti() {
        this.confettiCanvas.width = window.innerWidth;
        this.confettiCanvas.height = window.innerHeight;
        this.isConfettiRunning = true;
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        for (let i = 0; i < 150; i++) this.confettiParticles.push({ x: Math.random() * this.confettiCanvas.width, y: Math.random() * this.confettiCanvas.height - this.confettiCanvas.height, size: Math.random() * 10 + 5, color: colors[Math.floor(Math.random() * colors.length)], speed: Math.random() * 3 + 2, angle: Math.random() * 6.28, rotation: Math.random() * 0.2 - 0.1 });
        this.animateConfetti();
    }

    animateConfetti() {
        if (!this.isConfettiRunning) return;
        this.ctx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
        this.confettiParticles.forEach(p => {
            p.y += p.speed; p.angle += p.rotation;
            if (p.y > this.confettiCanvas.height) { p.y = -20; p.x = Math.random() * this.confettiCanvas.width; }
            this.ctx.save(); this.ctx.translate(p.x, p.y); this.ctx.rotate(p.angle); this.ctx.fillStyle = p.color; this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size); this.ctx.restore();
        });
        requestAnimationFrame(() => this.animateConfetti());
    }

    stopConfetti() { this.isConfettiRunning = false; }

    loadRandomPuzzle(difficulty) {
        let keys = Object.keys(PUZZLE_LIBRARY);
        if (difficulty !== 'all') keys = keys.filter(key => key.startsWith(difficulty));
        else if (!this.checkBossUnlock()) keys = keys.filter(key => !key.startsWith('boss'));
        let candidates = keys.filter(k => !this.clearedPuzzles.includes(k));
        if (candidates.length > 1) candidates = candidates.filter(k => k !== this.currentPuzzleId);
        if (candidates.length === 0) { candidates = keys.filter(k => k !== this.currentPuzzleId); if (candidates.length === 0) candidates = keys; }
        this.loadPuzzle(candidates[Math.floor(Math.random() * candidates.length)]);
    }

    loadPuzzle(id) {
        const puzzle = PUZZLE_LIBRARY[id];
        if (!puzzle) return;
        this.currentPuzzleId = id;
        this.size = puzzle.size;
        this.solution = puzzle.data;
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.isCleared = false;
        const root = document.documentElement;
        if (this.size === 20) root.style.setProperty('--cell-size', '18px');
        else if (this.size === 15) root.style.setProperty('--cell-size', '22px');
        else root.style.setProperty('--cell-size', '30px');
        this.messageArea.textContent = !this.clearedPuzzles.includes(id) ? "🆕 未クリアの問題" : "✅ クリア済みの問題";
        this.victoryOverlay.classList.remove('show');
        setTimeout(() => this.victoryOverlay.classList.add('hidden'), 500);
        this.stopConfetti();
        this.updateItemDisplay();
        this.rewardArea.classList.remove('hidden');
        this.btnNextPuzzle.classList.add('hidden');
        this.startTime = Date.now();
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => this.updateTimerDisplay(), 1000);
        this.render();
    }

    updateTimerDisplay() {
        if (this.isCleared) return;
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        this.messageArea.textContent = `Time: ${Math.floor(elapsed / 60)}:${(elapsed % 60).toString().padStart(2, '0')}`;
    }

    resetBoard() { if (!this.isCleared) { this.board = Array(this.size).fill().map(() => Array(this.size).fill(0)); this.render(); } }

    calculateClues(arr) {
        const clues = []; let count = 0;
        for (let val of arr) { if (val === 1) count++; else if (count > 0) { clues.push(count); count = 0; } }
        if (count > 0) clues.push(count);
        return clues.length > 0 ? clues : [0];
    }

    render() {
        this.gridBoard.innerHTML = ''; this.cluesTop.innerHTML = ''; this.cluesLeft.innerHTML = '';
        this.gridBoard.style.gridTemplateColumns = `repeat(${this.size}, var(--cell-size))`;
        this.gridBoard.style.gridTemplateRows = `repeat(${this.size}, var(--cell-size))`;
        for (let c = 0; c < this.size; c++) {
            const col = []; for (let r = 0; r < this.size; r++) col.push(this.solution[r][c]);
            const clueEl = document.createElement('div'); clueEl.className = 'clue-col';
            if ((c + 1) % 5 === 0 && c !== this.size - 1) clueEl.classList.add('col-marker');
            this.calculateClues(col).forEach(num => { const span = document.createElement('span'); span.textContent = num; clueEl.appendChild(span); });
            this.cluesTop.appendChild(clueEl);
        }
        for (let r = 0; r < this.size; r++) {
            const clueEl = document.createElement('div'); clueEl.className = 'clue-row';
            if ((r + 1) % 5 === 0 && r !== this.size - 1) clueEl.classList.add('row-marker');
            this.calculateClues(this.solution[r]).forEach(num => { const span = document.createElement('span'); span.textContent = num; clueEl.appendChild(span); });
            this.cluesLeft.appendChild(clueEl);
            for (let c = 0; c < this.size; c++) {
                const cell = document.createElement('div'); cell.className = 'cell';
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
        this.isDragging = true; this.dragButton = e.button;
        let target = e.button === 0 ? (this.board[r][c] === 1 ? 0 : 1) : (e.button === 2 ? (this.board[r][c] === 2 ? 0 : 2) : null);
        if (target !== null) { this.dragState = target; this.updateCell(r, c, target); }
    }

    handleCellEnter(r, c) { if (!this.isCleared && this.isDragging && this.dragState !== null) this.updateCell(r, c, this.dragState); }

    updateCell(r, c, state) {
        if (this.board[r][c] === state) return;
        this.board[r][c] = state;
        const cell = this.gridBoard.children[r * this.size + c];
        cell.classList.toggle('filled', state === 1);
        cell.classList.toggle('x', state === 2);
        this.checkWin();
    }

    checkWin() {
        for (let r = 0; r < this.size; r++) for (let c = 0; c < this.size; c++) if ((this.solution[r][c] === 1) !== (this.board[r][c] === 1)) return;
        this.isCleared = true; if (this.timerInterval) clearInterval(this.timerInterval);
        let reward = this.currentPuzzleId.startsWith('boss') ? 200 : (this.currentPuzzleId.startsWith('hard') ? 100 : (this.currentPuzzleId.startsWith('normal') ? 30 : 10));
        if (!this.clearedPuzzles.includes(this.currentPuzzleId)) {
            this.clearedPuzzles.push(this.currentPuzzleId); this.coins += reward;
            localStorage.setItem('picross_cleared', JSON.stringify(this.clearedPuzzles));
            localStorage.setItem('picross_coins', this.coins.toString());
            this.updateProgressDisplay(); this.checkBossUnlock();
        }
        this.updateItemDisplay();
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        this.finishTimeEl.textContent = `クリアタイム: ${Math.floor(elapsed / 60)}分 ${elapsed % 60}秒 (コイン+${reward}!)`;
        this.messageArea.textContent = "🎉 クリア！！";
        const cells = this.gridBoard.children;
        for (let i = 0; i < cells.length; i++) {
            const r = Math.floor(i / this.size), c = i % this.size;
            if (this.solution[r][c] === 1) cells[i].classList.add('cleared'); else cells[i].classList.add('x');
        }
        setTimeout(() => { this.victoryOverlay.classList.remove('hidden'); setTimeout(() => { this.victoryOverlay.classList.add('show'); this.startConfetti(); }, 10); }, 800);
    }
}
window.game = new PicrossGame();
document.addEventListener('DOMContentLoaded', () => {});
