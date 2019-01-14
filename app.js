// http://jrgraphix.net/research/unicode.php

(async () => {
    const COLOR = {
        bg: '#200017',
    };

    const MAIN_AREA = {
        left: 0,
        top: 0,
        width: 1024,
        height: 768,
    };

    const SEC_AREA = {
        left: 0,
        width: 720,
        top: 0,
        height: 480,
    };

    const KEYBOARD = {
        left: 20,
        top: 425,
        keySize: 95,
    };
    KEYBOARD.width = 10 * KEYBOARD.keySize + 20;
    KEYBOARD.height = 3 * KEYBOARD.keySize + 20;

    const CONSOLE = {
        top: 10,
        left: 10,
        width: 720,
        height: 405,
        lineCols: 72,
        lineRows: 27,
    };
    CONSOLE.bufferLimit = CONSOLE.lineRows * CONSOLE.lineCols;
    CONSOLE.areaLimit = CONSOLE.bufferLimit / 9;
    CONSOLE.gridCellWidth = CONSOLE.width / CONSOLE.lineCols;
    CONSOLE.gridCellHeight = CONSOLE.height / CONSOLE.lineRows;
    CONSOLE.lineCols3 = CONSOLE.lineCols / 3;
    CONSOLE.lineRows3 = CONSOLE.lineRows / 3;

    console.log(`CONSOLE`, CONSOLE);

    const TRANSMISSION = {
        top: 10,
        left: MAIN_AREA.width - 284,
        right: MAIN_AREA.width - 10,
        bottom: MAIN_AREA.height - 350,
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
            chars: chunk('𐠁𐠂𐠃𐠄𐠅𐠈𐠊𐠋𐠌𐠍𐠎𐠏𐠐𐠑𐠒𐠓𐠔𐠕𐠖𐠗𐠘𐠙𐠚𐠛𐠜𐠝𐠞𐠟𐠠𐠡𐠢𐠣𐠤𐠥𐠦𐠧𐠨𐠩𐠪𐠫𐠬𐠭𐠮𐠯𐠰𐠱𐠲𐠳𐠴𐠵𐠷𐠸𐠼', 2),
        },
        'AYNAMSO': {
            name: 'Aynamso',
            chars: chunk('𐒀𐒁𐒂𐒄𐒅𐒈𐒉𐒊𐒋𐒌𐒍𐒎𐒏𐒐𐒑𐒒𐒓𐒔𐒕𐒗𐒚𐒛𐒜𐒝𐒢𐒣𐒤𐒥𐒦', 2),
        },
        'CINUR': {
            name: 'Cinur',
            chars: chunk('ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛨᛩᛪ᛭ᛮᛯᛰ', 1),
        },
        'SITI RAGU': {
            name: 'Siti Ragu',
            chars: chunk('𐎀𐎁𐎂𐎃𐎄𐎅𐎇𐎈𐎉𐎊𐎌𐎍𐎎𐎏𐎐𐎒𐎓𐎔𐎕𐎘𐎙𐎚𐎛𐎜𐎝', 2),
        },
        'NAIVASH': {
            name: 'Naivash',
            chars: chunk('𐑐𐑑𐑒𐑓𐑔𐑕𐑖𐑗𐑘𐑙𐑚𐑛𐑜𐑝𐑞𐑟𐑠𐑡𐑢𐑣𐑤𐑥𐑦𐑧𐑨𐑩𐑪𐑫𐑬𐑭𐑮𐑯𐑰𐑱𐑲𐑳𐑴𐑵𐑶𐑷𐑸𐑹𐑺𐑻𐑼𐑽𐑾𐑿', 2),
        },
        'KIPOIHTE': {
            name: 'Kipoihte',
            chars: chunk('ሂሄህሇሉሏሕሖሟሠሧረሱሴሹቄቊቍቐቖቤቯታትቶኀኆኊኋኍኖኚአኩኪኵውዎዒዓዛዠዢይዾጒጔጕጞጡጯጻጽፆፋፑፓፔፖፗፚ፦፧፨፩፪፰፲፴፵፶', 1),
        },
        'SNETTAPELLIA': {
            name: 'Snettapellia',
            chars: chunk('⠈⠐⠘⠠⠨⠰⠸⡀⡈⡐⡘⡠⡨⡰⡸⢀⢈⢐⢘⢠⢨⢰⢸⣀⣈⣐⣘⣠⣨⣰⣸', 1),
        },
        'KEERG': {
            name: 'Keerg',
            chars: chunk('ͰͼΈΌΐΔΘΜΠΤΨάΰδθμπτψόϐϔϘϜϠϤϨϬϰϴϸϼ', 1),
        },
        'ILLIRY': {
            name: 'Illiry',
            chars: chunk('ЈАИРШаиршѐјѠѨѰѸҀ҈ҐҘҠҨҰҸӀӈӐӘӠӨӰӸ', 1),
        },
    };

    const appScriptUrl = document.querySelector('#app').src;

    let isSwitchingEnabled = false;
    const selectedArea = {row: null, col: null};

    /**
     * @type {CanvasRenderingContext2D | WebGLRenderingContext}
     */
    const ctxMain = document.querySelector('#mainArea').getContext('2d');
    const ctxSec = document.querySelector('#secArea').getContext('2d');

    const ctxConsole = createCrx(CONSOLE.width, CONSOLE.height);
    const ctxLogo = createCrx(SEC_AREA.width, SEC_AREA.height);
    const ctxKeyboard = createCrx(KEYBOARD.width, KEYBOARD.height);

    const imageSpace = document.querySelector('#sourceSpace');
    const imageAbout = document.querySelector('#sourceAbout');

    document.addEventListener('keydown', (event) => {
        if (!['f5', 'f11', 'f12'].includes(event.key.toLocaleLowerCase())) {
            event.preventDefault();
        }

        if (event.key === '=') {
            settings.isHq = !settings.isHq;
            updateCache();
        }

        if (gameState.stage === 'INTRO') {
            console.log(`event.key`, event.key);
            if (event.key.toLowerCase() === 'arrowdown') {
                systemMenu.selectedItem = (systemMenu.selectedItem + 1) % systemMenu.list.length;
            } else if (event.key.toLowerCase() === 'arrowup') {
                systemMenu.selectedItem = (systemMenu.list.length + systemMenu.selectedItem - 1) % systemMenu.list.length;
            } else if (event.key.toLowerCase() === 'enter') {
                if (systemMenu.selectedItem === 0) {
                    gameState.stage = 'GAME';
                } else if (systemMenu.selectedItem === 2) {
                    gameState.stage = 'ABOUT';
                }
            }
            return;
        }

        if (gameState.stage === 'ABOUT') {
            gameState.stage = 'INTRO';
        }

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

        if (key && isSwitchingEnabled) {
            selectedArea.col = key.groupCol;
            selectedArea.row = key.groupRow;
            return;
        }

        if (key && !key.isDestroyed) {
            key.isPushed = true;
            clearKey(key);
            drawKey(key);

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

                if (!consoleArea[targetCellIdx] || consoleArea[targetCellIdx].race !== 'HUMAN') {
                    consoleArea[targetCellIdx] = {...consoleHumanData[targetCellIdx]};
                    writeHumanAction(targetCellIdx);
                    break;
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

            clearKey(key);
            drawKey(key);
        }
    });

    const consoleArea = [];
    const consoleHumanData = [];

    let lastTimestampHeat = 0;
    let lastTimestampEnemy = 0;

    const currentEnemyPosition = generateEnemyPosition(6);
    const currentGoal = generateGoal(4);

    const systemMenu = {
        list: [
            'NEW GAME',
            'MANUAL',
            'ABOUT',
        ],
        selectedItem: 0,
    };
    const settings = {
        isHq: true,
    };
    const gameState = {
        stage: 'GAME',
    };

    const ownCode = await fetch(appScriptUrl)
        .then(x => x.text())
        .then(source => {
            return source.split(/#mainArea'/)[1]
                .split('\n').join('')
                .split('\r').join('')
                .replace(/ +/gm, '');
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

    function randBetween(lower, upper) {
        let [low, up] = [lower, upper].sort();
        return low + fl(rnd() * (up - low));
    }

    function chunk(input, chunkLen) {
        output = [];
        while (input.length) {
            output.push(input.slice(0, chunkLen));
            input = input.slice(chunkLen);
        }
        return output;
    }

    function createCrx(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas.getContext('2d');
    }


    function init() {
        updateCache();

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

        ctxConsole.font = '14px monospace';
        ctxConsole.textAlign = 'center';

        const cell = consoleArea[selectedCellIdx];
        const cellCol = selectedCellIdx % CONSOLE.lineCols;
        const cellRow = fl(selectedCellIdx / CONSOLE.lineCols);

        ctxConsole.fillStyle = '#ff0000';
        ctxConsole.shadowColor = '#ff0000';
        if (settings.isHq) {
            ctxConsole.shadowBlur = 3;
        }

        ctxConsole.clearRect(
            cellCol * CONSOLE.gridCellWidth,
            cellRow * CONSOLE.gridCellHeight,
            CONSOLE.gridCellWidth,
            CONSOLE.gridCellHeight,
        );

        ctxConsole.fillText(cell.char,
            cellCol * CONSOLE.gridCellWidth + 0.5 * CONSOLE.gridCellWidth,
            10 + cellRow * CONSOLE.gridCellHeight + 2,
        );
    }

    function writeHumanAction(selectedCellIdx) {
        const cell = consoleArea[selectedCellIdx];
        const cellCol = selectedCellIdx % CONSOLE.lineCols;
        const cellRow = fl(selectedCellIdx / CONSOLE.lineCols);

        ctxConsole.clearRect(
            cellCol * CONSOLE.gridCellWidth,
            cellRow * CONSOLE.gridCellHeight,
            CONSOLE.gridCellWidth,
            CONSOLE.gridCellHeight,
        );

        ctxConsole.fillStyle = '#00ff00';
        ctxConsole.shadowColor = '#00ff00';
        if (settings.isHq) {
            ctxConsole.shadowBlur = 3;
        }

        ctxConsole.fillText(cell.char,
            cellCol * CONSOLE.gridCellWidth + 0.5 * CONSOLE.gridCellWidth,
            10 + cellRow * CONSOLE.gridCellHeight + 2,
        );
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
        ctxMain.fillStyle = COLOR.bg;
        ctxMain.fillRect(0, 0, MAIN_AREA.width, MAIN_AREA.height);
        ctxSec.fillStyle = COLOR.bg;
        ctxSec.fillRect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);

        if (true || gameState.stage === 'INTRO') { // @todo remove
            drawLogo(timestamp);
        }

        if (gameState.stage === 'INTRO') {
            drawMenu(timestamp);
        }

        if (gameState.stage === 'ABOUT') {
            drawAbout(timestamp);
        }

        if (gameState.stage === 'GAME') {
            drawKeyboard(timestamp);

            drawConsole(timestamp);

            drawTransmission(timestamp);

        }

        if (settings.isHq) {
            drawScanlines(timestamp);
        }
    }

    function drawMenu(timestamp) {
        ctxMain.save();
        ctxMain.fillStyle = '#ff3690';
        if (settings.isHq) {
            ctxMain.shadowBlur = 5;
            ctxMain.shadowColor = '#ffa4c6';
        }
        ctxMain.textAlign = 'center';
        ctxMain.font = '80px monospace';

        for (let menuIdx = 0; menuIdx < systemMenu.list.length; menuIdx++) {
            const x = MAIN_AREA.width / 2;
            const y = 200 + menuIdx * 200;

            ctxMain.fillText(systemMenu.list[menuIdx], x, y);

            if (systemMenu.selectedItem === menuIdx) {
                ctxMain.fillText('#>',
                    x - (systemMenu.list[menuIdx].length + 4) * 20,
                    y,
                );
            }
        }

        ctxMain.restore();
    }

    function drawAbout(timestamp) {
        ctxMain.save();

        ctxMain.drawImage(imageAbout, 235, 300, 120, 160);

        ctxMain.fillStyle = '#f9edff';
        if (settings.isHq) {
            ctxMain.shadowColor = '#ad0fbb';
            ctxMain.shadowBlur = 3;
        }
        ctxMain.textAlign = 'left';
        ctxMain.font = '20px monospace';
        ctxMain.fillText('Game created by', 235 + 120 + 20, 350);
        ctxMain.fillText('Mateusz Morszczyzna', 235 + 120 + 20, 350 + 24);
        ctxMain.fillText('@mmorszczyna', 235 + 120 + 20, 350 + 48);


        ctxMain.restore();
    }


    function drawKeyboard(timestamp) {
        ctxMain.drawImage(ctxKeyboard.canvas, KEYBOARD.left, KEYBOARD.top);

        ctxMain.save();
        if (settings.isHq) {
            ctxMain.shadowColor = '#0f7aff';
            ctxMain.shadowBlur = 3;
        }

        ctxMain.strokeStyle = '#0f7aff';
        ctxMain.lineWidth = 1;
        ctxMain.stroke(KEYBOARD.sepPath);

        ctxMain.strokeStyle = '#d7eaff';
        ctxMain.lineWidth = 5;
        ctxMain.globalCompositeOperation = 'overlay';
        ctxMain.setLineDash([5, 3 * KEYBOARD.keySize, 5, 5 * KEYBOARD.keySize, 5, 7 * KEYBOARD.keySize]);
        ctxMain.lineDashOffset = (timestamp / 8) % (15 * KEYBOARD.keySize + 15);
        ctxMain.stroke(KEYBOARD.sepPath);

        ctxMain.restore();
    }

    function clearKey(key) {
        const x = 10 + key.pos * KEYBOARD.keySize + key.groupRow * 50;
        const y = 10 + key.groupRow * KEYBOARD.keySize;

        ctxKeyboard.clearRect(x, y, 100, 100);
    }

    function drawKey(key) {
        const x = 20 + key.pos * KEYBOARD.keySize + key.groupRow * 50;
        const y = 20 + key.groupRow * KEYBOARD.keySize;
        ctxKeyboard.save();

        // box
        ctxKeyboard.strokeStyle = getKeyStyle(key, {upState: '#ffc5f2'});
        ctxKeyboard.lineWidth = 3;
        if (settings.isHq) {
            ctxKeyboard.shadowBlur = key.isPushed ? 1 : 5;
            ctxKeyboard.shadowColor = getKeyStyle(key);
        }
        ctxKeyboard.fillStyle = COLOR.bg;
        ctxKeyboard.strokeRect(x, y, 75, 75);

        ctxKeyboard.fillRect(x, y, 75, 75);

        // heat leds
        if (settings.isHq) {
            ctxKeyboard.shadowBlur = 10;
        }

        const degree = fl(key.heat / 6);

        if (degree < 5) {
            for (const degreeIdx of [1, 2, 3, 4]) {
                if (degree >= degreeIdx) {
                    drawKeyboardLed(x + 65, y + 75 - degreeIdx * 10, getHeatStyle(degreeIdx));
                }
            }
        }

        // char
        ctxKeyboard.strokeStyle = getKeyStyle(key);
        ctxKeyboard.lineWidth = 2;
        if (settings.isHq) {
            ctxKeyboard.shadowBlur = 10;
            ctxKeyboard.shadowColor = getKeyStyle(key);
        }
        ctxKeyboard.lineWidth = 1;
        ctxKeyboard.font = '70px monospace';
        ctxKeyboard.textBaseline = 'top';
        ctxKeyboard.textAlign = 'left';
        ctxKeyboard.strokeText(key.name.toUpperCase(), x + 17, y + 7);
        ctxKeyboard.restore();
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
        ctxKeyboard.shadowColor = color;
        ctxKeyboard.fillStyle = color;
        ctxKeyboard.fillRect(x, y, 5, 5);
    }


    function drawRetroText(text, x, y, height) {
        const gradient = ctxLogo.createLinearGradient(
            x, y + 9,
            x, y + height - 15,
        );

        gradient.addColorStop(0, '#3037d6');
        gradient.addColorStop(0.05, '#3037d6');
        gradient.addColorStop(0.4, '#f9a9ff');
        gradient.addColorStop(0.52, '#ffffff');
        gradient.addColorStop(0.53, '#3f34cd');
        gradient.addColorStop(0.58, '#bc28ff');
        gradient.addColorStop(0.91, '#ffd1f9');
        gradient.addColorStop(1, '#ffffff');

        ctxLogo.save();
        ctxLogo.fillStyle = gradient;
        ctxLogo.font = 'bold 130px monospace';
        ctxLogo.textBaseline = 'top';
        if (settings.isHq) {
            ctxLogo.shadowBlur = 55;
            ctxLogo.shadowColor = '#a834cd';
        }
        ctxLogo.fillText(text, x, y - 5);
        ctxLogo.strokeStyle = '#eee';
        ctxLogo.lineWidth = 5;
        ctxLogo.globalCompositeOperation = 'soft-light';
        ctxLogo.strokeText(text, x, y - 5);
        ctxLogo.restore();
    }

    function drawLogo(timestamp) {
        ctxSec.save();
        ctxSec.rect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);
        ctxSec.clip();
        // draw console grid
        const gridSize = 750;
        const gridCellSize = 50;
        const offset = fl(timestamp / 50) % (gridCellSize);

        ctxSec.scale(1.5, 0.75);
        ctxSec.translate(-130, 350);
        ctxSec.strokeStyle = '#b000a3';
        if (settings.isHq) {
            ctxSec.shadowColor = '#e100d4';
            ctxSec.shadowBlur = 10;
        }
        ctxSec.lineWidth = 3;

        ctxSec.beginPath();
        for (let gridIdx = 1; gridIdx < fl(gridSize / gridCellSize); gridIdx++) {
            ctxSec.moveTo(gridSize / 4 + gridIdx * gridCellSize / 2,
                SEC_AREA.top);
            ctxSec.lineTo(gridIdx * gridCellSize,
                gridSize / 2);

            ctxSec.moveTo(gridSize * 0.25 - (gridIdx - 2) * gridCellSize * 0.25 - offset * 0.5,
                (gridIdx - 2) * gridCellSize / 2 + offset);
            ctxSec.lineTo((gridSize * 0.75) + (gridIdx - 2) * gridCellSize * 0.25 + offset * 0.5,
                (gridIdx - 2) * gridCellSize / 2 + offset);
        }

        ctxSec.stroke();
        ctxSec.restore();
        ctxSec.drawImage(ctxLogo.canvas, 0, 0);
    }


    function drawConsole(timestamp) {
        ctxMain.save();
        // draw console bg
        ctxMain.fillStyle = '#222';
        ctxMain.fillRect(CONSOLE.left, CONSOLE.top, CONSOLE.width, CONSOLE.height);

        // draw selected area bg
        if (selectedArea.row !== null && selectedArea.col !== null) {
            ctxMain.fillStyle = '#030';
            ctxMain.fillRect(
                CONSOLE.left + selectedArea.col * CONSOLE.width / 3,
                CONSOLE.top + selectedArea.row * CONSOLE.height / 3,
                CONSOLE.width / 3,
                CONSOLE.height / 3,
            );
        }

        // draw console grid area boundaries
        if (settings.isHq) {
            ctxMain.shadowBlur = 3;
        }
        ctxMain.strokeStyle = '#f993';
        ctxMain.strokeRect(CONSOLE.left + CONSOLE.width / 3, CONSOLE.top, 1, CONSOLE.height);
        ctxMain.strokeRect(CONSOLE.left + CONSOLE.width * 2 / 3, CONSOLE.top, 1, CONSOLE.height);
        ctxMain.strokeRect(CONSOLE.left, CONSOLE.top + CONSOLE.height / 3, CONSOLE.width, 1);
        ctxMain.strokeRect(CONSOLE.left, CONSOLE.top + CONSOLE.height * 2 / 3, CONSOLE.width, 1);

        ctxMain.drawImage(ctxConsole.canvas, CONSOLE.left, CONSOLE.top);

        ctxMain.restore();
    }


    function drawTransmission(timestamp) {
        ctxMain.save();
        ctxMain.fillStyle = '#1e336e';
        ctxMain.fillRect(TRANSMISSION.left, TRANSMISSION.top, TRANSMISSION.width, TRANSMISSION.height);

        ctxMain.drawImage(imageSpace, TRANSMISSION.left + 35, TRANSMISSION.top + 35, 204, 204);
        ctxMain.fillStyle = '#f9edff';
        if (settings.isHq) {
            ctxMain.shadowColor = '#ad0fbb';
            ctxMain.shadowBlur = 3;
        }
        ctxMain.textAlign = 'left';
        ctxMain.font = '20px monospace';
        ctxMain.fillText('Żołnierzu, dlaczego', TRANSMISSION.left + 35, TRANSMISSION.top + 35 * 2 + 204);
        ctxMain.fillText('nie naparzacie', TRANSMISSION.left + 35, TRANSMISSION.top + 35 * 2 + 204 + 24);
        ctxMain.fillText('w klawiaturę!?', TRANSMISSION.left + 35, TRANSMISSION.top + 35 * 2 + 204 + 48);
        ctxMain.restore();
    }

    function drawScanlines(timestamp) {
        const scanlineHeight = 5;
        const offset = fl(timestamp / 40) % (scanlineHeight * 2);

        ctxMain.save();
        ctxMain.globalCompositeOperation = 'multiply';
        for (let scanlineIdx = -scanlineHeight; scanlineIdx < MAIN_AREA.height / scanlineHeight; scanlineIdx++) {
            ctxMain.fillStyle = (scanlineIdx % 2 === 0) ? '#ccc' : '#eee';
            ctxMain.fillRect(0, scanlineIdx * scanlineHeight + offset, MAIN_AREA.width, scanlineHeight);
        }
        ctxMain.restore();

        ctxSec.save();
        ctxSec.globalCompositeOperation = 'multiply';
        for (let scanlineIdx = -scanlineHeight; scanlineIdx < SEC_AREA.height / scanlineHeight; scanlineIdx++) {
            ctxSec.fillStyle = (scanlineIdx % 2 === 0) ? '#ccc' : '#eee';
            ctxSec.fillRect(0, scanlineIdx * scanlineHeight + offset, SEC_AREA.width, scanlineHeight);
        }
        ctxSec.restore();
    }

    function updateCache() {
        prerenderLogo();
        prerenderKeyboard();
        prerenderKeyboardSeparator();
    }

    function prerenderLogo() {
        // draw grid mask
        ctxLogo.save();
        ctxLogo.clearRect(0, 0, SEC_AREA.width, SEC_AREA.height);
        const maskTop = 200;
        const maskHeight = 300;

        const maskGradient = ctxLogo.createLinearGradient(
            SEC_AREA.width / 2, maskTop,
            SEC_AREA.width / 2, maskTop + maskHeight,
        );

        maskGradient.addColorStop(0, COLOR.bg);
        maskGradient.addColorStop(0.25, COLOR.bg);
        maskGradient.addColorStop(1, 'transparent');

        ctxLogo.fillStyle = maskGradient;
        ctxLogo.fillRect(0, maskTop, SEC_AREA.width, maskHeight);
        ctxLogo.restore();

        // draw bg shadows
        if (settings.isHq) {
            const bgCloudSize = 200;
            ctxLogo.save();
            ctxLogo.fillStyle = '#0400af';
            ctxLogo.shadowBlur = bgCloudSize * 2;
            ctxLogo.shadowColor = '#0400af';
            ctxLogo.shadowOffsetX = bgCloudSize;
            ctxLogo.shadowOffsetY = bgCloudSize;
            ctxLogo.fillRect(-bgCloudSize, 0 - bgCloudSize, bgCloudSize, bgCloudSize);
            ctxLogo.restore();

            ctxLogo.save();
            ctxLogo.fillStyle = '#36008b';
            ctxLogo.shadowBlur = bgCloudSize * 2;
            ctxLogo.shadowColor = '#8b0b86';
            ctxLogo.shadowOffsetX = -bgCloudSize;
            ctxLogo.shadowOffsetY = bgCloudSize;
            ctxLogo.fillRect(SEC_AREA.width, 0 - bgCloudSize, bgCloudSize, bgCloudSize);
            ctxLogo.restore();
        }

        ctxLogo.save();
        const mountsBg = new Path2D(`M -60 300
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
        ctxLogo.fillStyle = COLOR.bg;
        ctxLogo.strokeStyle = '#340531';
        if (settings.isHq) {
            ctxLogo.shadowBlur = 5;
            ctxLogo.shadowColor = '#340531';
        }
        ctxLogo.lineWidth = 1;
        ctxLogo.fill(mountsBg);
        ctxLogo.stroke(mountsBg);
        ctxLogo.restore();

        // draw logo text
        drawRetroText('GRAND', 185, 150, 100);
        drawRetroText('HACKSTER', 85, 250, 100);
    }

    function prerenderKeyboard() {
        for (const key of Object.values(keys)) {
            drawKey(key);
        }
    }

    function prerenderKeyboardSeparator() {
        KEYBOARD.sepPath = new Path2D(`
            M${KEYBOARD.left + 10} ${KEYBOARD.top + 10} h285 v95 h50 v95 h50 v95 h190 v-95 h45 v-95 h45 v-95 h285
            M${KEYBOARD.left + 10} ${KEYBOARD.top + 10 + 95} h 190
            M${KEYBOARD.left + 10 + 45} ${KEYBOARD.top + 10 + 190} h 245
            M${KEYBOARD.left + 10 + 760} ${KEYBOARD.top + 10 + 95} h 190
            M${KEYBOARD.left + 10 + 665} ${KEYBOARD.top + 10 + 190} h 245
            M${KEYBOARD.left + 10 + 380} ${KEYBOARD.top + 10 + 95} h 190
            M${KEYBOARD.left + 10 + 430} ${KEYBOARD.top + 10 + 190} h 95
        `);
    }

    class Grid {
        constructor(stageCellSize) {
            this.side = 3 + 4 * stageCellSize;
            this.generateStage();
        }

        generateStage() {
            const squareSize = this.side ** 2;
            const preStage = new Array(squareSize).fill('#');

            for (const idx in preStage) {
                if (!this.isStageObstacle(+idx)) {
                    preStage[idx] = '.';
                }
            }
            for (const idx in preStage) {
                if (this.isStageBoundary(+idx)) {
                    preStage[idx] = 'X';
                }
            }

            const quarters = [
                {
                    xs: 0, xe: fl(this.side / 2),
                    ys: 0, ye: fl(this.side / 2),
                },
                {
                    xs: fl(this.side / 2) + 1, xe: this.side,
                    ys: 0, ye: fl(this.side / 2),
                },
                {
                    xs: 0, xe: fl(this.side / 2),
                    ys: fl(this.side / 2) + 1, ye: this.side,
                },
                {
                    xs: fl(this.side / 2) + 1, xe: this.side,
                    ys: fl(this.side / 2) + 1, ye: this.side,
                },
            ];

            console.log(`this.stageSize`, this.side);
            const startQuarterIdx = randOf([0,1,2,3]);

            console.log(`startQuarterIdx`, startQuarterIdx, 3 - startQuarterIdx);

            const startPoint = {};
            if (rnd() > 0.5) {
                startPoint.x = Math.max(0, quarters[startQuarterIdx].xs - 1) * 2;
                startPoint.y = randBetween(quarters[startQuarterIdx].ys + 1, quarters[startQuarterIdx].ye - 1);
            } else {
                startPoint.x = randBetween(quarters[startQuarterIdx].xs + 1, quarters[startQuarterIdx].xe - 1);
                startPoint.y = Math.max(0, quarters[startQuarterIdx].ys - 1) * 2;
            }

            console.log(`Math.max(0, quarters[startQuarterIdx].ys - 1) * 2`, quarters[startQuarterIdx].ys, Math.max(0, quarters[startQuarterIdx].ys - 1) * 2);

            const endPoint = {
                x: randBetween(quarters[3 - startQuarterIdx].xs + 1, quarters[3 - startQuarterIdx].xe - 1),
                y: randBetween(quarters[3 - startQuarterIdx].ys + 1, quarters[3 - startQuarterIdx].ye - 1),
            };

            console.log(`startPoint`, startPoint, endPoint);

            this.stage = preStage;

            for (let i = 0; i < (this.side ** 2 ) / 6; i++) {
                this.setPoint(
                    randBetween(0, this.side),
                    randBetween(0, this.side),
                    '#'
                );
            }

            let stepIdx = 1;
            let paCollLast = [];
            let paColl = [startPoint];

            while (paColl.length > 0) {
                paCollLast = paColl.slice();
                paColl = [];
                for (const pa of paCollLast) {
                    const paInner = this.getPointsAround(pa.x, pa.y)
                        .filter((p) => p.val === '.');
                    paColl.push(...paInner);
                }

                paColl = Object.values(paColl.reduce((acc, p) => {
                    acc[`${p.x}_${p.y}`] = p;
                    return acc;
                }, {}));

                paColl.forEach((p) => this.setPoint(p.x, p.y, stepIdx));
                stepIdx++;
            }

            this.setPoint(startPoint.x, startPoint.y, 's');
            this.setPoint(endPoint.x, endPoint.y, 'e');

            let paEnd = endPoint;
            let paEndList = [];
            do {
                paEndList = this.getPointsAround(paEnd.x, paEnd.y)
                    .filter((p) => `${p.val}`.match(/(\d|s)/));

                if (paEndList.length) {
                    paEnd = this.getLowest([paEnd, ...paEndList]);
                    this.setPoint(paEnd.x, paEnd.y, 'e');
                }
            } while (paEndList.length > 0);

            for (const idx in this.stage) {
                if (this.stage[idx] === '.') {
                    this.stage[idx] = '#';
                }
            }
        }

        getPointsDist(point1, point2) {
            const {x: x1, y: y1} = this.getCoors(point1);
            const {x: x2, y: y2} = this.getCoors(point2);

            return Math.hypot(x1 - x2, y1 - y2);
        }

        printStage() {
            const rawData = chunk(this.stage, this.stage.length ** 0.5)
                .map(x => {
                    return x.map(val => {
                        return `${val}`.replace(/\d+/, (str) => {
                            return (+str) % 10;
                        });
                    }).join(' ');
                })
                .join('\n');

            const formatedData = [];
            const styleData = [];

            const maxVal = this.stage.reduce((acc, n) => {
                if (Number.isNaN(+n)) {
                    return acc;
                }
                return acc < n ? n : acc;
            }, 0);

            console.log(`maxVal`, maxVal);

            for (const charIdx in rawData) {
                formatedData[charIdx] = rawData[charIdx];
                if (rawData[charIdx] === '.') {
                    formatedData[charIdx] = '%c.';
                    styleData.push('color: purple');
                } else if (rawData[charIdx] === 'X') {
                    formatedData[charIdx] = '%cX';
                    styleData.push('color: red');
                } else if (rawData[charIdx] === '#') {
                    formatedData[charIdx] = '%c#';
                    styleData.push('color: red');
                } else if (rawData[charIdx] === 's') {
                    formatedData[charIdx] = '%cs';
                    styleData.push('color: white');
                } else if (rawData[charIdx] === 'e') {
                    formatedData[charIdx] = '%ce';
                    styleData.push('color: white');
                } else if (rawData[charIdx] === 'm') {
                    formatedData[charIdx] = '%cm';
                    styleData.push('color: white');
                } else if (rawData[charIdx].match(/\d/)) {
                    formatedData[charIdx] = '%c' + rawData[charIdx];
                    styleData.push(`color: rgb(0, ${this.stage[fl(charIdx/2)] * (255 / maxVal)}, 0)`);
                }
            }

            return [formatedData.join(''), ...styleData];
        }

        isStageObstacle(idx) {
            const {x, y} = this.getCoors(idx);

            return !((
                y % 2 === 1 // odd row without first and last col
                && x !== 0
                && x !== this.side - 1
            ) || (
                x % 2 === 1 // odd col without first and last row
                && y !== 0
                && y !== this.side - 1
            ));
        }

        isStageBoundary(idx) {
            const {x, y} = this.getCoors(idx);

            return (
                (
                    x === 0
                    || x === this.side - 1
                    || y === 0
                    || y === this.side - 1

                ) && !(
                    (x === 0 && y === 0)
                    || (x === this.side - 1 && y === 0)
                    || (x === 0 && y === this.side - 1)
                    || (x === this.side - 1 && y === this.side - 1)
                )
            );
        }


        getPoint(x, y) {
            return this.stage[y * this.side + x % this.side];
        }

        getPointNoWrap(x, y) {
            if (x >= this.side || y >= this.side || x < 0 || y < 0) {
                return null;
            }
            return this.stage[y * this.side + x % this.side];
        }

        getPointsAround(x, y) {
            const points = [
                {x: x, y: y - 1},
                {x: x - 1, y: y},
                {x: x + 1, y: y},
                {x: x, y: y + 1},
            ];

            return points
                .map((point) => {
                    return {
                        ...point,
                        val: this.getPointNoWrap(point.x, point.y),
                    }
                })
                .filter((point) => {
                    return !!point.val;
                });
        }

        getLowest(points) {
            return points.reduce((acc, n) => {
                if (acc.val === 's') {
                    return acc;
                }
                if (n.val === 's') {
                    return n;
                }
                return acc.val < n.val ? acc : n;
            });
        }

        setPoint(x, y, val) {
            this.stage[y * this.side + (x % this.side)] = val;
        }

        getCoors(idx) {
            return {
                x: idx % this.side,
                y: fl(idx / this.side),
            }
        }

        getLineFunc(x1, y1, x2, y2) {
            const a = (y2 - y1) / (x2 - x1);
            const b = (y1 * x2 - y2 * x1) / (x2 - x1);

            return (x) => Math.round(a * x + b);
        }

        checkPass(stage, startPoint, endPoint) {

        }
    }

    const stageCellSize = 6;
    const stage = new Grid(stageCellSize);



    console.log(...stage.printStage());

})();


