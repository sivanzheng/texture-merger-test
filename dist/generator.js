"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = exports.randomColor = exports.randomInt = void 0;
const randomInt = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
};
exports.randomInt = randomInt;
const randomColor = () => {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
};
exports.randomColor = randomColor;
const generator = (width, height, color) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        ctx.fill();
    }
    return { canvas, info: { width, height, color } };
};
exports.generator = generator;
// const saveBlock = (block: Block) => {
//     const { width, height, color } = block.info
//     const downloadLink = document.createElement('a');
//     downloadLink.download = `${width}_${height}_${color}_${(+new Date()).toString()}.png`;
//     downloadLink.href = block.canvas.toDataURL('image/png')
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
// }
// for (let i = 0; i < 15; i++) {
//     const width = randomInt(10, 50);
//     const height = randomInt(10, 50);
//     const color = randomColor();
//     console.log(width, height, color)
//     const block = generator(width, height, color)
//     saveBlock(block)
// }
