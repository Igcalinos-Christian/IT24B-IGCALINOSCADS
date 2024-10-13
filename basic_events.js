//Event Function 1
function mirror() {
    var textbox = document.getElementById('input');
    var displayText = document.getElementById('output');
    displayText.textContent = textbox.value;
}

function showAlert() {
    var textbox = document.getElementById('input');
    alert("Hello " + textbox.value);
}