var output = document.getElementById('output');
var input = document.getElementById('input');

let listArray = [];

fetch("dynamic-events.json")
    .then(res => res.json())
    .then(values => {
        listArray = values;
        console.log(listArray);
    })

let inputVal;
let inputToLowerCase;
let appletNameToLowerCase;

let processedInput;
let processedAppletName;

let appletLinkButton;
let buttonParameters = `class="btn btn-primary;" id="appletButton;"`

input.addEventListener('input', () => {
    inputVal = input.value;
    inputToLowerCase = inputVal.toLowerCase();

    processedInput = inputToLowerCase.replace(/\s+/g,'');
    console.log(processedInput);

    listArray.forEach(value => {
        appletNameToLowerCase = value.applet_name.toLowerCase();
        processedAppletName = appletNameToLowerCase.replace(/\s+/g,'');
        // console.log(processedAppletName);

        if(processedAppletName.includes(processedInput)){
            appletLinkButton = "<a href=" + value.applet_link + " " + buttonParameters + ">" + value.applet_name + "</a>";
            output.innerHTML = appletLinkButton;
            console.log("matching applet: " + value.applet_name);
            return;
        }
    })    
})