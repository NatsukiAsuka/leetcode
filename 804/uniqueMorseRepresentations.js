/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = words => new Set(words.map(word => word.split('').map(c =>['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'][c.charCodeAt(0) - 97]).join(''))).size