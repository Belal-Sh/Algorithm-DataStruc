// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // sol-1
    let chars = {};
    let max = 0;
    for (let char of str) {
        (!chars[char])?chars[char] =1 : chars[char]++;
    }
    for (let char of str) {
    (chars[char]>max) ? max = chars[char]:"";
    }
   return Object.keys(chars).find((key) => chars[key]===max)
}

module.exports = maxChar;
