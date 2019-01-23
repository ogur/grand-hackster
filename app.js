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
        'q': {name: 'q', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 0, x: 0},
        'w': {name: 'w', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 1, x: 0, alt: '⇧'},
        'e': {name: 'e', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 2, x: 0},
        'r': {name: 'r', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 3, x: 1},
        't': {name: 't', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 4, x: 1},
        'y': {name: 'y', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 5, x: 1},
        'u': {name: 'u', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 6, x: 1},
        'i': {name: 'i', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 7, x: 2, alt: '⇧'},
        'o': {name: 'o', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 8, x: 2},
        'p': {name: 'p', heat: 0, isDestroyed: false, isPushed: false, y: 0, pos: 9, x: 2},
        'a': {name: 'a', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 0, x: 0, alt: '⇦'},
        's': {name: 's', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 1, x: 0, alt: '⇩'},
        'd': {name: 'd', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 2, x: 0, alt: '⇨'},
        'f': {name: 'f', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 3, x: 1},
        'g': {name: 'g', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 4, x: 1},
        'h': {name: 'h', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 5, x: 1},
        'j': {name: 'j', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 6, x: 2, alt: '⇦'},
        'k': {name: 'k', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 7, x: 2, alt: '⇩'},
        'l': {name: 'l', heat: 0, isDestroyed: false, isPushed: false, y: 1, pos: 8, x: 2, alt: '⇨'},
        'z': {name: 'z', heat: 0, isDestroyed: false, isPushed: false, y: 2, pos: 0, x: 0},
        'x': {name: 'x', heat: 0, isDestroyed: false, isPushed: false, y: 2, pos: 1, x: 0},
        'c': {name: 'c', heat: 0, isDestroyed: false, isPushed: false, y: 2, pos: 2, x: 0},
        'v': {name: 'v', heat: 0, isDestroyed: false, isPushed: false, y: 2, pos: 3, x: 1},
        'b': {name: 'b', heat: 0, isDestroyed: false, isPushed: false, y: 2, pos: 4, x: 1},
        'n': {name: 'n', heat: 0, isDestroyed: false, isPushed: false, y: 2, pos: 5, x: 2},
        'm': {name: 'm', heat: 0, isDestroyed: false, isPushed: false, y: 2, pos: 6, x: 2},
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

    const ctxMain = document.querySelector('#mainArea').getContext('2d');
    const ctxSec = document.querySelector('#secArea').getContext('2d');
    const ctxConsole = createCrx(CONSOLE.width, CONSOLE.height);
    const ctxLogo = createCrx(SEC_AREA.width, SEC_AREA.height);
    const ctxKeyboard = createCrx(KEYBOARD.width, KEYBOARD.height);
    const ctxStage = createCrx(SEC_AREA.width, SEC_AREA.height);
    const ctxDarknessBase = createCrx(SEC_AREA.width, SEC_AREA.height);
    const ctxDarkness = createCrx(SEC_AREA.width, SEC_AREA.height);
    const ctxScore = createCrx(150, 100);
    const ctxTimer = createCrx(150, 100);
    const ctxStageMsg = createCrx(200, 100);
    const ctxPadlock = createCrx(240, 135);

    const imageSpace = document.querySelector('#sourceSpace');
    const imageAbout = document.querySelector('#sourceAbout');

    const appScriptUrl = document.querySelector('#app').src;

    let isModifierPressed = false;
    const selectedArea = {y: null, x: null};

    class Grid {
        constructor(stageCellSize) {
            this.side = 3 + 4 * stageCellSize;
        }

        generateStage() {
            this.stage = [];

            for (let y = 0; y < this.side; y++) {
                this.stage[y] = [];
                for (let x = 0; x < this.side; x++) {
                    this.stage[y][x] = {
                        isObstacle: true,
                        isEnd: false,
                        isStart: false,
                        isRightPath: false,
                        dist: null,
                        x,
                        y,
                    };
                }
            }

            // placing inner walls
            loop2d(this.stage, this.side, this.side, (point, x, y) => {
                if (!this.isStageObstacle(x, y)) {
                    point.isObstacle = false;
                }
            });

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

            const startQuarterIdx = randOf([0, 1, 2, 3]);

            // placing start point
            this.startPoint = {};
            if (rnd() > 0.5) {
                this.startPoint.x = Math.max(0, quarters[startQuarterIdx].xs - 1) * 2;
                this.startPoint.y = randBetween(quarters[startQuarterIdx].ys + 1, quarters[startQuarterIdx].ye - 1);
            } else {
                this.startPoint.x = randBetween(quarters[startQuarterIdx].xs + 1, quarters[startQuarterIdx].xe - 1);
                this.startPoint.y = Math.max(0, quarters[startQuarterIdx].ys - 1) * 2;
            }

            // placing endpoint
            this.endPoint = {isObstacle: true};
            while (this.endPoint.isObstacle) {
                const x = randBetween(quarters[3 - startQuarterIdx].xs + 1, quarters[3 - startQuarterIdx].xe - 1);
                const y = randBetween(quarters[3 - startQuarterIdx].ys + 1, quarters[3 - startQuarterIdx].ye - 1);

                if (!this.stage[y][x].isObstacle) {
                    this.endPoint = this.stage[y][x];
                }
            }

            for (let i = 0; i < (this.side ** 2) / 4; i++) {
                this.stage[randBetween(0, this.side)][randBetween(0, this.side)].isObstacle = true;
            }

            // checking if solvable
            let stepIdx = 1;
            let pointsAroundPrev = [];
            let pointsAroundList = [this.startPoint];

            while (pointsAroundList.length > 0) {
                pointsAroundPrev = pointsAroundList.slice();
                pointsAroundList = [];
                for (const prevPoint of pointsAroundPrev) {
                    const newPointsAround = this.getPointsAround(prevPoint.x, prevPoint.y)
                        .filter((point) => !point.isObstacle && !point.dist);
                    pointsAroundList.push(...newPointsAround);
                }

                pointsAroundList = Object.values(pointsAroundList.reduce((acc, point) => {
                    acc[`${point.x}_${point.y}`] = point;
                    return acc;
                }, {}));

                pointsAroundList.forEach((point) => {
                    this.stage[point.y][point.x].dist = stepIdx
                });
                stepIdx++;
            }
            if (this.stage[this.endPoint.y][this.endPoint.x].dist === null) {
                console.info('stage was unsolvable');
                return this.generateStage();
            }

            this.stage[this.startPoint.y][this.startPoint.x] = {
                isObstacle: false,
                dist: 0,
                x: this.startPoint.x,
                y: this.startPoint.y,
            };
            this.stage[this.endPoint.y][this.endPoint.x].isEnd = true;

            // finding path to goal
            let prevLowestPoint = this.endPoint;
            let pointsAroundEndList = [];
            do {
                pointsAroundEndList = this.getPointsAround(prevLowestPoint.x, prevLowestPoint.y)
                    .filter((point) => {
                        return !point.isObstacle && !point.isRightPath && point.dist !== null;
                    });

                if (pointsAroundEndList.length) {
                    prevLowestPoint = this.getLowest([prevLowestPoint, ...pointsAroundEndList]);
                    this.stage[prevLowestPoint.y][prevLowestPoint.x].isRightPath = true;
                }
            } while (pointsAroundEndList.length > 0);

            // placing additional walls
            loop2d(this.stage, this.side, this.side, (point) => {
                if (!point.isObstacle && point.dist === null) {
                    point.isObstacle = true;
                }
            });

            // placing locks
            let lockPlaced = 0;
            for (let i = 0; lockPlaced < 10 && i < 400; i++) {
                const point = this.stage[randBetween(0, this.side)][randBetween(0, this.side)];
                if (!point.isObstacle && !point.isEnd && !point.isStart && this.isDoorSpace(point.x, point.y)) {
                    point.special = {type: 'LOCK', pattern: generateGoal(fl(lockPlaced / 2) + 1), level: lockPlaced + 1};
                    point.isObstacle = true;
                    lockPlaced++;
                }
            }
        }

        isStageObstacle(x, y) {
            return !(
                (
                    y % 2 === 1
                    && x !== 0
                    && x !== this.side - 1
                ) ||
                (
                    x % 2 === 1
                    && y !== 0
                    && y !== this.side - 1
                ));
        }

        isDoorSpace(x, y) {
            if (x === 0 || x === this.side - 1 || y === 0 || y === this.side - 1) {
                return false;
            }
            if (this.stage[y - 1][x - 1].special || this.stage[y - 1][x].special || this.stage[y - 1][x + 1].special
                || this.stage[y][x - 1].special || this.stage[y][x].special || this.stage[y][x + 1].special
                || this.stage[y + 1][x - 1].special || this.stage[y + 1][x].special || this.stage[y + 1][x + 1].special) {
                return false;
            }
            if (
                (this.stage[y - 1][x].isObstacle && this.stage[y + 1][x].isObstacle && !this.stage[y][x - 1].isObstacle && !this.stage[y][x + 1].isObstacle)
                ||
                (this.stage[y][x - 1].isObstacle && this.stage[y][x + 1].isObstacle && !this.stage[y - 1][x].isObstacle && !this.stage[y + 1][x].isObstacle)
            ) {
                return true;
            }
        }

        getPointNoWrap(x, y) {
            if (x >= this.side || y >= this.side || x < 0 || y < 0) {
                return null;
            }
            return this.stage[y][x];
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
                    return this.getPointNoWrap(point.x, point.y)
                })
                .filter((point) => {
                    return !!point;
                });
        }

        getLowest(points) {
            return points.reduce((acc, n) => {
                if (acc.isStart) {
                    return acc;
                }
                if (n.isStart) {
                    return n;
                }
                return acc.dist < n.dist ? acc : n;
            });
        }
    }

    document.addEventListener('keydown', keyDownHandler);

    document.addEventListener('keyup', keyUpHandler);

    let consoleArea = [];
    const consoleHumanData = [];

    let lastTimestampHeat = 0;
    let lastTimestampEnemy = 0;
    let lastTimestampAreaReign = 0;
    let lastTimestampEnemyGoal = 0;
    let lastTimestampLevelTimer = 0;

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
        phase: 'INTRO',
        currentGoal: null,
        areasReign: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        currentEnemyPosition: null,
        levelEnemyPosition: null,
        levelTimerStart: null,
        scoreList: [],
        mainGoalComplete: false,
        timeForLevel: 5 * 60 * 1000,
        levelFinishTime: null,
        loopStartTime: 0,
        missionCounter: 0,
    };

    const player = {
        x: 0,
        y: 0,
    };

    let stageCellSize;
    let grid;

    let stageBgPath;

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
        let output = [];
        while (input.length) {
            output.push(input.slice(0, chunkLen));
            input = input.slice(chunkLen);
        }
        return output;
    }

    function loop2d(arr, xLen, yLen, cb) {
        for (let y = 0; y < yLen; y++) {
            for (let x = 0; x < xLen; x++) {
                const val = arr && arr[y] && arr[y][x];
                cb(val, x, y, arr);
            }
        }
    }

    function createCrx(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas.getContext('2d');
    }


    function init() {
        stageCellSize = 4;
        grid = new Grid(stageCellSize);

        createDarkness();
        createPadlock();

        updateCache();
        requestAnimationFrame(loop);
        gameState.loopStartTime = Date.now();
    }

    function initMission() {
        lastTimestampHeat = 0;
        lastTimestampEnemy = 0;
        lastTimestampAreaReign = 0;
        lastTimestampEnemyGoal = 0;
        lastTimestampLevelTimer = 0;
        gameState.levelTimerStart = Date.now();
        gameState.mainGoalComplete = false;
        gameState.areasReign = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        consoleArea = [];
        ctxConsole.clearRect(
            0,
            0,
            CONSOLE.width,
            CONSOLE.height,
        );
        gameState.missionCounter++;

        grid.generateStage();

        player.x = grid.startPoint.x;
        player.y = grid.startPoint.y;
        grid.stage[grid.startPoint.y][grid.startPoint.x].isVisited = true;

        gameState.levelEnemyPosition = Object.keys(RACES).sort(() => 0.5 - rnd());
        gameState.currentEnemyPosition = generateEnemyPosition(6);

        renderStage();
    }

    function finishMission() {
        gameState.levelFinishTime = Date.now();
        let remainingTimeDiff = gameState.timeForLevel - (gameState.levelFinishTime - gameState.levelTimerStart);

        remainingTimeDiff = Math.max(0, remainingTimeDiff);

        addToScore({
            label: `REMAINING TIME ${formatTime(remainingTimeDiff)}`,
            points: fl(remainingTimeDiff / 1000),
        });
    }


    function loop(timestamp) {
        main(timestamp);
        draw(timestamp);

        requestAnimationFrame(loop);
    }

    function keyDownHandler(event) {
        const keyName = event.key.toLowerCase();
        if (!['f5', 'f11', 'f12'].includes(keyName)) {
            event.preventDefault();
        }

        if (keyName === '=') {
            settings.isHq = !settings.isHq;
            updateCache();
        }

        if (gameState.phase === 'INTRO') {
            if (keyName === 'arrowdown' || keyName === 's') {
                systemMenu.selectedItem = (systemMenu.selectedItem + 1) % systemMenu.list.length;
            } else if (keyName === 'arrowup' || keyName === 'w') {
                systemMenu.selectedItem = (systemMenu.list.length + systemMenu.selectedItem - 1) % systemMenu.list.length;
            } else if (keyName === ' ') {
                if (systemMenu.selectedItem === 0) {
                    initMission();
                    gameState.phase = 'GAME';
                } else if (systemMenu.selectedItem === 2) {
                    gameState.phase = 'ABOUT';
                }
            }
            return;
        }

        if (gameState.phase === 'ABOUT') {
            gameState.phase = 'INTRO';
        }

        if (gameState.phase === 'GAME') {
            if (keyName === 'shift' && !event.repeat) {
                isModifierPressed = true;
                prerenderKeyboard();
            }

            if (keyName === 'arrowdown' || (keyName === 's' && event.shiftKey)) {
                moveHandler(player.x, player.y + 1, player.y + 1 < grid.side);
                return;
            }

            if (keyName === 'arrowup' || (keyName === 'w' && event.shiftKey)) {
                moveHandler(player.x, player.y - 1, player.y - 1 >= 0);
                return;
            }

            if (keyName === 'arrowright' || (keyName === 'd' && event.shiftKey)) {
                moveHandler(player.x + 1, player.y, player.x + 1 < grid.side);
                return;
            }

            if (keyName === 'arrowleft' || (keyName === 'a' && event.shiftKey)) {
                moveHandler(player.x - 1, player.y, player.x - 1 >= 0);
                return;
            }


            if (keyName === 'k' && event.shiftKey) {
                switchAreaHandler(selectedArea.x, selectedArea.y + 1, selectedArea.y + 1 < 3, {x: 1, y: 2});
                return;
            }

            if (keyName === 'i' && event.shiftKey) {
                switchAreaHandler(selectedArea.x, selectedArea.y - 1, selectedArea.y - 1 >= 0, {x: 1, y: 0});
                return;
            }

            if (keyName === 'l' && event.shiftKey) {
                switchAreaHandler(selectedArea.x + 1, selectedArea.y, selectedArea.x + 1 < 3, {x: 2, y: 1});
                return;
            }

            if (keyName === 'j' && event.shiftKey) {
                switchAreaHandler(selectedArea.x - 1, selectedArea.y, selectedArea.x - 1 >= 0, {x: 0, y: 1});
                return;
            }


            if (keyName === ' ') {
                if (event.shiftKey) {
                    selectedArea.y = null;
                    selectedArea.x = null;
                } else if (gameState.currentGoal) {
                    let isComplete = true;

                    loop2d(gameState.currentGoal.special.pattern, 3, 3, (val, x, y) => {
                        if (val && gameState.areasReign[y][x] !== 'HUMAN') {
                            isComplete = false;
                        }
                    });

                    if (isComplete) {
                        addToScore({
                            label: `LOCK LVL ${gameState.currentGoal.special.level}`,
                            points: gameState.currentGoal.special.level * 50,
                        });
                        gameState.currentGoal.isObstacle = false;
                        gameState.currentGoal.special = null;
                        gameState.currentGoal = null;

                        renderStage();
                        playOpenLock();
                    } else {
                        playWrongKey();
                    }

                    return;
                }
            }

            if (event.repeat) {
                return;
            }
            const key = keys[keyName];

            if (key && !key.isDestroyed) {
                key.isPushed = true;
                clearKey(key);
                drawKey(key);

                key.heat = Math.min(key.heat + 1, HEAT.max);
                if (key.heat === HEAT.max) {
                    key.isDestroyed = true;
                }

                const targetRow = selectedArea.y !== null ? selectedArea.y : key.y;
                const targetCol = selectedArea.x !== null ? selectedArea.x : key.x;

                const degree = fl(key.heat / 6) * 2 + 1;
                for (let keyRep = 0; keyRep < degree; keyRep++) {
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
            }
        }

        if (gameState.phase === 'SUCCESS') {
            if (gameState.levelFinishTime + 2 * 1000 < Date.now()) {
                initMission();
                gameState.phase = 'GAME';
            }
        }

        if (gameState.phase === 'GAMEOVER') {
            if (gameState.levelFinishTime + 2 * 1000 < Date.now()) {
                gameState.scoreList = [];
                gameState.phase = 'INTRO';
            }
        }
    }

    function keyUpHandler(event) {
        const keyName = event.key.toLowerCase();

        if (keyName === 'shift') {
            isModifierPressed = false;
            prerenderKeyboard();
            return;
        }

        const key = keys[keyName];

        if (key) {
            key.isPushed = false;

            clearKey(key);
            drawKey(key);
        }
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
        if (gameState.phase === 'GAME') {
            levelTimer(timestamp);

            enemyGoalChange(timestamp);
            heatDecay(timestamp);
            enemyActivity(timestamp);

            consoleAreaReign(timestamp);
        }
    }


    function levelTimer(timestamp) {
        const levelTimerInterval = 210;
        if (timestamp - lastTimestampLevelTimer > levelTimerInterval) {
            lastTimestampLevelTimer = fl(timestamp / levelTimerInterval) * levelTimerInterval;

            prerenderTimer();
            prerenderScore();
        }
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
            prerenderKeyboard();
        }
    }

    function enemyActivity(timestamp) {
        const enemyInterval = 15;
        if (timestamp - lastTimestampEnemy > enemyInterval) {
            lastTimestampEnemy = fl(timestamp / enemyInterval) * enemyInterval;

            let selectedArea = fl(rnd() * 9);
            while (gameState.currentEnemyPosition[selectedArea] === 0) {
                selectedArea = fl(rnd() * 9);
            }

            const goalRaceIdxList = Object.keys(gameState.currentEnemyPosition).filter((x, i) => !!gameState.currentEnemyPosition[i]);
            const selectedGoalIdx = randOf(goalRaceIdxList);

            writeConsole(selectedGoalIdx, RACES[gameState.currentEnemyPosition[selectedGoalIdx]]);

            const point = grid.stage[randBetween(1, grid.side)][randBetween(1, grid.side)];

            if (point.isVisited && rnd() > 0.95) {
                point.isVisited = false;
                renderStage();
            }
        }
    }

    function consoleAreaReign(timestamp) {
        const enemyInterval = 1000;
        if (timestamp - lastTimestampAreaReign > enemyInterval) {
            lastTimestampAreaReign = fl(timestamp / enemyInterval) * enemyInterval;

            const areasReign = [
                [{total: 0, human: 0, enemy: 0}, {total: 0, human: 0, enemy: 0}, {total: 0, human: 0, enemy: 0}],
                [{total: 0, human: 0, enemy: 0}, {total: 0, human: 0, enemy: 0}, {total: 0, human: 0, enemy: 0}],
                [{total: 0, human: 0, enemy: 0}, {total: 0, human: 0, enemy: 0}, {total: 0, human: 0, enemy: 0}],
            ];

            for (let selectedCellIdx = 0; selectedCellIdx < consoleArea.length; selectedCellIdx++) {
                const cell = consoleArea[selectedCellIdx];
                const x = fl((selectedCellIdx % CONSOLE.lineCols) / (CONSOLE.lineCols3));
                const y = fl((selectedCellIdx / CONSOLE.lineCols) / (CONSOLE.lineRows3));
                if (cell) {
                    areasReign[y][x].total += 1;
                    if (cell.race === 'HUMAN') {
                        areasReign[y][x].human += 1;
                    } else {
                        areasReign[y][x].enemy += 1;
                    }
                }
            }

            const halfOfArea = CONSOLE.lineCols * CONSOLE.lineRows / 18;

            loop2d(areasReign, 3, 3, (val, x, y) => {
                if (val.total > halfOfArea) {
                    const prevReign = gameState.areasReign[y][x];
                    gameState.areasReign[y][x] = (val.human >= val.enemy) ? 'HUMAN' : 'ENEMY';

                    if (gameState.areasReign[y][x] === 'HUMAN' && prevReign !== 'HUMAN') {
                        playReignWin();
                    }
                }
            });

            if (gameState.currentGoal) {
                let isComplete = true;

                loop2d(gameState.currentGoal.special.pattern, 3, 3, (val, x, y) => {
                    if (val && gameState.areasReign[y][x] !== 'HUMAN') {
                        isComplete = false;
                    }
                });

                if (isComplete) {
                    addToScore({
                        label: `LOCK LVL ${gameState.currentGoal.special.level}`,
                        points: gameState.currentGoal.special.level * 50,
                    });
                    gameState.currentGoal.isObstacle = false;
                    gameState.currentGoal.special = null;
                    gameState.currentGoal = null;

                    renderStage();
                    playOpenLock();
                }
            }
        }
    }

    function enemyGoalChange(timestamp) {
        const enemyGoalChangeInterval = 1000;
        if (timestamp - lastTimestampEnemyGoal > enemyGoalChangeInterval) {
            lastTimestampEnemyGoal = fl(timestamp / enemyGoalChangeInterval) * enemyGoalChangeInterval;

            gameState.currentEnemyPosition = generateEnemyPosition(6);
        }
    }


    function moveHandler(x, y, boundaryCond) {
        if (!boundaryCond) {
            playWrongKey();
            return false;
        }
        if (!gameState.mainGoalComplete && grid.startPoint.x === x && grid.startPoint.y === y) {
            playWrongKey();
        } else if (grid.stage[y][x].special && grid.stage[y][x].special.type === 'LOCK') {
            switchToGoal(grid.stage[y][x]);
            playWrongKey();
        } else if (!grid.stage[y][x].isObstacle) {
            switchToGoal(null);
            player.x = x;
            player.y = y;
            if (!grid.stage[y][x].isVisited) {
                addToScore({
                    label: 'LEVEL EXPLORATION',
                    points: 2,
                });
            }
            grid.stage[y][x].isVisited = true;


            if (grid.endPoint.x === x && grid.endPoint.y === y) {
                gameState.mainGoalComplete = true;
            }

            if (gameState.mainGoalComplete && grid.startPoint.x === x && grid.startPoint.y === y) {
                gameState.phase = 'SUCCESS';
                return finishMission();
            }

            renderStage();
        }
    }

    function switchAreaHandler(x, y, boundaryCond, defaultPos) {
        if (x === null || y === null) {
            selectedArea.x = defaultPos.x;
            selectedArea.y = defaultPos.y;
        } else if (boundaryCond) {
            selectedArea.x = x;
            selectedArea.y = y;
        }
    }

    function switchToGoal(goal) {
        gameState.currentGoal = goal;
    }


    function generateEnemyPosition(size) {
        const goal = gameState.levelEnemyPosition.slice();

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

        return chunk(goal, 3);
    }


    function draw(timestamp) {
        // draw main bg
        ctxMain.fillStyle = COLOR.bg;
        ctxMain.fillRect(0, 0, MAIN_AREA.width, MAIN_AREA.height);
        ctxSec.fillStyle = COLOR.bg;
        ctxSec.fillRect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);

        if (gameState.phase === 'INTRO') {
            drawLogo(timestamp);
            drawMenu(timestamp);
        }

        if (gameState.phase === 'ABOUT') {
            drawAbout(timestamp);
        }

        if (gameState.phase === 'GAME') {
            drawKeyboard(timestamp);

            drawConsole(timestamp);

            drawTransmission(timestamp);

            drawStage(timestamp);

        }

        if (gameState.phase === 'GAMEOVER') {
            drawGameOverScreen(timestamp);
            drawSummaryScreen(timestamp);
        }

        if (gameState.phase === 'SUCCESS') {
            drawWinMissionScreen(timestamp);
            drawSummaryScreen(timestamp);
        }

        if (settings.isHq) {
            drawScanlines(timestamp);
        }
    }

    function drawMenu() {
        ctxMain.save();
        ctxMain.fillStyle = '#ff3690';
        if (settings.isHq) {
            ctxMain.shadowBlur = 5;
            ctxMain.shadowColor = '#c30045';
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

    function drawAbout() {
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

    function drawWinMissionScreen(timestamp) {

        ctxSec.save();
        ctxSec.textAlign = 'center';
        ctxSec.font = '130px monospace';
        ctxSec.textBaseline = 'middle';
        ctxSec.fillStyle = '#03d626';
        ctxSec.shadowColor = '#03d626';
        ctxSec.globalAlpha = 1 - Math.sin((Math.PI / 180) * ((timestamp / 5) % 360));

        if (settings.isHq) {
            ctxSec.shadowBlur = 10;
        }
        ctxSec.fillText('SUCCESS', SEC_AREA.width / 2, SEC_AREA.height / 2);
        ctxSec.fillText('SUCCESS', SEC_AREA.width / 2, SEC_AREA.height / 2);
        ctxSec.fillText('SUCCESS', SEC_AREA.width / 2, SEC_AREA.height / 2);
        ctxSec.restore();
    }

    function drawSummaryScreen(timestamp) {
        ctxMain.save();
        ctxMain.textAlign = 'left';
        ctxMain.textBaseline = 'middle';
        ctxMain.fillStyle = '#03d626';
        ctxMain.shadowColor = '#03d626';

        if (settings.isHq) {
            ctxMain.shadowBlur = 2;
        }

        ctxMain.font = '25px monospace';
        ctxMain.fillText(
            `YOUR SCORE: ${getCurrentScore()}`,
            MAIN_AREA.left + 50,
            MAIN_AREA.top + 50,
        );

        ctxMain.font = '15px monospace';

        const scoreSummary = Object.values(gameState.scoreList.reduce((acc, line) => {
            if (typeof acc[line.label] === 'undefined') {
                acc[line.label] = {
                    label: line.label,
                    count: 0,
                    points: 0,
                };
            }

            acc[line.label].count++;
            acc[line.label].points += line.points;

            return acc;
        }, {}));

        ctxMain.fillText(
            `${'TYPE'.padEnd(70, ' ')} ${'COUNT'.padStart(6, ' ')} ${'SUM'.padStart(10, ' ')}`,
            MAIN_AREA.left + 50,
            MAIN_AREA.top + 80,
        );

        ctxMain.fillText(
            `${'------'.padEnd(70, ' ')} ${'------'.padStart(6, ' ')} ${'------'.padStart(10, ' ')}`,
            MAIN_AREA.left + 50,
            MAIN_AREA.top + 100,
        );

        for (let scoreIdx = 0; scoreIdx < scoreSummary.length; scoreIdx++) {
            const line = scoreSummary[scoreIdx];
            ctxMain.fillText(
                `${line.label.padEnd(70, ' ')} ${line.count.toString().padStart(6, ' ')} ${line.points.toString().padStart(10, ' ')}`,
                MAIN_AREA.left + 50,
                MAIN_AREA.top + 120 + scoreIdx * 20,
            );
        }

        if (gameState.levelFinishTime + 2 * 1000 < gameState.loopStartTime + timestamp) {
            ctxMain.font = '25px monospace';
            ctxMain.textAlign = 'center';
            ctxMain.fillText(`PRESS ANY KEY TO CONTINUE`, MAIN_AREA.width / 2, MAIN_AREA.height - 40);
        }

        ctxMain.restore();
    }

    function drawGameOverScreen(timestamp) {
        ctxSec.save();
        ctxSec.textAlign = 'center';
        ctxSec.font = '130px monospace';
        ctxSec.textBaseline = 'middle';
        ctxSec.fillStyle = '#f00';
        ctxSec.shadowColor = '#f00';
        ctxSec.globalAlpha = 1 - Math.sin((Math.PI / 180) * ((timestamp / 5) % 360));

        if (settings.isHq) {
            ctxSec.shadowBlur = 10;
        }
        ctxSec.fillText('GAME OVER', SEC_AREA.width / 2, SEC_AREA.height / 2);
        ctxSec.fillText('GAME OVER', SEC_AREA.width / 2, SEC_AREA.height / 2);
        ctxSec.fillText('GAME OVER', SEC_AREA.width / 2, SEC_AREA.height / 2);
        ctxSec.restore();
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
        const x = 10 + key.pos * KEYBOARD.keySize + key.y * 50;
        const y = 10 + key.y * KEYBOARD.keySize;

        ctxKeyboard.clearRect(x, y, 100, 100);
    }

    function drawKey(key) {
        const x = 20 + key.pos * KEYBOARD.keySize + key.y * 50;
        const y = 20 + key.y * KEYBOARD.keySize;
        ctxKeyboard.save();

        // box
        ctxKeyboard.strokeStyle = getKeyStyle(key, {upState: '#ffc5f2'});
        if (isModifierPressed && key.alt) {
            ctxKeyboard.strokeStyle = '#00ef00'
        }
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
        let textOffset = 17;
        let char = key.name.toUpperCase();
        if (isModifierPressed && key.alt) {
            char = key.alt;
            textOffset = 37;
            ctxKeyboard.textAlign = 'center';
            ctxKeyboard.strokeStyle = '#00ef00'
        }
        ctxKeyboard.strokeText(char, x + textOffset, y + 7);
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


    function drawConsole() {
        ctxMain.save();
        // draw console bg
        ctxMain.fillStyle = '#222';
        if (settings.isHq) {
            ctxMain.shadowBlur = 3;
        }
        ctxMain.lineWidth = 3;
        ctxMain.fillRect(CONSOLE.left, CONSOLE.top, CONSOLE.width, CONSOLE.height);

        // area reign
        loop2d(gameState.areasReign, 3, 3, (val, x, y) => {
            if (val === 'HUMAN') {
                ctxMain.fillStyle = '#030';
                ctxMain.fillRect(
                    CONSOLE.left + x * CONSOLE.width / 3 + 2,
                    CONSOLE.top + y * CONSOLE.height / 3 + 2,
                    CONSOLE.width / 3 - 4,
                    CONSOLE.height / 3 - 4,
                );
            } else if (val === 'ENEMY') {
                ctxMain.fillStyle = '#300';
                ctxMain.fillRect(
                    CONSOLE.left + x * CONSOLE.width / 3 + 2,
                    CONSOLE.top + y * CONSOLE.height / 3 + 2,
                    CONSOLE.width / 3 - 4,
                    CONSOLE.height / 3 - 4,
                );
            }
        });

        // draw selected area bg
        if (selectedArea.y !== null && selectedArea.x !== null) {
            ctxMain.save();
            ctxMain.strokeStyle = '#00a000';
            ctxMain.shadowColor = '#00a000';
            ctxMain.strokeRect(
                CONSOLE.left + selectedArea.x * CONSOLE.width / 3 + 2,
                CONSOLE.top + selectedArea.y * CONSOLE.height / 3 + 2,
                CONSOLE.width / 3 - 4,
                CONSOLE.height / 3 - 4,
            );
            ctxMain.restore();
        } else {
            ctxMain.save();
            ctxMain.strokeStyle = '#00a000';
            ctxMain.shadowColor = '#00a000';
            ctxMain.strokeRect(
                CONSOLE.left + 2,
                CONSOLE.top + 2,
                CONSOLE.width - 4,
                CONSOLE.height - 4,
            );
            ctxMain.restore();
        }

        // current goal
        if (gameState.currentGoal) {
            ctxMain.save();
            ctxMain.globalCompositeOperation = 'overlay';
            for (const overlayLayer in gameState.currentGoal.special.pattern) {
                loop2d(gameState.currentGoal.special.pattern, 3, 3, (val, x, y) => {
                    if (val) {
                        ctxMain.drawImage(
                            ctxPadlock.canvas,
                            CONSOLE.left + x * CONSOLE.width / 3,
                            CONSOLE.top + y * CONSOLE.height / 3,
                        );
                    }
                });
            }
            ctxMain.restore();
        }
        ctxMain.restore();

        ctxMain.drawImage(ctxConsole.canvas, CONSOLE.left, CONSOLE.top);
    }


    function drawTransmission() {
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

    function drawStage(timestamp) {
        const gridCellSize = 24;
        const stageSideOffset = 20;
        const stageSide = grid.side * gridCellSize;
        const stageBgPanel = (stageSideOffset * 2 + stageSide);

        drawStageBg(timestamp, stageBgPanel, 0, SEC_AREA.width - stageBgPanel, SEC_AREA.height);


        // main stage with glow
        ctxSec.save();
        ctxSec.fillStyle = '#000';
        ctxSec.shadowColor = '#da00bf';
        if (settings.isHq) {
            ctxSec.shadowBlur = 10;
        }
        ctxSec.fillRect(
            stageSideOffset,
            (SEC_AREA.height - stageSide) * 0.5,
            stageSide,
            stageSide,
        );
        ctxSec.restore();

        ctxSec.drawImage(ctxStage.canvas,
            0, 0,
            stageSide, stageSide,
            stageSideOffset,
            (SEC_AREA.height - stageSide) * 0.5,
            stageSide, stageSide,
        );

        // timer
        ctxSec.drawImage(ctxTimer.canvas, stageBgPanel + 20, 10);
        // score
        ctxSec.drawImage(ctxScore.canvas, stageBgPanel + 20, 160);

        // stage msg
        if (gameState.mainGoalComplete) {
            ctxSec.drawImage(ctxStageMsg.canvas, stageBgPanel + 20, 310);
        }
    }

    function drawStageBg(timestamp, x, y, width, height) {
        const gridCellSize = 24;

        ctxSec.save();
        ctxSec.shadowColor = '#0f7aff';
        if (settings.isHq) {
            ctxSec.shadowBlur = 3;
        }
        ctxSec.strokeStyle = '#0f7aff';
        ctxSec.lineWidth = 1;

        ctxSec.clip(new Path2D(` M ${x} ${y} h ${width} v ${height} h-${width} v-${height} `));
        ctxSec.stroke(stageBgPath);

        ctxSec.save();
        ctxSec.translate(SEC_AREA.width, 0);
        ctxSec.rotate(90 * Math.PI / 180);
        ctxSec.stroke(stageBgPath);
        ctxSec.restore();

        ctxSec.strokeStyle = '#d7eaff';
        ctxSec.lineWidth = 5;
        ctxSec.globalCompositeOperation = 'overlay';
        ctxSec.setLineDash([5, 30 * gridCellSize]);
        ctxSec.lineDashOffset = (timestamp / 16) % (30 * gridCellSize + 5);

        ctxSec.stroke(stageBgPath);
        ctxSec.restore();
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
        prerenderStageLine();
        prerenderStageMsg();
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
        ctxKeyboard.clearRect(0, 0, KEYBOARD.width, KEYBOARD.height);
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

    function prerenderStageLine() {
        const gridSize = 16;
        const gridCellSize = fl(SEC_AREA.height / gridSize) * 2;
        const r = (n) => Array.from({length: n}, (e, i) => i);

        const start = r(gridSize);

        let path = 'M 0 0';

        for (let i = 0; i < gridSize; i++) {
            path += ` L 0 ${start[i] * gridCellSize + gridSize * 1.75}`;
            path += ` L ${SEC_AREA.width} ${start[i] * gridCellSize + gridSize * 1.75}`;
            path += ` L ${SEC_AREA.width} ${(start[i] + 0.5) * gridCellSize + gridSize * 1.75}`;
            path += ` L 0 ${(start[i] + 0.5) * gridCellSize + gridSize * 1.75}`;
        }

        stageBgPath = new Path2D(path);
    }

    function createDarkness() {
        const gridCellSize = 24;
        ctxDarknessBase.fillStyle = COLOR.bg;
        ctxDarknessBase.fillRect(0, 0, SEC_AREA.width, SEC_AREA.height);
        if (settings.isHq) {
            ctxDarknessBase.shadowBlur = 1;
        }
        ctxDarknessBase.shadowColor = '#340034';

        loop2d([], grid.side * 2, grid.side * 2, () => {
            ctxDarknessBase.strokeStyle = '#620062';
            ctxDarknessBase.strokeRect(
                randBetween(0, grid.side * 2) * gridCellSize * 0.5,
                randBetween(0, grid.side * 2) * gridCellSize * 0.5,
                gridCellSize * 0.5,
                gridCellSize * 0.5,
            );
        });
    }

    function createPadlock() {
        ctxPadlock.translate(30, 10);
        ctxPadlock.scale(0.75, 0.75);
        ctxPadlock.fillStyle = '#eeeeee';
        ctxPadlock.lineCap = 'round';
        ctxPadlock.shadowColor = '#000000';
        ctxPadlock.shadowBlur = 10;
        ctxPadlock.lineWidth = 4;

        const p = new Path2D(`
            M 80 65 h80 v60 h-80 v-60
            
            M 90  45 
            A 30 30   0   1 1   150 45
            v20 h-10 v-20
            
            A 20 20   0   1 0   100 45
            v20 h-10 v-20
            
            M 115 100 A 12 12   0   1 1   125 100
            v15 h-10 v-15
            
        `);

        ctxPadlock.fill(p, 'evenodd');
    }

    function renderDarkness() {
        const gridCellSize = 24;
        ctxDarkness.drawImage(ctxDarknessBase.canvas, 0, 0);

        // cutting visible
        loop2d(grid.stage, grid.side, grid.side, (point, x, y) => {
            if (point.isVisited) {
                ctxDarkness.clearRect((x - 0.5) * gridCellSize, (y - 0.5) * gridCellSize, 2 * gridCellSize, 2 * gridCellSize);
                ctxDarkness.clearRect((x - 1) * gridCellSize, (y) * gridCellSize, 3 * gridCellSize, gridCellSize);
                ctxDarkness.clearRect((x) * gridCellSize, (y - 1) * gridCellSize, gridCellSize, 3 * gridCellSize);
            }
        });

        ctxDarkness.clearRect((player.x - 0.5) * gridCellSize, (player.y - 0.5) * gridCellSize, 2 * gridCellSize, 2 * gridCellSize);

        ctxStage.fillStyle = '#000';
        ctxStage.shadowColor = '#000';
        if (settings.isHq) {
            ctxStage.shadowBlur = 10;
        }
        ctxStage.drawImage(ctxDarkness.canvas, 0, 0);
        ctxStage.drawImage(ctxDarkness.canvas, 0, 0);
        ctxStage.drawImage(ctxDarkness.canvas, 0, 0);
        ctxStage.drawImage(ctxDarkness.canvas, 0, 0);
    }

    function prerenderTimer() {
        ctxTimer.clearRect(0, 0, 150, 100);

        ctxTimer.strokeStyle = '#ce36ff';
        ctxTimer.fillStyle = '#ce36ff';
        ctxTimer.lineWidth = 2;
        if (settings.isHq) {
            ctxTimer.shadowBlur = 10;
            ctxTimer.shadowColor = '#ce36ff';
        }
        ctxTimer.lineWidth = 1;
        ctxTimer.font = '50px monospace';
        ctxTimer.textBaseline = 'top';
        ctxTimer.textAlign = 'left';

        let diff = gameState.timeForLevel - (Date.now() - gameState.levelTimerStart);

        if (diff < 0) {
            diff = 0;
        }

        ctxTimer.strokeText(`TIME`, 0, 0);
        ctxTimer.strokeText(formatTime(diff), 0, 50);

        ctxTimer.fillText(`TIME`, 0, 0);
        ctxTimer.fillText(formatTime(diff), 0, 50);

        if (diff === 0) {
            gameState.phase = 'GAMEOVER';
            finishMission();
        }
    }

    function formatTime(diff) {
        const seconds = (fl(diff / 1000) % 60).toString().padStart(2, '0');
        const minutes = fl(diff / 1000 / 60);

        return `${minutes}:${seconds}`;
    }

    function prerenderStageMsg() {
        ctxStageMsg.clearRect(0, 0, 200, 100);

        ctxStageMsg.strokeStyle = '#00ff30';
        ctxStageMsg.fillStyle = '#00ff30';
        ctxStageMsg.lineWidth = 2;
        if (settings.isHq) {
            ctxStageMsg.shadowBlur = 10;
            ctxStageMsg.shadowColor = '#00ff30';
        }
        ctxStageMsg.lineWidth = 1;
        ctxStageMsg.font = '50px monospace';
        ctxStageMsg.textBaseline = 'top';
        ctxStageMsg.textAlign = 'left';

        const score = getCurrentScore();

        ctxStageMsg.strokeText(`ESCAPE`, 0, 0);
        ctxStageMsg.strokeText('NOW!', 0, 50);

        ctxStageMsg.fillText(`ESCAPE`, 0, 0);
        ctxStageMsg.fillText('NOW!', 0, 50);
    }

    function prerenderScore() {
        ctxScore.clearRect(0, 0, 150, 100);

        ctxScore.strokeStyle = '#ce36ff';
        ctxScore.fillStyle = '#ce36ff';
        ctxScore.lineWidth = 2;
        if (settings.isHq) {
            ctxScore.shadowBlur = 10;
            ctxScore.shadowColor = '#ce36ff';
        }
        ctxScore.lineWidth = 1;
        ctxScore.font = '50px monospace';
        ctxScore.textBaseline = 'top';
        ctxScore.textAlign = 'left';

        const score = getCurrentScore();

        ctxScore.strokeText(`LOOT`, 0, 0);
        ctxScore.strokeText(score, 0, 50);

        ctxScore.fillText(`LOOT`, 0, 0);
        ctxScore.fillText(score, 0, 50);
    }

    function getCurrentScore() {
        return gameState.scoreList.reduce((sum, item) => {
            return sum + item.points;
        }, 0);
    }


    function renderStage() {
        ctxStage.save();
        const gridCellSize = 24;

        ctxStage.fillStyle = '#001021';
        ctxStage.fillRect(0, 0, SEC_AREA.width, SEC_AREA.height);

        ctxStage.lineWidth = 1;
        if (settings.isHq) {
            ctxStage.shadowBlur = 3;
        }
        ctxStage.shadowColor = '#c200b4';

        // visited path
        loop2d(grid.stage, grid.side, grid.side, (point, x, y) => {
            if (point.isObstacle) {
                drawWall(x, y, gridCellSize, '#c200b4', '#620056');
            } else if (point.isVisited) {
                drawWall(x, y, gridCellSize, '#00b8c211', '#00b8c211');
            }
        });

        // path to the end
        loop2d(grid.stage, grid.side, grid.side, (point, x, y) => {
            if (!gameState.mainGoalComplete && x === grid.endPoint.x && y === grid.endPoint.y) {
                drawWall(x, y, gridCellSize, '#f9ff00', '#f9ff00');
            }
            if (point.isRightPath) {
                ctxStage.strokeStyle = '#0cff34';
                ctxStage.strokeRect((x + 0.425) * gridCellSize, (y + 0.425) * gridCellSize, gridCellSize * 0.15, gridCellSize * 0.15)
            }
        });

        // locks
        loop2d(grid.stage, grid.side, grid.side, (point, x, y) => {
            if (point.special) {
                drawWall(x, y, gridCellSize, '#fa000a', '#000');
                ctxStage.drawImage(ctxPadlock.canvas, 80, 20, 80, 80, x * gridCellSize, y * gridCellSize, gridCellSize, gridCellSize);
            }
        });

        // player
        ctxStage.shadowColor = '#0ca8df';
        ctxStage.fillRect((player.x + 0.1) * gridCellSize, (player.y + 0.1) * gridCellSize, gridCellSize * 0.8, gridCellSize * 0.8);
        ctxStage.drawImage(imageSpace, (player.x + 0.1) * gridCellSize, (player.y + 0.1) * gridCellSize, gridCellSize * 0.8, gridCellSize * 0.8);

        // fog of war
        renderDarkness();

        ctxStage.restore();
    }

    function drawWall(x, y, gridCellSize, strokeStyle, fillStyle) {
        ctxStage.fillStyle = fillStyle;
        ctxStage.fillRect(x * gridCellSize, y * gridCellSize, gridCellSize, gridCellSize);
        ctxStage.strokeStyle = strokeStyle;
        ctxStage.strokeRect(x * gridCellSize, y * gridCellSize, gridCellSize, gridCellSize);
    }


    function addToScore(newPoints) {
        gameState.scoreList.push(newPoints);
    }


    function playReignWin() {
        const aCtx = new AudioContext();
        const osc = aCtx.createOscillator();
        const gain = aCtx.createGain();
        osc.connect(gain);
        osc.type = 'square';
        gain.connect(aCtx.destination);
        osc.start(0);
        gain.gain.exponentialRampToValueAtTime(0.00001, aCtx.currentTime + 1.5);
    }

    function playWrongKey() {
        const aCtx = new AudioContext();
        const osc = aCtx.createOscillator();
        const gain = aCtx.createGain();
        osc.connect(gain);
        osc.type = 'square';
        osc.frequency.value = '180';
        gain.connect(aCtx.destination);
        osc.start(0);
        gain.gain.exponentialRampToValueAtTime(0.00001, aCtx.currentTime + 1.5);
    }

    function playOpenLock() {
        const aCtx = new AudioContext();
        const osc = aCtx.createOscillator();
        const gain = aCtx.createGain();
        osc.connect(gain);
        osc.type = 'square';
        osc.frequency.value = '840';
        gain.connect(aCtx.destination);
        osc.start(0);
        gain.gain.exponentialRampToValueAtTime(0.00001, aCtx.currentTime + 2.5);
    }
})();
