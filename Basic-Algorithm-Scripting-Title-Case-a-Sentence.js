// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function titleCase(str) {
// let fakearr = [];
let stringArr = str.split(' ');
// console.log(stringArr.map(e=>e[0].toUpperCase() + e.substr(1).toLowerCase()).join(' '))
 return stringArr.map(e=>e[0].toUpperCase() + e.substr(1).toLowerCase()).join(' ');
}
titleCase("sHoRt AnD sToUt");