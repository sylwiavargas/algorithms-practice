// FIND THE LONGEST WORD. Return the string and its size

str ="The quick brown fox jumped over the lazy dog"

function findLongestWordLength(str) {
  let longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return `Here is the longest word: ${longestWord[0]}. It's ${longestWord[0].length} characters long.`
}

findLongestWordLength(str)


// CHECK WHETHER SECOND WORD OF THE ARRAY INCLUDES SAME LATTERS AS FIRST

arr = ["hello", "lEh"]
arr2 = ["hello", "hex"]

//SOLUTION A
function mutationA(arr){
  let newSecondWordArray = arr[1].toLowerCase().split('')
  let newFirstWordArray = arr[0].toLowerCase().split('')
  let final = newSecondWordArray.map(letter => newFirstWordArray.includes(letter))

  return final.includes(false) ? false : true
}


mutationA(arr)
mutationA(arr2)



//SOLUTION B
function mutationB(arr) {
 let word1 = arr[0].toLowerCase().split("")
 let word2 = arr[1].toLowerCase().split("")

for(let i=0; i<word2.length;i++){
 for(let j=0; j<word1.length;j++){
  console.log(word2[i], word1[j])
  if(word2[i] == word1[j]){
    break;
  } else if(word2[i] !== word1[j] && j == word1.length - 1 ){
    return false
  }
 }
}
return true
}

mutationB(arr);
