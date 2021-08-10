// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // alt Sol
  return str.split('').every((char, i) => {
    return char === str[str.length - i -1]
  })


  // sol-1
  // const rev = str.split('').reverse().join('');
  //
  // return rev == str;
}

module.exports = palindrome;
