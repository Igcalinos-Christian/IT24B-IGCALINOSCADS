// a.
let num1 = 5;
let num2 = 17;

let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let qou = num1 / num2;

console.log(sum +"\n"+ diff +"\n"+ prod +"\n"+ qou);

// b.
if(num1>num2){
    console.log(num2 + " is greater than: " + num1);
}else if(num1<num2){
    console.log(num1 + " is greater than: " + num2);
}

// c. 
switch (sum){
    case 5:
        console.log("Monday");
        break;
    case 22:
        console.log("Tuesday");
        break;
    case 43:
        console.log("Wednesday");
        break;
    case 54:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid idk...");
}

// d.
for(let i = 0; i <= sum; i++){
    console.log(i);
}

// e.
if(sum % 2 == 0){
    console.log(sum + " is even.");
}else{
    console.log(sum + " is Odd");
}

if(sum % 2 == 1){
    console.log(sum + " is a prime number.");
}else{
    console.log(sum + " is not a prime number");
}

function isPalindrome(word) {

    const cleanedWord = word.toLowerCase();

    const reversedWord = cleanedWord.split('').reverse().join('');
    
    return cleanedWord === reversedWord;
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
