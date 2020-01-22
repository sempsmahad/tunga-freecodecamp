// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function findLongestWordLength(str) {
  return str.split(' ').sort((a,b)=>b.length-a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");