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
let destructuringExample = document.getElementById("destructuringExample").innerHTML;
let secondButton = document.getElementById("secondButton");

secondButton.addEventListener('click', function destructuring() {
    document.getElementById('destructuringExample').innerHTML = destructuringReverse(destructuringExample).join("");
})



// 3. Given a string, reverse the order of chars recursively.

function recursiveReverse(str) {
    if (str === "") {
        return "";
    } else {
        let subStr = str.substring(1)
        return reverseStr(subStr) + str.charAt[0]
    }
}

// ============================ TEST =============================
let recursiveExample = document.getElementById("recursiveExample").innerHTML;
let recursiveButton = document.getElementById('recursiveButton');

recursiveButton.addEventListener('click', function recursive() {
    document.getElementById('recursiveExample').innerHTML = recursiveReverse(recursiveExample)
})



// 5. Build a function isPalindrome which, given a string, tell us if is palindrome or not.





