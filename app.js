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
        left: 10,
        top: 458,
    };

    const CONSOLE = {
        top: 10,
        left: 10,
        right: MAIN_AREA.width - 294,
        bottom: MAIN_AREA.height - 350,
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

    const canvasConsole = document.createElement('canvas');
    canvasConsole.width = CONSOLE.width;
    canvasConsole.height = CONSOLE.height;
    ctxConsole = canvasConsole.getContext('2d');

    const canvasLogo = document.createElement('canvas');
    canvasLogo.width = SEC_AREA.width;
    canvasLogo.height = SEC_AREA.height;
    ctxLogo = canvasLogo.getContext('2d');

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
        stage: 'INTRO',
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

    function randBetween(lowerInput, upperInput) {
        let [lower, upper] = [lowerInput, upperInput].sort();
        return lower + fl(rnd() * (upper - lower));
    }

    function chunk(input, chunkLen) {
        output = [];
        while(input.length){
            output.push(input.slice(0, chunkLen));
            input = input.slice(chunkLen);
        }
        return output;
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
            CONSOLE.gridCellHeight
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
            CONSOLE.gridCellHeight
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

        drawScanlines(timestamp);
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
                    y
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
        const initalX = KEYBOARD.left + 30;
        const initalY = KEYBOARD.top;
        const keySize = 95;

        ctxMain.save();
        for (const key of Object.values(keys)) {
            const keyX = initalX + key.pos * keySize + key.groupRow * 50;
            const keyY = initalY + key.groupRow * keySize;

            drawKey(key, keyX, keyY);
        }
        ctxMain.restore();

        ctxMain.save();
        ctxMain.strokeStyle = '#0f7aff';
        ctxMain.lineWidth = 1;
        if (settings.isHq) {
            ctxMain.shadowColor = '#0f7aff';
            ctxMain.shadowBlur = 3;
        }
        ctxMain.beginPath();

        const sepX = initalX - 10;
        const sepY = initalY - 10;

        ctxMain.moveTo(sepX, sepY);
        ctxMain.lineTo(sepX + keySize * 3, sepY);
        ctxMain.lineTo(sepX + keySize * 3, sepY + keySize);
        ctxMain.lineTo(sepX + keySize * 4 - 45, sepY + keySize);
        ctxMain.lineTo(sepX + keySize * 4 - 45, sepY + keySize * 2);
        ctxMain.lineTo(sepX + keySize * 4 + 5, sepY + keySize * 2);
        ctxMain.lineTo(sepX + keySize * 4 + 5, sepY + keySize * 3);
        ctxMain.lineTo(sepX + keySize * 6 + 5, sepY + keySize * 3);
        ctxMain.lineTo(sepX + keySize * 6 + 5, sepY + keySize * 2);
        ctxMain.lineTo(sepX + keySize * 7 - 45, sepY + keySize * 2);
        ctxMain.lineTo(sepX + keySize * 7 - 45, sepY + keySize);
        ctxMain.lineTo(sepX + keySize * 7, sepY + keySize);
        ctxMain.lineTo(sepX + keySize * 7, sepY);
        ctxMain.lineTo(sepX + keySize * 10, sepY);

        ctxMain.moveTo(sepX, sepY + keySize);
        ctxMain.lineTo(sepX + keySize * 2, sepY + keySize);

        ctxMain.moveTo(sepX + keySize - 50, sepY + keySize * 2);
        ctxMain.lineTo(sepX + keySize * 3, sepY + keySize * 2);

        ctxMain.moveTo(sepX + keySize * 8, sepY + keySize);
        ctxMain.lineTo(sepX + keySize * 10, sepY + keySize);

        ctxMain.moveTo(sepX + keySize * 7, sepY + keySize * 2);
        ctxMain.lineTo(sepX + keySize * 9 + 50, sepY + keySize * 2);

        ctxMain.moveTo(sepX + keySize * 4, sepY + keySize);
        ctxMain.lineTo(sepX + keySize * 6, sepY + keySize);

        ctxMain.moveTo(sepX + keySize * 5 - 50, sepY + keySize * 2);
        ctxMain.lineTo(sepX + keySize * 5 + 50, sepY + keySize * 2);

        ctxMain.stroke();

        ctxMain.strokeStyle = '#d7eaff';
        ctxMain.lineWidth = 5;

        ctxMain.globalCompositeOperation = 'overlay';
        ctxMain.setLineDash([5, 3 * keySize, 5, 5 * keySize, 5, 7 * keySize]);
        ctxMain.lineDashOffset = (timestamp / 8) % (15 * keySize + 15);
        ctxMain.stroke();

        ctxMain.restore();
    }

    function drawKey(key, x, y) {
        ctxMain.save();

        // box
        ctxMain.strokeStyle = getKeyStyle(key, {upState: '#ffc5f2'});
        ctxMain.lineWidth = 3;
        if (settings.isHq) {
            ctxMain.shadowBlur = key.isPushed ? 1 : 5;
            ctxMain.shadowColor = getKeyStyle(key);
        }
        ctxMain.fillStyle = COLOR.bg;
        ctxMain.strokeRect(x, y, 75, 75);

        ctxMain.fillRect(x, y, 75, 75);

        // heat leds
        if (settings.isHq) {
            ctxMain.shadowBlur = 10;
        }

        const degree = fl(key.heat / 6);

        if (degree < 5) {
            for(const degreeIdx of [1,2,3,4]){
                if (degree >= degreeIdx) {
                    drawKeyboardLed(x + 65, y + 75 - degreeIdx * 10, getHeatStyle(degreeIdx));
                }
            }
        }

        // char
        ctxMain.strokeStyle = getKeyStyle(key);
        ctxMain.lineWidth = 2;
        if (settings.isHq) {
            ctxMain.shadowBlur = 10;
            ctxMain.shadowColor = getKeyStyle(key);
        }
        ctxMain.lineWidth = 1;
        ctxMain.font = '70px monospace';
        ctxMain.textBaseline = 'top';
        ctxMain.textAlign = 'left';
        ctxMain.strokeText(key.name.toUpperCase(), x + 17, y + 7);
        ctxMain.restore();
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
        ctxMain.shadowColor = color;
        ctxMain.fillStyle = color;
        ctxMain.fillRect(x, y, 5, 5);
    }


    function drawRetroText(text, x, y, height) {
        const gradient = ctxLogo.createLinearGradient(
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

        ctxLogo.save();
        ctxLogo.fillStyle = gradient;
        ctxLogo.font = 'bold 130px monospace';
        ctxLogo.textBaseline = 'top';
        if (settings.isHq) {
            ctxLogo.shadowBlur = 55;
            ctxLogo.shadowColor = '#a834cd';
        }
        ctxLogo.fillText(text, x,y-5);
        ctxLogo.strokeStyle = '#eee';
        ctxLogo.lineWidth = 5;
        ctxLogo.globalCompositeOperation = 'soft-light';
        ctxLogo.strokeText(text, x,y-5);
        ctxLogo.restore();
    }

    function drawLogo(timestamp) {
        ctxSec.save();
        ctxSec.rect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);
        ctxSec.clip();
        // draw console grid
        const gridSize = 750;
        const gridCellSize = 50;
        const offset = fl(timestamp/50) % (gridCellSize);

        ctxSec.scale(1.5, 0.75);
        ctxSec.translate(-505, 350);
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

            ctxSec.moveTo(gridSize * 0.25 - (gridIdx-2) * gridCellSize * 0.25 - offset * 0.5,
                (gridIdx-2) * gridCellSize / 2 + offset);
            ctxSec.lineTo((gridSize * 0.75) + (gridIdx-2) * gridCellSize * 0.25 + offset * 0.5,
                (gridIdx-2) * gridCellSize / 2 + offset);
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
                CONSOLE.height / 3
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
        const offset = fl(timestamp/40) % (scanlineHeight*2);

        ctxMain.save();
        ctxMain.globalCompositeOperation = 'multiply';
        for(let scanlineIdx = -scanlineHeight; scanlineIdx < MAIN_AREA.height / scanlineHeight; scanlineIdx++) {
            ctxMain.fillStyle = (scanlineIdx % 2 === 0) ? '#ccc' : '#eee';
            ctxMain.fillRect(0, scanlineIdx * scanlineHeight + offset, MAIN_AREA.width, scanlineHeight);
        }
        ctxMain.restore();

        ctxSec.save();
        ctxSec.globalCompositeOperation = 'multiply';
        for(let scanlineIdx = -scanlineHeight; scanlineIdx < SEC_AREA.height / scanlineHeight; scanlineIdx++) {
            ctxSec.fillStyle = (scanlineIdx % 2 === 0) ? '#ccc' : '#eee';
            ctxSec.fillRect(0, scanlineIdx * scanlineHeight + offset, SEC_AREA.width, scanlineHeight);
        }
        ctxSec.restore();
    }

    function updateCache() {
        prerenderLogo();
    }

    function prerenderLogo() {
        // draw grid mask
        ctxLogo.save();
        ctxLogo.clearRect(0, 0, SEC_AREA.width, SEC_AREA.height);
        const maskTop = 200;
        const maskHeight = 300;

        const maskGradient = ctxLogo.createLinearGradient(
            SEC_AREA.width / 2, maskTop,
            SEC_AREA.width / 2, maskTop + maskHeight
        );

        maskGradient.addColorStop(0,    COLOR.bg);
        maskGradient.addColorStop(0.25,    COLOR.bg);
        maskGradient.addColorStop(1,  'transparent');

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
            ctxLogo.fillRect( -bgCloudSize, 0 - bgCloudSize, bgCloudSize, bgCloudSize);
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
})();