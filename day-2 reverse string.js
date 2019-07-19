// --- Directions
// Given a string, return a new string with the reversed
// order of characters

str1 = 'apple' // expected: 'elppa'
str4 = 'apple   ' // expected: '   elppa'
str2 = 'hello' // expected: 'olleh'
str3 = 'Greetings!' // expected: '!sgniteerG'

//////////////////////////// SOLUTION 1 /////////////////////////////

// 1. turn str into arr, apply .reverse, turn back into str
function reverse(str) {
  return str.split('')
  .reverse()
  .join('')
}

// pre-refactored version:
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

//////////////////////////// SOLUTION 2 /////////////////////////////
// 1. create an empty string called "reversed", 2. for each character in the provided string take the character and concoctate it to the start of the reversed

function reverse(str) {
  let reversed = '';

  for (let char of str) { // char is a temporary variable that's redeclared every single time through this loop
    reversed = char + reversed
  }

  return reversed;
}


reverse(str1)
reverse(str2)
reverse(str3)
reverse(str4)
