function converterToRoman(number) {
    if (number <= 0) return false;
    const arr = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50,
        XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };

    let romanNumb = '';
    for (const i of Object.keys(arr)) {
        const keyValue = Math.floor(number/arr[i]);
        number = number - keyValue * arr[i];
        romanNumb  = romanNumb + i.repeat(keyValue);
    }
    return romanNumb;
}

console.log(converterToRoman(56));