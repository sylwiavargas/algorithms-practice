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

function palindrome(str) {
}


module.exports = palindrome;
