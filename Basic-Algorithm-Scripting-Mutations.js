// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function mutation(arr) {
  let arr1 = arr[0].toUpperCase().split('')
  let arr2 = arr[1].toUpperCase().split('')
  console.log(arr1)
  console.log(arr2)
  
  console.log(arr2.filter(value => arr1.includes(value)).join('')===arr[1])
  // console.log(arr[0].split(''))
  // console.log(arr[0].split('').includes(...arr[1].split('')))

  return arr2.filter(value => arr1.includes(value)).join('')===arr2.join('');
}

mutation(["hello", "Hello"]);

