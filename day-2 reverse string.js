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

// function reverse(str) {
//     // let arr = str.split("")
//     let done = '';
//     // console.log(done)

//     for (let char of str){
//         // console.log(char)
//         done = char + done
//         // console.log(done)
//     }

//     return done
// }


//////////////////////////// SOLUTION 3 /////////////////////////////
// 1. split into an array,
// 2. use reduce helper function - reduce is used to take all the different values within array and condense them all down to one singular value; it takes two arguments: arrow function and initial value - in our case, it is an empty string; whenever reduce runs, it will take the starting argument, it will pass it into the arrow function the return of which will be the argument of every successive run; the arrow function has two arguments -> the placeholder reversed and the current character

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed
//   }, '')
// }

// ES6 + refactoring:
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}



reverse(str1)
reverse(str2)
reverse(str3)
reverse(str4)
