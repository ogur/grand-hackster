// http://jrgraphix.net/research/unicode.php


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
console.log(MAIN_AREA, SEC_AREA);

const CONSOLE = {
    top: MAIN_AREA.top + 10,
    left: MAIN_AREA.left + 10,
    right: MAIN_AREA.right - 310,
    bottom: MAIN_AREA.bottom - 350,
    lineCols: 75,
    lineRows: 27,
};
CONSOLE.width = CONSOLE.right - CONSOLE.left;
CONSOLE.height = CONSOLE.bottom - CONSOLE.top;
CONSOLE.bufferLimit = CONSOLE.lineRows * CONSOLE.lineCols;
CONSOLE.gridCellWidth = CONSOLE.width / CONSOLE.lineCols;
CONSOLE.gridCellHeight = CONSOLE.height / CONSOLE.lineRows;

const TRANSMISSION = {
    top: MAIN_AREA.top + 10,
    left: MAIN_AREA.right - 300,
    right: MAIN_AREA.right - 10,
    bottom: MAIN_AREA.bottom - 350,
};
TRANSMISSION.width = TRANSMISSION.right - TRANSMISSION.left;
TRANSMISSION.height = TRANSMISSION.bottom - TRANSMISSION.top;

const HEAT = {
    max: 30,
};

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

const keys = {
    'q': {name: 'q', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 0, group: 0},
    'w': {name: 'w', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 1, group: 0},
    'e': {name: 'e', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 2, group: 0},
    'r': {name: 'r', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 3, group: 1},
    't': {name: 't', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 4, group: 1},
    'y': {name: 'y', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 5, group: 1},
    'u': {name: 'u', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 6, group: 1},
    'i': {name: 'i', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 7, group: 2},
    'o': {name: 'o', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 8, group: 2},
    'p': {name: 'p', heat: 0, isDestroyed: false, isPushed: false, row: 0, pos: 9, group: 2},
    'a': {name: 'a', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 0, group: 0},
    's': {name: 's', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 1, group: 0},
    'd': {name: 'd', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 2, group: 0},
    'f': {name: 'f', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 3, group: 1},
    'g': {name: 'g', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 4, group: 1},
    'h': {name: 'h', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 5, group: 1},
    'j': {name: 'j', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 6, group: 2},
    'k': {name: 'k', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 7, group: 2},
    'l': {name: 'l', heat: 0, isDestroyed: false, isPushed: false, row: 1, pos: 8, group: 2},
    'z': {name: 'z', heat: 0, isDestroyed: false, isPushed: false, row: 2, pos: 0, group: 0},
    'x': {name: 'x', heat: 0, isDestroyed: false, isPushed: false, row: 2, pos: 1, group: 0},
    'c': {name: 'c', heat: 0, isDestroyed: false, isPushed: false, row: 2, pos: 2, group: 0},
    'v': {name: 'v', heat: 0, isDestroyed: false, isPushed: false, row: 2, pos: 3, group: 1},
    'b': {name: 'b', heat: 0, isDestroyed: false, isPushed: false, row: 2, pos: 4, group: 1},
    'n': {name: 'n', heat: 0, isDestroyed: false, isPushed: false, row: 2, pos: 5, group: 2},
    'm': {name: 'm', heat: 0, isDestroyed: false, isPushed: false, row: 2, pos: 6, group: 2},
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
            'ᛧ',
            'ᛨ',
            'ᛩ',
            'ᛪ',
            '᛫',
            '᛬',
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
            '𐎆',
            '𐎇',
            '𐎈',
            '𐎉',
            '𐎊',
            '𐎋',
            '𐎌',
            '𐎍',
            '𐎎',
            '𐎏',
            '𐎐',
            '𐎑',
            '𐎒',
            '𐎓',
            '𐎔',
            '𐎕',
            '𐎖',
            '𐎗',
            '𐎘',
            '𐎙',
            '𐎚',
            '𐎛',
            '𐎜',
            '𐎝',
            '𐎟',
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
        ]
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
            '⣸'
        ]
    },
    'KEERG': {
        name: 'Keerg',
        chars: [
            'Ͱ',
            'ʹ',
            'ͼ',
            '΄',
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
            'ϼ'
        ]
    },
    'ILLIRY': {
        name: 'Illiry',
        chars: [
            'Ѐ',
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
            'Ӹ'
        ]
    }
};

document.addEventListener('keydown', (event) => {
    if (event.repeat) {
        return;
    }
    const keyName = event.key.toLowerCase();
    const key = keys[keyName];

    if (key && !key.isDestroyed) {
        key.isPushed = true;

        key.heat = Math.min(key.heat + 1, HEAT.max);
        if (key.heat === HEAT.max) {
            key.isDestroyed = true;
        }

        // for (let timesIdx = 0; timesIdx < key.heat; timesIdx++) {
        //     writeConsole();
        // }
    }
});

