export default function convertToRoman(n) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let romanStr = '';
    let num = n;
    for (const key in roman) {
        const sub = Math.floor(num / roman[key])
        if (sub === 0) continue;
        num -= sub * roman[key]
        romanStr += key.repeat(sub)
    }
    return romanStr;
}