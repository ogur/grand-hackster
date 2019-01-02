// http://jrgraphix.net/research/unicode.php

(async () => {

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

    const fl = Math.floor.bind(Math);
    const rnd = Math.random.bind(Math);
    const randOf = (arr) => {
        return arr[fl(rnd() * arr.length)];
    };
    const randBetween = (lowerInput, upperInput) => {
        let [lower, upper] = [lowerInput, upperInput].sort();
        return lower + fl(rnd() * (upper - lower));
    };
    /**
     * @type {CanvasRenderingContext2D | WebGLRenderingContext}
     */
    const ctx = document.querySelector('#game').getContext('2d');

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

    function getHeatStyle(heat) {
        const degree = heat / HEAT.max;

        if (degree === 1) {
            return 'rgb(0, 0, 0)';
        } else if (degree < 0.5) {
            return `rgb(255, 255, ${fl(255 * (1 - degree * 2))})`;
        } else {
            return `rgb(255, ${fl(255 * (1 - (degree - 0.5) * 2))}, 0)`;
        }
    }

    const consoleArea = [];
    const consoleHumanData = [];

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

    let lastTimestampHeat = 0;
    let lastTimestampEnemy = 0;

    function draw(timestamp) {
        // draw main bg
        ctx.fillStyle = '#003016';
        ctx.fillRect(MAIN_AREA.left, MAIN_AREA.top, MAIN_AREA.width, MAIN_AREA.height);

        // draw sec bg
        ctx.fillStyle = '#0f0';
        ctx.fillRect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);

        // draw keyboard
        for (const key of Object.values(keys)) {
            const keyX = MAIN_AREA.left + KEYBOARD.left + key.pos * 100 + key.groupRow * 50;
            const keyY = MAIN_AREA.top + KEYBOARD.top + key.groupRow * 100;

            ctx.fillStyle = key.isPushed ? '#090' : getHeatStyle(key.heat);
            ctx.fillRect(keyX,
                keyY,
                100, 100);

            ctx.font = '70px monospace';
            ctx.fillStyle = key.isPushed ? '#fff' : '#000';
            ctx.fillText(key.name.toUpperCase(),
                keyX + 50,
                keyY + 75,
            );
        }

        // draw console bg
        ctx.fillStyle = '#000';
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

        // draw console grid
        ctx.strokeStyle = '#fff1';
        for (let gridX = 1; gridX < CONSOLE.lineCols; gridX++) {
            ctx.strokeRect(CONSOLE.left + gridX * CONSOLE.gridCellWidth, CONSOLE.top, 1, CONSOLE.height);
        }
        for (let gridY = 1; gridY < CONSOLE.lineRows; gridY++) {
            ctx.strokeRect(CONSOLE.left, CONSOLE.top + gridY * CONSOLE.gridCellHeight, CONSOLE.width, 1);
        }
        // draw console grid area boundaries
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
                } else {
                    ctx.fillStyle = '#ff0000';
                }

                ctx.fillText(cell.char,
                    CONSOLE.left + cellCol * CONSOLE.gridCellWidth + 0.5 * CONSOLE.gridCellWidth,
                    CONSOLE.top + 10 + cellRow * CONSOLE.gridCellHeight + 2,
                );
            }


        }

        // draw transmission
        ctx.fillStyle = '#00F';
        ctx.fillRect(TRANSMISSION.left, TRANSMISSION.top, TRANSMISSION.width, TRANSMISSION.height);
    }

    function main(timestamp) {
        const heatInterval = 1000;
        if (timestamp - lastTimestampHeat > heatInterval) {
            lastTimestampHeat = fl(timestamp / heatInterval) * heatInterval;

            for (const key of Object.keys(keys)) {
                if (keys[key].heat > 0 && !keys[key].isDestroyed) {
                    keys[key].heat = Math.max(keys[key].heat - 1, 0);
                }
            }
        }

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

    function loop(timestamp) {
        main(timestamp);
        draw(timestamp);

        requestAnimationFrame(loop);
    }

    const currentEnemyPosition = generateEnemyPosition(6);
    const currentGoal = generateGoal(4);


    function init() {
        requestAnimationFrame(loop);
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
})();