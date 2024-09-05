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

// c.

for(let i = 0; i <= sum; i++){
    console.log(i);
}

if(sum % 2 == 0){
    console.log(sum + " is even.");
}else{
    console.log(sum + " is Odd");
}

