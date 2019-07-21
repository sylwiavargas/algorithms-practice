// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

str = "abba"
str2 = "abcdefg"

///////////////////////////// SOLUTION 1 ////////////////////////////
// compare str with its reversed version -> reverse helper
function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  return str === reversed
}

///////////////////////////// SOLUTION 2 ////////////////////////////
// -> every() helper
// 1. create an array, 2. compare the first and last elements and then second and -1, etc.
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1] //we are doing -i to make sure it increments throughout every step and -1 because js is 0-indexed
  })
}


module.exports = palindrome;