document.addEventListener('keyup', (event) => {
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

function getCodeChunk(race) {
    // const chars = [
    //     'abstract',
    //     'arguments',
    //     'await*',
    //     'boolean',
    //     'break',
    //     'byte',
    //     'case',
    //     'catch',
    //     'char',
    //     'class*',
    //     'const',
    //     'continue',
    //     'debugger',
    //     'default',
    //     'delete',
    //     'do',
    //     'double',
    //     'else',
    //     'enum*',
    //     'eval',
    //     'export*',
    //     'extends*',
    //     'false',
    //     'final',
    //     'finally',
    //     'float',
    //     'for',
    //     'function',
    //     'goto',
    //     'if',
    //     'implements',
    //     'import*',
    //     'in',
    //     'instanceof',
    //     'int',
    //     'interface',
    //     'let*',
    //     'long',
    //     'native',
    //     'new',
    //     'null',
    //     'package',
    //     'private',
    //     'protected',
    //     'public',
    //     'return',
    //     'short',
    //     'static',
    //     'super*',
    //     'switch',
    //     'synchronized',
    //     'this',
    //     'throw',
    //     'throws',
    //     'transient',
    //     'true',
    //     'try',
    //     'typeof',
    //     'var',
    //     'void',
    //     'volatile',
    //     'while',
    //     'with',
    //     'yield',
    // ];
    return race.chars[fl(rnd() * race.chars.length)];
}

function writeConsole(area, race) {
    groupIdx = fl(rnd() * 3);

    const selectedAreaRow = fl(area / 3);
    const selectedAreaCol = area % 3;

    const minRow = selectedAreaRow * CONSOLE.lineRows / 3;
    const maxRow = minRow + CONSOLE.lineRows / 3;
    const minCol = selectedAreaCol * CONSOLE.lineCols / 3;
    const maxCol = minCol + CONSOLE.lineCols / 3;

    const selectedRow = randBetween(minRow, maxRow);
    const selectedCol = randBetween(minCol, maxCol);

    const selectedCellIdx = selectedRow * CONSOLE.lineCols + selectedCol;
    consoleArea[selectedCellIdx] = getCodeChunk(race);
}

let lastTimestampHeat = 0;
let lastTimestampEnemy = 0;

function draw(timestamp) {
    ctx.fillStyle = '#003016';
    ctx.fillRect(MAIN_AREA.left, MAIN_AREA.top, MAIN_AREA.width, MAIN_AREA.height);

    ctx.fillStyle = '#0f0';
    ctx.fillRect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);

    for (const key of Object.values(keys)) {
        const keyX = MAIN_AREA.left + KEYBOARD.left + key.pos * 100 + key.row * 50;
        const keyY = MAIN_AREA.top + KEYBOARD.top + key.row * 100;

        ctx.fillStyle = key.isPushed ? '#090' : getHeatStyle(key.heat);
        ctx.fillRect(keyX,
            keyY,
            100, 100);

        ctx.font = '70px monospace';
        ctx.fillStyle = key.isPushed ? '#fff' : '#000';
        ctx.fillText(key.name.toUpperCase(),
            keyX + 35,
            keyY + 75,
        );
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(CONSOLE.left, CONSOLE.top, CONSOLE.width, CONSOLE.height);

    ctx.strokeStyle = '#fff1';
    for (let gridX = 0; gridX < CONSOLE.lineCols; gridX++) {
        ctx.strokeRect(CONSOLE.left + gridX * CONSOLE.gridCellWidth, CONSOLE.top, 1, CONSOLE.height);
    }
    for (let gridY = 0; gridY < CONSOLE.lineRows; gridY++) {
        ctx.strokeRect(CONSOLE.left, CONSOLE.top + gridY * CONSOLE.gridCellHeight, CONSOLE.width, 1);
    }
    ctx.strokeStyle = '#f993';
    ctx.strokeRect(CONSOLE.left + 25 * CONSOLE.gridCellWidth, CONSOLE.top, 1, CONSOLE.height);
    ctx.strokeRect(CONSOLE.left + 50 * CONSOLE.gridCellWidth, CONSOLE.top, 1, CONSOLE.height);
    ctx.strokeRect(CONSOLE.left, CONSOLE.top + 9 * CONSOLE.gridCellHeight, CONSOLE.width, 1);
    ctx.strokeRect(CONSOLE.left, CONSOLE.top + 18 * CONSOLE.gridCellHeight, CONSOLE.width, 1);

    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#00ff00';

    for (const cellIdx in consoleArea) {
        // console.log(`cell`, cell);
        const cell = consoleArea[cellIdx];
        const cellCol = cellIdx % CONSOLE.lineCols;
        const cellRow = fl(cellIdx / CONSOLE.lineCols);

        ctx.fillText(cell,
            CONSOLE.left + cellCol * CONSOLE.gridCellWidth + 0.5 * CONSOLE.gridCellWidth,
            CONSOLE.top + 10 + cellRow * CONSOLE.gridCellHeight + 2,
        );
    }

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

        const goalRaceIdx = Object.keys(currentEnemyPosition).filter((x, i) => !!currentEnemyPosition[i]);
        const selectedGoalIdx = randOf(goalRaceIdx);

        writeConsole(selectedGoalIdx, RACES[currentEnemyPosition[selectedGoalIdx]]);
    }
}

function loop(timestamp) {
    main(timestamp);
    draw(timestamp);

    requestAnimationFrame(loop);
}

const currentEnemyPosition = generateEnemyPosition(4);
const currentGoal = generateGoal(4);

console.log(`currentEnemyPosition`, currentEnemyPosition);
console.log(`
        ${currentGoal.slice(0, 3)}
        ${currentGoal.slice(3, 6)}
        ${currentGoal.slice(6, 9)}
    `.replace(/ /mg, '').replace(/,/mg, ''));

requestAnimationFrame(loop);


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

