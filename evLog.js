document.addEventListener("DOMContentLoaded", function (){
    let sum = 0;
var output = document.querySelector('#output');
    window.logger = function(){
        sum++;
        return output.innerHTML = sum;
    }
});