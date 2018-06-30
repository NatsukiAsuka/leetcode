/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = str => {
    let i = 0;
    let sign = '+';
    while (str[i] == ' ' && i < str.length) {
        i++;
    }
    str = str.slice(i);
    if (str.startsWith('+')) {
        str = str.slice(1);
    } else if (str.startsWith('-')) {
        str = str.slice(1);
        sign = '-';
    }
    if (!/^\d/.test(str)) {
        return 0;
    }
    i = 0;
    while (i < str.length && /^\d/.test(str[i])) {
        i++;
    };
    str = str.substr(0, i);
    let num = parseInt(sign + str);
    if (num > 2147483647) {
        return 2147483647;
    }
    if (num < -2147483648) {
        return -2147483648;
    }
    return num;
};