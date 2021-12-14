// 1. Given a string, make a function that reverses the char order
let textReverse = "";
let firstExample = document.getElementById("firstExample").innerHTML;
let firstButton = document.getElementById("firstButton");

function reverseStr(str) {
    for (letter of str) {
        textReverse = letter + textReverse;
    }
    return textReverse;
}

// TEST
firstButton.addEventListener('click', function reversingExample() {
    document.getElementById('firstExample').innerHTML = reverseStr(firstExample);        
})



// 2. Given a string, make a function that reverses the char order, using destructuring



// 3. Given a string, reverse the order of chars recursively.



// 5. Build a function isPalindrome which, given a string, tell us if is palindrome or not.



