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

const TRANSMISSION = {
    top: MAIN_AREA.top + 10,
    left: MAIN_AREA.right - 300,
    right: MAIN_AREA.right - 10,
    bottom: MAIN_AREA.bottom - 350,
};
TRANSMISSION.width = TRANSMISSION.right - TRANSMISSION.left;
TRANSMISSION.height = TRANSMISSION.bottom - TRANSMISSION.top;


/**
 * @type {CanvasRenderingContext2D | WebGLRenderingContext}
 */
const ctx = document.querySelector('#game').getContext('2d');

const keys = {
    'q': {name: 'q', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 0},
    'w': {name: 'w', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 1},
    'e': {name: 'e', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 2},
    'r': {name: 'r', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 3},
    't': {name: 't', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 4},
    'y': {name: 'y', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 5},
    'u': {name: 'u', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 6},
    'i': {name: 'i', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 7},
    'o': {name: 'o', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 8},
    'p': {name: 'p', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 0, pos: 9},
    'a': {name: 'a', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 0},
    's': {name: 's', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 1},
    'd': {name: 'd', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 2},
    'f': {name: 'f', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 3},
    'g': {name: 'g', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 4},
    'h': {name: 'h', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 5},
    'j': {name: 'j', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 6},
    'k': {name: 'k', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 7},
    'l': {name: 'l', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 1, pos: 8},
    'z': {name: 'z', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 2, pos: 0},
    'x': {name: 'x', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 2, pos: 1},
    'c': {name: 'c', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 2, pos: 2},
    'v': {name: 'v', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 2, pos: 3},
    'b': {name: 'b', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 2, pos: 4},
    'n': {name: 'n', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 2, pos: 5},
    'm': {name: 'm', heat: 0, hits: 0, isDestroyed: false, isPushed: false, row: 2, pos: 6},
};

document.addEventListener('keydown', (event) => {
    if (event.repeat) {
        return;
    }
    const keyName = event.key.toLowerCase();
    const key = keys[keyName];

    if (key && !key.isDestroyed) {
        key.isPushed = true;
        key.hits += 1;

        for(let timesIdx = 0; timesIdx < (4 + key.heat * 3); timesIdx++) {
            writeConsole();
        }

        const heatMul = 7;

        if (key.hits < heatMul) {
            key.heat = 0;
        } else if (key.hits < heatMul * 2) {
            key.heat = 1;
        } else if (key.hits < heatMul * 3) {
            key.heat = 2;
        } else if (key.hits < heatMul * 4) {
            key.heat = 3;
        } else {
            key.heat = 4;
            key.isDestroyed = true;
        }
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
    switch (heat) {
        case 0:
            return '#fff';
        case 1:
            return '#ffae00';
        case 2:
            return '#ff6700';
        case 3:
            return '#ff0000';
        case 4:
            return '#000';
    }
}

const consoleLines = [];

function getCodeChunk() {
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
    const chars = [
        '𐠀',
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
        '𐠿',

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

        '𐐀',
        '𐐁',
        '𐐂',
        '𐐃',
        '𐐄',
        '𐐅',
        '𐐆',
        '𐐇',
        '𐐈',
        '𐐉',
        '𐐊',
        '𐐋',
        '𐐌',
        '𐐍',
        '𐐎',
        '𐐏',
        '𐐐',
        '𐐑',
        '𐐒',
        '𐐓',
        '𐐔',
        '𐐕',
        '𐐖',
        '𐐗',
        '𐐘',
        '𐐙',
        '𐐚',
        '𐐛',
        '𐐜',
        '𐐝',
        '𐐞',
        '𐐟',
        '𐐠',
        '𐐡',
        '𐐢',
        '𐐣',
        '𐐤',
        '𐐥',
        '𐐦',
        '𐐧',
        '𐐨',
        '𐐩',
        '𐐪',
        '𐐫',
        '𐐬',
        '𐐭',
        '𐐮',
        '𐐯',
        '𐐰',
        '𐐱',
        '𐐲',
        '𐐳',
        '𐐴',
        '𐐵',
        '𐐶',
        '𐐷',
        '𐐸',
        '𐐹',
        '𐐺',
        '𐐻',
        '𐐼',
        '𐐽',
        '𐐾',
        '𐐿',
        '𐑀',
        '𐑁',
        '𐑂',
        '𐑃',
        '𐑄',
        '𐑅',
        '𐑆',
        '𐑇',
        '𐑈',
        '𐑉',
        '𐑊',
        '𐑋',
        '𐑌',
        '𐑍',
        '𐑎',
        '𐑏',
    ];

    return chars[Math.floor(Math.random() * chars.length)];
}

function writeConsole() {
    if (consoleLines.length === 0) {
        consoleLines.push([]);
    }

    const lastRowIdx = consoleLines.length - 1;
    let lastRow = consoleLines[lastRowIdx].slice();
    lastRow.push(getCodeChunk());

    if (Math.random() > 0.8) {
        lastRow.push(' ');
    }

    if (lastRow.length > CONSOLE.lineCols * 0.7 && Math.random() > 0.8) {
        lastRow.push('\n');
    }

    if (lastRow.length > CONSOLE.lineCols || lastRow.includes('\n')) {
        consoleLines[lastRowIdx] = lastRow.slice(0, CONSOLE.lineCols);
        consoleLines.push(lastRow.slice(CONSOLE.lineCols));
    } else {
        consoleLines[lastRowIdx] = lastRow;
    }

    if (consoleLines.length > CONSOLE.lineRows) {
        consoleLines.shift();
    }
}

function draw() {
    ctx.fillStyle = '#f00';
    ctx.fillRect(MAIN_AREA.left, MAIN_AREA.top, MAIN_AREA.width, MAIN_AREA.height);

    ctx.fillStyle = '#0f0';
    ctx.fillRect(SEC_AREA.left, SEC_AREA.top, SEC_AREA.width, SEC_AREA.height);

    for (const key of Object.values(keys)) {
        const keyX = MAIN_AREA.left + KEYBOARD.left + key.pos * 100 + key.row * 50;
        const keyY = MAIN_AREA.top + KEYBOARD.top + key.row * 100;

        ctx.fillStyle = getHeatStyle(key.heat);
        ctx.fillRect(keyX,
            keyY,
            100, 100);

        ctx.strokeStyle = key.isPushed ? '#000' : '#fff';
        ctx.strokeRect(keyX,
            keyY,
            100, 100);


        ctx.font = '70px monospace';
        ctx.fillStyle = '#000';
        ctx.fillText(key.name.toUpperCase(),
            keyX + 35,
            keyY + 75,
        );
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(CONSOLE.left, CONSOLE.top, CONSOLE.width, CONSOLE.height);

    ctx.fillStyle = '#00F';
    ctx.fillRect(TRANSMISSION.left, TRANSMISSION.top, TRANSMISSION.width, TRANSMISSION.height);

    ctx.font = '15px monospace';
    ctx.fillStyle = '#00ff00';


    for (const lineIdx in consoleLines) {
        const line = consoleLines[lineIdx];
        ctx.fillText(line.join(''),
            CONSOLE.left,
            CONSOLE.top + 10 + lineIdx * 15,
        );
    }


    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

