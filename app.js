// http://jrgraphix.net/research/unicode.php

(async () => {
    const COLOR = {
        bg: '#200017',
    };

    const MAIN_AREA = {
        left: 61,
        right: 1085,
        top: 183,
        bottom: 951,
    };
    MAIN_AREA.width = MAIN_AREA.right - MAIN_AREA.left;
    MAIN_AREA.height = MAIN_AREA.bottom - MAIN_AREA.top;

    const SEC_AREA = {
        left: 1137,
        right: 1857,
        top: 75,
        bottom: 555,
    };
    SEC_AREA.width = SEC_AREA.right - SEC_AREA.left;
    SEC_AREA.height = SEC_AREA.bottom - SEC_AREA.top;

    const SCAN_AREA = {
        top : SEC_AREA.top,
        height : MAIN_AREA.bottom - SEC_AREA.top,
        left : MAIN_AREA.left,
        width : SEC_AREA.right - MAIN_AREA.left
    };

    const KEYBOARD = {
        left: 10,
        top: 458,
    };

    const CONSOLE = {
        top: MAIN_AREA.top + 10,
        left: MAIN_AREA.left + 10,
        right: MAIN_AREA.right - 294,
        bottom: MAIN_AREA.bottom - 350,
        lineCols: 72,
        lineRows: 27,
    };
    CONSOLE.width = CONSOLE.right - CONSOLE.left;
    CONSOLE.height = CONSOLE.bottom - CONSOLE.top;
    CONSOLE.bufferLimit = CONSOLE.lineRows * CONSOLE.lineCols;
    CONSOLE.areaLimit = CONSOLE.bufferLimit / 9;
    CONSOLE.gridCellWidth = CONSOLE.width / CONSOLE.lineCols;
    CONSOLE.gridCellHeight = CONSOLE.height / CONSOLE.lineRows;
    CONSOLE.lineCols3 = CONSOLE.lineCols / 3;
    CONSOLE.lineRows3 = CONSOLE.lineRows / 3;

    const TRANSMISSION = {
        top: MAIN_AREA.top + 10,
        left: MAIN_AREA.right - 284,
        right: MAIN_AREA.right - 10,
        bottom: MAIN_AREA.bottom - 350,
    };
    TRANSMISSION.width = TRANSMISSION.right - TRANSMISSION.left;
    TRANSMISSION.height = TRANSMISSION.bottom - TRANSMISSION.top;

    const HEAT = {
        max: 30,
    };

    const keys = {
        'q': {name: 'q', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 0, groupCol: 0},
        'w': {name: 'w', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 1, groupCol: 0},
        'e': {name: 'e', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 2, groupCol: 0},
        'r': {name: 'r', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 3, groupCol: 1},
        't': {name: 't', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 4, groupCol: 1},
        'y': {name: 'y', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 5, groupCol: 1},
        'u': {name: 'u', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 6, groupCol: 1},
        'i': {name: 'i', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 7, groupCol: 2},
        'o': {name: 'o', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 8, groupCol: 2},
        'p': {name: 'p', heat: 0, isDestroyed: false, isPushed: false, groupRow: 0, pos: 9, groupCol: 2},
        'a': {name: 'a', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 0, groupCol: 0},
        's': {name: 's', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 1, groupCol: 0},
        'd': {name: 'd', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 2, groupCol: 0},
        'f': {name: 'f', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 3, groupCol: 1},
        'g': {name: 'g', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 4, groupCol: 1},
        'h': {name: 'h', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 5, groupCol: 1},
        'j': {name: 'j', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 6, groupCol: 2},
        'k': {name: 'k', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 7, groupCol: 2},
        'l': {name: 'l', heat: 0, isDestroyed: false, isPushed: false, groupRow: 1, pos: 8, groupCol: 2},
        'z': {name: 'z', heat: 0, isDestroyed: false, isPushed: false, groupRow: 2, pos: 0, groupCol: 0},
        'x': {name: 'x', heat: 0, isDestroyed: false, isPushed: false, groupRow: 2, pos: 1, groupCol: 0},
        'c': {name: 'c', heat: 0, isDestroyed: false, isPushed: false, groupRow: 2, pos: 2, groupCol: 0},
        'v': {name: 'v', heat: 0, isDestroyed: false, isPushed: false, groupRow: 2, pos: 3, groupCol: 1},
        'b': {name: 'b', heat: 0, isDestroyed: false, isPushed: false, groupRow: 2, pos: 4, groupCol: 1},
        'n': {name: 'n', heat: 0, isDestroyed: false, isPushed: false, groupRow: 2, pos: 5, groupCol: 2},
        'm': {name: 'm', heat: 0, isDestroyed: false, isPushed: false, groupRow: 2, pos: 6, groupCol: 2},
    };

    const RACES = {
        'TOIRPYC': {
            name: 'Toir Pyc',
            chars: [
                '𐠁',
                '𐠂',
                '𐠃',
                '𐠄',
                '𐠅',
                '𐠈',
                '𐠊',
                '𐠋',
                '𐠌',
                '𐠍',
                '𐠎',
                '𐠏',
                '𐠐',
                '𐠑',
                '𐠒',
                '𐠓',
                '𐠔',
                '𐠕',
                '𐠖',
                '𐠗',
                '𐠘',
                '𐠙',
                '𐠚',
                '𐠛',
                '𐠜',
                '𐠝',
                '𐠞',
                '𐠟',
                '𐠠',
                '𐠡',
                '𐠢',
                '𐠣',
                '𐠤',
                '𐠥',
                '𐠦',
                '𐠧',
                '𐠨',
                '𐠩',
                '𐠪',
                '𐠫',
                '𐠬',
                '𐠭',
                '𐠮',
                '𐠯',
                '𐠰',
                '𐠱',
                '𐠲',
                '𐠳',
                '𐠴',
                '𐠵',
                '𐠷',
                '𐠸',
                '𐠼',
            ],
        },
        'AYNAMSO': {
            name: 'Aynamso',
            chars: [
                '𐒀',
                '𐒁',
                '𐒂',
                '𐒄',
                '𐒅',
                '𐒈',
                '𐒉',
                '𐒊',
                '𐒋',
                '𐒌',
                '𐒍',
                '𐒎',
                '𐒏',
                '𐒐',
                '𐒑',
                '𐒒',
                '𐒓',
                '𐒔',
                '𐒕',
                '𐒗',
                '𐒚',
                '𐒛',
                '𐒜',
                '𐒝',
                '𐒢',
                '𐒣',
                '𐒤',
                '𐒥',
                '𐒦',
            ],
        },
        'CINUR': {
            name: 'Cinur',
            chars: [
                'ᚠ',
                'ᚡ',
                'ᚢ',
                'ᚣ',
                'ᚤ',
                'ᚥ',
                'ᚦ',
                'ᚧ',
                'ᚨ',
                'ᚩ',
                'ᚪ',
                'ᚫ',
                'ᚬ',
                'ᚭ',
                'ᚮ',
                'ᚯ',
                'ᚰ',
                'ᚱ',
                'ᚲ',
                'ᚳ',
                'ᚴ',
                'ᚵ',
                'ᚶ',
                'ᚷ',
                'ᚸ',
                'ᚹ',
                'ᚺ',
                'ᚻ',
                'ᚼ',
                'ᚽ',
                'ᚾ',
                'ᚿ',
                'ᛀ',
                'ᛁ',
                'ᛂ',
                'ᛃ',
                'ᛄ',
                'ᛅ',
                'ᛆ',
                'ᛇ',
                'ᛈ',
                'ᛉ',
                'ᛊ',
                'ᛋ',
                'ᛌ',
                'ᛍ',
                'ᛎ',
                'ᛏ',
                'ᛐ',
                'ᛑ',
                'ᛒ',
                'ᛓ',
                'ᛔ',
                'ᛕ',
                'ᛖ',
                'ᛗ',
                'ᛘ',
                'ᛙ',
                'ᛚ',
                'ᛛ',
                'ᛜ',
                'ᛝ',
                'ᛞ',
                'ᛟ',
                'ᛠ',
                'ᛡ',
                'ᛢ',
                'ᛣ',
                'ᛤ',
                'ᛥ',
                'ᛦ',
                'ᛨ',
                'ᛩ',
                'ᛪ',
                '᛭',
                'ᛮ',
                'ᛯ',
                'ᛰ',
            ],
        },
        'SITI RAGU': {
            name: 'Siti Ragu',
            chars: [
                '𐎀',
                '𐎁',
                '𐎂',
                '𐎃',
                '𐎄',
                '𐎅',
                '𐎇',
                '𐎈',
                '𐎉',
                '𐎊',
                '𐎌',
                '𐎍',
                '𐎎',
                '𐎏',
                '𐎐',
                '𐎒',
                '𐎓',
                '𐎔',
                '𐎕',
                '𐎘',
                '𐎙',
                '𐎚',
                '𐎛',
                '𐎜',
                '𐎝',
            ],
        },
        'NAIVASH': {
            name: 'Naivash',
            chars: [
                '𐑐',
                '𐑑',
                '𐑒',
                '𐑓',
                '𐑔',
                '𐑕',
                '𐑖',
                '𐑗',
                '𐑘',
                '𐑙',
                '𐑚',
                '𐑛',
                '𐑜',
                '𐑝',
                '𐑞',
                '𐑟',
                '𐑠',
                '𐑡',
                '𐑢',
                '𐑣',
                '𐑤',
                '𐑥',
                '𐑦',
                '𐑧',
                '𐑨',
                '𐑩',
                '𐑪',
                '𐑫',
                '𐑬',
                '𐑭',
                '𐑮',
                '𐑯',
                '𐑰',
                '𐑱',
                '𐑲',
                '𐑳',
                '𐑴',
                '𐑵',
                '𐑶',
                '𐑷',
                '𐑸',
                '𐑹',
                '𐑺',
                '𐑻',
                '𐑼',
                '𐑽',
                '𐑾',
                '𐑿',
            ],
        },
        'KIPOIHTE': {
            name: 'Kipoihte',
            chars: [
                'ሂ',
                'ሄ',
                'ህ',
                'ሇ',
                'ሉ',
                'ሏ',
                'ሕ',
                'ሖ',
                'ሟ',
                'ሠ',
                'ሧ',
                'ረ',
                'ሱ',
                'ሴ',
                'ሹ',
                'ቄ',
                'ቊ',
                'ቍ',
                'ቐ',
                'ቖ',
                'ቤ',
                'ቯ',
                'ታ',
                'ት',
                'ቶ',
                'ኀ',
                'ኆ',
                'ኊ',
                'ኋ',
                'ኍ',
                'ኖ',
                'ኚ',
                'አ',
                'ኩ',
                'ኪ',
                'ኵ',
                'ው',
                'ዎ',
                'ዒ',
                'ዓ',
                'ዛ',
                'ዠ',
                'ዢ',
                'ይ',
                'ዾ',
                'ጒ',
                'ጔ',
                'ጕ',
                'ጞ',
                'ጡ',
                'ጯ',
                'ጻ',
                'ጽ',
                'ፆ',
                'ፋ',
                'ፑ',
                'ፓ',
                'ፔ',
                'ፖ',
                'ፗ',
                'ፚ',
                '፦',
                '፧',
                '፨',
                '፩',
                '፪',
                '፰',
                '፲',
                '፴',
                '፵',
                '፶',
            ],
        },
        'SNETTAPELLIA': {
            name: 'Snettapellia',
            chars: [
                '⠈',
                '⠐',
                '⠘',
                '⠠',
                '⠨',
                '⠰',
                '⠸',
                '⡀',
                '⡈',
                '⡐',
                '⡘',
                '⡠',
                '⡨',
                '⡰',
                '⡸',
                '⢀',
                '⢈',
                '⢐',
                '⢘',
                '⢠',
                '⢨',
                '⢰',
                '⢸',
                '⣀',
                '⣈',
                '⣐',
                '⣘',
                '⣠',
                '⣨',
                '⣰',
                '⣸',
            ],
        },
        'KEERG': {
            name: 'Keerg',
            chars: [
                'Ͱ',
                'ͼ',
                'Έ',
                'Ό',
                'ΐ',
                'Δ',
                'Θ',
                'Μ',
                'Π',
                'Τ',
                'Ψ',
                'ά',
                'ΰ',
                'δ',
                'θ',
                'μ',
                'π',
                'τ',
                'ψ',
                'ό',
                'ϐ',
                'ϔ',
                'Ϙ',
                'Ϝ',
                'Ϡ',
                'Ϥ',
                'Ϩ',
                'Ϭ',
                'ϰ',
                'ϴ',
                'ϸ',
                'ϼ',
            ],
        },
        'ILLIRY': {
            name: 'Illiry',
            chars: [
                'Ј',
                'А',
                'И',
                'Р',
                'Ш',
                'а',
                'и',
                'р',
                'ш',
                'ѐ',
                'ј',
                'Ѡ',
                'Ѩ',
                'Ѱ',
                'Ѹ',
                'Ҁ',
                '҈',
                'Ґ',
                'Ҙ',
                'Ҡ',
                'Ҩ',
                'Ұ',
                'Ҹ',
                'Ӏ',
                'ӈ',
                'Ӑ',
                'Ә',
                'Ӡ',
                'Ө',
                'Ӱ',
                'Ӹ',
            ],
        },
    };

    const appScriptUrl = document.querySelector('#app').src;

    let isSwitchingEnabled = false;
    const selectedArea = {row: null, col: null};

    /**
     * @type {CanvasRenderingContext2D | WebGLRenderingContext}
     */
    const ctx = document.querySelector('#game').getContext('2d');

    const imageSpace = document.querySelector('#sourceSpace');

    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            isSwitchingEnabled = true;
            if (event.ctrlKey || event.shiftKey) {
                selectedArea.row = null;
                selectedArea.col = null;
            }
            return;
        }

        if (event.repeat) {
            return;
        }
        const keyName = event.key.toLowerCase();
        const key = keys[keyName];

        if (isSwitchingEnabled) {
            selectedArea.col = key.groupCol;
            selectedArea.row = key.groupRow;
            return;
        }

        if (key && !key.isDestroyed) {
            key.isPushed = true;

            key.heat = Math.min(key.heat + 1, HEAT.max);
            if (key.heat === HEAT.max) {
                key.isDestroyed = true;
            }

            const targetRow = selectedArea.row !== null ? selectedArea.row : key.groupRow;
            const targetCol = selectedArea.col !== null ? selectedArea.col : key.groupCol;

            for (let cellIdx = 0; cellIdx < CONSOLE.areaLimit; cellIdx++) {
                const targetCellRow = targetRow * CONSOLE.lineRows3 + fl(cellIdx / CONSOLE.lineCols3);
                const targetCellColOffset = targetCol * CONSOLE.lineCols3;
                const targetCellIdx = targetCellRow * CONSOLE.lineCols + targetCellColOffset + cellIdx % CONSOLE.lineCols3;

                if (!consoleArea[targetCellIdx]) {
                    consoleArea[targetCellIdx] = {...consoleHumanData[targetCellIdx], isNew: true};
                    break;
                } else if (consoleArea[targetCellIdx].race !== 'HUMAN') {
                    consoleArea[targetCellIdx] = {...consoleHumanData[targetCellIdx], isNew: true};
                }
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === ' ') {
            isSwitchingEnabled = false;
            return;
        }

        const keyName = event.key.toLowerCase();
        const key = keys[keyName];

        if (key) {
            key.isPushed = false;
        }
    });

    const consoleArea = [];
    const consoleHumanData = [];

    let lastTimestampHeat = 0;
    let lastTimestampEnemy = 0;

    const currentEnemyPosition = generateEnemyPosition(6);
    const currentGoal = generateGoal(4);

    const ownCode = await fetch(appScriptUrl)
        .then(x => x.text())
        .then(source => {
            return source.split(/#game/)[1]
                .split('\n').join('')
                .split('\r').join('')
                .replace(/ +/gm, '.');
        });

    generateHumanChars();

    init();

    function fl(n) {
        return Math.floor(n);
    }
    function rnd() {
        return Math.random();
    }

    function randOf(arr) {
        return arr[fl(rnd() * arr.length)];
    }

    function randBetween(lowerInput, upperInput) {
        let [lower, upper] = [lowerInput, upperInput].sort();
        return lower + fl(rnd() * (upper - lower));
    }

    function init() {
        requestAnimationFrame(loop);
    }

    function loop(timestamp) {
        main(timestamp);
        draw(timestamp);

        requestAnimationFrame(loop);
    }


    function getEnemyChar(race) {
        return race.chars[fl(rnd() * race.chars.length)];
    }

    function generateHumanChars() {
        const ownCodeLen = ownCode.length;
        const maxStartIdx = ownCodeLen - CONSOLE.areaLimit;

        const semiPosList = [];
        const semiRegex = /\W\w/mg;
        let lastPos;

        while ((lastPos = semiRegex.exec(ownCode))) {
            if (lastPos.index > maxStartIdx) {
                break;
            }
            semiPosList.push(lastPos.index + 1);
        }

        const areaData = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            const start = randOf(semiPosList);
            return ownCode.slice(start, start + CONSOLE.areaLimit);
        });

        for (let cellIdx = 0; cellIdx < CONSOLE.bufferLimit; cellIdx++) {
            const {cellCol, cellRow} = idxToCoors(cellIdx);

            consoleHumanData.push({
                char: areaData[cellRow * 3 + cellCol][cellIdx % CONSOLE.areaLimit],
                race: 'HUMAN',
            })
        }
    }

    function writeConsole(area, race) {
        groupIdx = fl(rnd() * 3);

        const selectedAreaRow = fl(area / 3);
        const selectedAreaCol = area % 3;

        const minRow = selectedAreaRow * CONSOLE.lineRows3;
        const maxRow = minRow + CONSOLE.lineRows3;
        const minCol = selectedAreaCol * CONSOLE.lineCols3;
        const maxCol = minCol + CONSOLE.lineCols3;

        const selectedRow = randBetween(minRow, maxRow);
        const selectedCol = randBetween(minCol, maxCol);

        const selectedCellIdx = selectedRow * CONSOLE.lineCols + selectedCol;
        consoleArea[selectedCellIdx] = {char: getEnemyChar(race), race: race.name};
    }

    function idxToCoors(cellIdx) {
        const cellCol = fl(cellIdx / CONSOLE.lineCols3) % 3;
        const cellRow = fl(cellIdx / (CONSOLE.areaLimit * 3));

        return {
            cellCol,
            cellRow,
        };
    }

    function main(timestamp) {
        heatDecay(timestamp);
        enemyActivity(timestamp);
    }

    function heatDecay(timestamp) {
        const heatInterval = 1000;
        if (timestamp - lastTimestampHeat > heatInterval) {
            lastTimestampHeat = fl(timestamp / heatInterval) * heatInterval;

            for (const key of Object.keys(keys)) {
                if (keys[key].heat > 0 && !keys[key].isDestroyed) {
                    keys[key].heat = Math.max(keys[key].heat - 1, 0);
                }
            }
        }
    }

    function enemyActivity(timestamp) {
        const enemyInterval = 200;
        if (timestamp - lastTimestampEnemy > enemyInterval) {
            lastTimestampEnemy = fl(timestamp / enemyInterval) * enemyInterval;

            let selectedArea = fl(rnd() * 9);
            while (currentEnemyPosition[selectedArea] === 0) {
                selectedArea = fl(rnd() * 9);
            }

            const goalRaceIdxList = Object.keys(currentEnemyPosition).filter((x, i) => !!currentEnemyPosition[i]);
            const selectedGoalIdx = randOf(goalRaceIdxList);

            writeConsole(selectedGoalIdx, RACES[currentEnemyPosition[selectedGoalIdx]]);
        }
    }


    function generateEnemyPosition(size) {
        const goal = Object.keys(RACES).sort(() => 0.5 - rnd());

        while (goal.reduce((sum, n) => sum + !!n, 0) > size) {
            goal[fl(rnd() * 9)] = null;
        }

        return goal;
    }

    function generateGoal(size) {
        const goal = new Array(9).fill(1);

        while (goal.reduce((sum, n) => sum + n, 0) > size) {
            goal[fl(Math.random() * 9)] = 0;
        }

        return goal;
    }


    function draw(timestamp) {
        // draw main bg
        ctx.fillStyle = COLOR.bg;
        ctx.fillRect(SCAN_AREA.left, SCAN_AREA.top, SCAN_AREA.width, SCAN_AREA.height);

        drawKeyboard(timestamp);

        drawConsole(timestamp);

        drawTransmission(timestamp);

        drawLogo(timestamp);

        drawScanlines(timestamp);
    }

    function drawKeyboard(timestamp) {
        const initalX = MAIN_AREA.left + KEYBOARD.left + 30;
        const initalY = MAIN_AREA.top + KEYBOARD.top;
        const keySize = 95;

        ctx.save();
        for (const key of Object.values(keys)) {
            const keyX = initalX + key.pos * keySize + key.groupRow * 50;
            const keyY = initalY + key.groupRow * keySize;

            drawKey(key, keyX, keyY);
        }
        ctx.restore();

        ctx.save();
        ctx.strokeStyle = '#0f7aff';
        ctx.lineWidth = 1;
        ctx.shadowColor = '#0f7aff';
        ctx.shadowBlur = 3;
        ctx.beginPath();

        const sepX = initalX - 10;
        const sepY = initalY - 10;

        ctx.moveTo(sepX, sepY);
        ctx.lineTo(sepX + keySize * 3, sepY);
        ctx.lineTo(sepX + keySize * 3, sepY + keySize);
        ctx.lineTo(sepX + keySize * 4 - 45, sepY + keySize);
        ctx.lineTo(sepX + keySize * 4 - 45, sepY + keySize * 2);
        ctx.lineTo(sepX + keySize * 4 + 5, sepY + keySize * 2);
        ctx.lineTo(sepX + keySize * 4 + 5, sepY + keySize * 3);
        ctx.lineTo(sepX + keySize * 6 + 5, sepY + keySize * 3);
        ctx.lineTo(sepX + keySize * 6 + 5, sepY + keySize * 2);
        ctx.lineTo(sepX + keySize * 7 - 45, sepY + keySize * 2);
        ctx.lineTo(sepX + keySize * 7 - 45, sepY + keySize);
        ctx.lineTo(sepX + keySize * 7, sepY + keySize);
        ctx.lineTo(sepX + keySize * 7, sepY);
        ctx.lineTo(sepX + keySize * 10, sepY);

        ctx.moveTo(sepX, sepY + keySize);
        ctx.lineTo(sepX + keySize * 2, sepY + keySize);

        ctx.moveTo(sepX + keySize - 50, sepY + keySize * 2);
        ctx.lineTo(sepX + keySize * 3, sepY + keySize * 2);

        ctx.moveTo(sepX + keySize * 8, sepY + keySize);
        ctx.lineTo(sepX + keySize * 10, sepY + keySize);

        ctx.moveTo(sepX + keySize * 7, sepY + keySize * 2);
        ctx.lineTo(sepX + keySize * 9 + 50, sepY + keySize * 2);

        ctx.moveTo(sepX + keySize * 4, sepY + keySize);
        ctx.lineTo(sepX + keySize * 6, sepY + keySize);

        ctx.moveTo(sepX + keySize * 5 - 50, sepY + keySize * 2);
        ctx.lineTo(sepX + keySize * 5 + 50, sepY + keySize * 2);

        ctx.stroke();

        ctx.strokeStyle = '#d7eaff';
        ctx.lineWidth = 5;

        ctx.globalCompositeOperation = 'overlay';
        ctx.setLineDash([5, 3 * keySize, 5, 5 * keySize, 5, 7 * keySize]);
        ctx.lineDashOffset = (timestamp / 8) % (15 * keySize + 15);
        ctx.stroke();

        ctx.restore();
    }

    function drawKey(key, x, y) {
        ctx.save();

        // box
        ctx.strokeStyle = getKeyStyle(key, {upState: '#ffc5f2'});
        ctx.lineWidth = 3;
        ctx.shadowBlur = key.isPushed ? 1 : 5;
        ctx.shadowColor = getKeyStyle(key);
        ctx.fillStyle = COLOR.bg;
        ctx.strokeRect(x, y, 75, 75);

        ctx.fillRect(x, y, 75, 75);

        // heat leds
        ctx.shadowBlur = 10;

        const degree = fl(key.heat / 6);

        if (degree < 5) {
            for(const degreeIdx of [1,2,3,4]){
                if (degree >= degreeIdx) {
                    drawKeyboardLed(x + 65, y + 75 - degreeIdx * 10, getHeatStyle(degreeIdx));
                }
            }
        }

        // char
        ctx.strokeStyle = getKeyStyle(key);
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = getKeyStyle(key);
        ctx.lineWidth = 1;
        ctx.font = '70px monospace';
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.strokeText(key.name.toUpperCase(), x + 17, y + 7);
        ctx.restore();
    }

    function getHeatStyle(heatDegree) {
        return {
            1: '#2b52ff',
            2: '#ab3fff',
            3: '#ff3690',
            4: '#ffa436',
        }[heatDegree];
    }

    function getKeyStyle(key, {downState, upState, destroyedState} = {}) {
        if (key.isPushed) {
            return downState || '#2b52ff';
        } else if (key.isDestroyed) {
            return destroyedState || '#a71a29';
        } else {
            return upState || '#ce36ff';
        }
    }

    function drawKeyboardLed(x, y, color) {
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 5, 5);
    }


    function drawRetroText(text, x, y, height) {
        const gradient = ctx.createLinearGradient(
            x, y + 9,
            x, y + height - 15
        );

        gradient.addColorStop(0,    '#3037d6');
        gradient.addColorStop(0.05,  '#3037d6');
        gradient.addColorStop(0.4,  '#f9a9ff');
        gradient.addColorStop(0.52,  '#ffffff');
        gradient.addColorStop(0.53, '#3f34cd');
        gradient.addColorStop(0.58, '#bc28ff');
        gradient.addColorStop(0.91, '#ffd1f9');
        gradient.addColorStop(1,    '#ffffff');

        ctx.save();
        ctx.fillStyle = gradient;
        ctx.font = 'bold 130px monospace';
        ctx.textBaseline = 'top';
        ctx.shadowBlur = 55;
        ctx.shadowColor = '#a834cd';
        ctx.fillText(text, x,y-5);
        ctx.strokeStyle = '#eee';
        ctx.lineWidth = 5;
        ctx.globalCompositeOperation = 'soft-light';
        ctx.strokeText(text, x,y-5);
        ctx.restore();
    }

    function drawLogo(timestamp) {
        ctx.save();
        ctx.rect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);
        ctx.clip();
        // draw console grid
        const gridSize = 750;
        const gridCellSize = 50;
        const offset = fl(timestamp/50) % (gridCellSize);

        ctx.save();
        ctx.scale(1.5, 0.75);
        ctx.translate(-505, 350);
        ctx.strokeStyle = '#b000a3';
        ctx.shadowColor = '#e100d4';
        ctx.shadowBlur = 10;
        ctx.lineWidth = 3;

        ctx.beginPath();
        for (let gridIdx = 1; gridIdx < fl(gridSize / gridCellSize); gridIdx++) {
            ctx.moveTo(SEC_AREA.left + gridSize / 4 + gridIdx * gridCellSize / 2,
                SEC_AREA.top);
            ctx.lineTo(SEC_AREA.left + gridIdx * gridCellSize,
                SEC_AREA.top + gridSize / 2);

            ctx.moveTo(SEC_AREA.left + gridSize * 0.25 - (gridIdx-2) * gridCellSize * 0.25 - offset * 0.5,
                SEC_AREA.top + (gridIdx-2) * gridCellSize / 2 + offset);
            ctx.lineTo(SEC_AREA.left + (gridSize * 0.75) + (gridIdx-2) * gridCellSize * 0.25 + offset * 0.5,
                SEC_AREA.top + (gridIdx-2) * gridCellSize / 2 + offset);
        }

        ctx.stroke();
        ctx.restore();

        // draw grid mask
        ctx.save();
        const maskTop = 200;
        const maskHeight = 300;

        const maskGradient = ctx.createLinearGradient(
            SEC_AREA.left + SEC_AREA.width / 2, SEC_AREA.top + maskTop,
            SEC_AREA.left + SEC_AREA.width / 2, SEC_AREA.top + maskTop + maskHeight
        );

        maskGradient.addColorStop(0,    COLOR.bg);
        maskGradient.addColorStop(0.25,    COLOR.bg);
        maskGradient.addColorStop(1,  'transparent');

        ctx.fillStyle = maskGradient;
        ctx.fillRect(SEC_AREA.left, SEC_AREA.top + maskTop, SEC_AREA.width, maskHeight);
        ctx.restore();

        // draw bg shadows
        const bgCloudSize = 200;
        ctx.save();
        ctx.fillStyle = '#0400af';
        ctx.shadowBlur = bgCloudSize * 2;
        ctx.shadowColor = '#0400af';
        ctx.shadowOffsetX = bgCloudSize;
        ctx.shadowOffsetY = bgCloudSize;
        ctx.fillRect(SEC_AREA.left - bgCloudSize, SEC_AREA.top - bgCloudSize, bgCloudSize, bgCloudSize);
        ctx.restore();

        ctx.save();
        ctx.fillStyle = '#36008b';
        ctx.shadowBlur = bgCloudSize * 2;
        ctx.shadowColor = '#8b0b86';
        ctx.shadowOffsetX = -bgCloudSize;
        ctx.shadowOffsetY = bgCloudSize;
        ctx.fillRect(SEC_AREA.right, SEC_AREA.top - bgCloudSize, bgCloudSize, bgCloudSize);
        ctx.restore();

        ctx.save();
        const mountsBg = new Path2D(`M${SEC_AREA.left - 60} ${SEC_AREA.top + 300}
         l 160 -100
         l 50 20
         l 50 30
         l 50 -30
         l 50 -120
         l 30 30
         l 70 120
         l 100 -100
         l 100 50
         l 160 100
         Z`);
        ctx.fillStyle = COLOR.bg;
        ctx.strokeStyle = '#340531';
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#340531';
        ctx.lineWidth = 1;
        ctx.fill(mountsBg);
        ctx.stroke(mountsBg);
        ctx.restore();

        // draw logo text
        drawRetroText('GRAND', SEC_AREA.left + 185, SEC_AREA.top + 150, 100);
        drawRetroText('HACKSTER', SEC_AREA.left + 85, SEC_AREA.top + 250, 100);

        ctx.restore();
    }


    function drawConsole(timestamp) {
        ctx.save();
        // draw console bg
        ctx.fillStyle = '#222';
        ctx.fillRect(CONSOLE.left, CONSOLE.top, CONSOLE.width, CONSOLE.height);

        // draw selected area bg
        if (selectedArea.row !== null && selectedArea.col !== null) {
            ctx.fillStyle = '#030';
            ctx.fillRect(
                CONSOLE.left + selectedArea.col * CONSOLE.width / 3,
                CONSOLE.top + selectedArea.row * CONSOLE.height / 3,
                CONSOLE.width / 3,
                CONSOLE.height / 3
            );
        }

        // draw console grid area boundaries
        ctx.shadowBlur = 3;
        ctx.strokeStyle = '#f993';
        ctx.strokeRect(CONSOLE.left + CONSOLE.width / 3, CONSOLE.top, 1, CONSOLE.height);
        ctx.strokeRect(CONSOLE.left + CONSOLE.width * 2 / 3, CONSOLE.top, 1, CONSOLE.height);
        ctx.strokeRect(CONSOLE.left, CONSOLE.top + CONSOLE.height / 3, CONSOLE.width, 1);
        ctx.strokeRect(CONSOLE.left, CONSOLE.top + CONSOLE.height * 2 / 3, CONSOLE.width, 1);

        // draw chars
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';

        for (const cellIdx in consoleArea) {
            const cell = consoleArea[cellIdx];
            const cellCol = cellIdx % CONSOLE.lineCols;
            const cellRow = fl(cellIdx / CONSOLE.lineCols);

            if (cell.isNew) {
                cell.isNew = false;
                ctx.fillStyle = '#00ff00';
                ctx.fillRect(
                    CONSOLE.left + cellCol * CONSOLE.gridCellWidth,
                    CONSOLE.top + cellRow * CONSOLE.gridCellHeight,
                    CONSOLE.gridCellWidth,
                    CONSOLE.gridCellHeight,
                );
            } else {
                if (cell.race === 'HUMAN') {
                    ctx.fillStyle = '#00ff00';
                    ctx.shadowColor = '#00ff00';
                } else {
                    ctx.fillStyle = '#ff0000';
                    ctx.shadowColor = '#ff0000';
                }

                ctx.fillText(cell.char,
                    CONSOLE.left + cellCol * CONSOLE.gridCellWidth + 0.5 * CONSOLE.gridCellWidth,
                    CONSOLE.top + 10 + cellRow * CONSOLE.gridCellHeight + 2,
                );
            }


        }
        ctx.restore();
    }


    function drawTransmission(timestamp) {
        ctx.save();
        ctx.fillStyle = '#1e336e';
        ctx.fillRect(TRANSMISSION.left, TRANSMISSION.top, TRANSMISSION.width, TRANSMISSION.height);

        ctx.drawImage(imageSpace, TRANSMISSION.left + 35, TRANSMISSION.top + 35, 204, 204);
        ctx.fillStyle = '#f9edff';
        ctx.shadowColor = '#ad0fbb';
        ctx.shadowBlur = 3;
        ctx.textAlign = 'left';
        ctx.font = '20px monospace';
        ctx.fillText('Żołnierzu, dlaczego', TRANSMISSION.left + 35, TRANSMISSION.top + 35 * 2 + 204);
        ctx.fillText('nie naparzacie', TRANSMISSION.left + 35, TRANSMISSION.top + 35 * 2 + 204 + 24);
        ctx.fillText('w klawiaturę!?', TRANSMISSION.left + 35, TRANSMISSION.top + 35 * 2 + 204 + 48);
        ctx.restore();
    }

    function drawScanlines(timestamp) {
        ctx.save();
        ctx.globalCompositeOperation = 'multiply';

        const scanlineHeight = 5;
        const offset = fl(timestamp/40) % (scanlineHeight*2);

        for(let scanlineIdx = -scanlineHeight; scanlineIdx < SCAN_AREA.height / scanlineHeight; scanlineIdx++) {
            ctx.fillStyle = (scanlineIdx % 2 === 0) ? '#ccc' : '#eee';
            ctx.fillRect(SCAN_AREA.left, SCAN_AREA.top + scanlineIdx * scanlineHeight + offset, SCAN_AREA.width, scanlineHeight);
        }

        ctx.restore();
    }
})();