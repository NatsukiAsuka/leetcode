/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
let numJewelsInStones = (J, S) => S.split('').filter(c => J.split('').indexOf(c) !== -1).length;
