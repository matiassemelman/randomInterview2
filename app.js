
// 1. Given a string, make a function that reverses the char order
function reverseStr(str) {
    let textReverse = "";

    for (letter of str) {
        textReverse = letter + textReverse;
    }
    return textReverse;
}

// ============================ TEST =============================
let firstButton = document.getElementById("firstButton");
let firstExample = document.getElementById("firstExample").innerHTML;


firstButton.addEventListener('click', function reversingExample() {
    document.getElementById('firstExample').innerHTML = reverseStr(firstExample);        
})



// 2. Given a string, make a function that reverses the char order, using destructuring


function destructuringReverse(str) {
    let arrayOfStr = [...str]
    return arrayOfStr.reverse();
    }
// ============================ TEST =============================
let secondExample = document.getElementById("secondExample").innerHTML;
let secondButton = document.getElementById("secondButton");

secondButton.addEventListener('click', function destructuringReverse() {
    document.getElementById('secondExample').innerHTML = reverseStr(secondExample);
})



// 3. Given a string, reverse the order of chars recursively.



// 5. Build a function isPalindrome which, given a string, tell us if is palindrome or not.



