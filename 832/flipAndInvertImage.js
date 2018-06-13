/**
 * @param {number[][]} A
 * @return {number[][]}
 */
let flipAndInvertImage = A => A.map(line => line.map(n => n ^ 1).reverse()) 
