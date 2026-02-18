import { test, expect } from "@jest/globals";
import {
    capitalize, reverseStr, calculator,
    caesarCipher, isChar, isUpperCase, translate, analyzeArray
} from "./tests";

test('capitalize', () => {
    let str = 'hello';
    expect(capitalize(str)).toMatch('Hello');
});

test('Not capitalize entire word', () => {
    let lowerCase = 'lowercase';
    expect(capitalize(lowerCase)).not.toMatch(lowerCase.toUpperCase());
});

test('Reversed string', () => {
    let str = 'reverse';
    expect(reverseStr(str)).toMatch('esrever');
});

test('Calculator operations', () => {
    let a = 5, b = 4;
    expect(calculator.add(a, b)).toBe(9);
    expect(calculator.multiply(a, b)).toBe(20);
    expect(calculator.divide(a, b)).toBe(1.25);
    expect(calculator.subtract(a, b)).toBe(1);
});

test('Calculator edge cases', () => {
    expect((calculator.add(4, 3))).not.toBe("4" + "5");
    expect(calculator.divide(5, 0)).toBeUndefined();
});

test('Ceasar cipher', () => {
    expect(caesarCipher('abc', 3)).toMatch('def');
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
    expect(caesarCipher('xyz', 3)).toMatch('abc');
    expect(caesarCipher("HeLLo", -3)).toMatch("EbIIl");
    expect(caesarCipher("abc", 6)).toBe("ghi");
    expect(caesarCipher("def", -3)).toBe("abc");
});

test('Checks uppercase', () => {
    expect(isUpperCase('A')).toBe(true);
    expect(isUpperCase('a')).toBe(false);
});

test('Checks alphabetic', () => {
    expect(isChar('a')).toBe(true);
    expect(isChar('@')).not.toBe(true);
    expect(isChar('A')).toBe(true);
    expect(isChar('z')).toBe(true);
});

test('Array analysis', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});