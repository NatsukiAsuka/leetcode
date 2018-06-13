/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxIncreaseKeepingSkyline = grid => {
    let mrs = Array(grid.length).fill(0);
    let mcs = Array(grid[0].length).fill(0);
    let sum = 0;
    for (let i in grid) {
        for (let j in grid[i]) {
            mrs[i] = Math.max(mrs[i], grid[i][j]);
            mcs[j] = Math.max(mcs[j], grid[i][j]);
        }
    }
    for (let i in grid) {
        for (let j in grid[i]) {
            sum += Math.min(mrs[i], mcs[j]) - grid[i][j]
        }
    }
    return sum;
};
