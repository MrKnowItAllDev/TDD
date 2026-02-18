
export function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function reverseStr(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a === 0 || b === 0 ? undefined : a / b,
    subtract: (a, b) => a - b
};

export function caesarCipher(str, rot) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return str.split('').map((char, i) => {
        let ch = translate(str, alpha, rot)[i];
        return isUpperCase(char) ? ch.toUpperCase() : ch;
    }).join('');
}

export function isUpperCase(char) {
    return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
}

export function isChar(char) {
    return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
        (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
}

export function translate(str, alpha, rot) {
    let index = str.split('').map((char) => isChar(char) ?
            (alpha.indexOf(char.toLowerCase()) + rot) % 26 : char);

    return index.map((i) => (typeof i === "number") ? alpha[i] : i).join('');
}

export function analyzeArray(arr) {
    let average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return { average, min, max, length: arr.length };
}

console.log(analyzeArray([1,8,3,4,2,6]));