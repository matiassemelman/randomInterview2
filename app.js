// 1. Given a string, make a function that reverses the char order
let textReverse;

function reverseStr(str) {
   for (letter of str) {
    textReverse = letter + textReverse;
   }
   return textReverse;
}

// 2. Given a string, make a function that reverses the char order, using destructuring

function reverseStrWithDestructuring(str) {
    return [...str].reverse().join('');
}

// 3. Given a string, reverse the order of chars recursively.

function reverseStrWithRecursion(str) {
    if (str === "") {
        return ""
    } else {
        let subStr = str.subStr(1)
      return  reverse(subStr) + str.charAt(0)  
    }}




