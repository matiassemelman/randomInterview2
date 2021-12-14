// 1. Given a string, make a function that reverses the char order
let textReverse;

function reverseStr(str) {
   for (letter of str) {
    textReverse = letter + textReverse;
   }
   return textReverse;
}

