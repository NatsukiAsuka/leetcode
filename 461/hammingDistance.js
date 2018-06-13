/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = (x, y) => {
  let n = x ^ y;
  let count = 0;
  while (n != 0) {
    count++;
    n = (n - 1) & n
  }
  return count;
};
