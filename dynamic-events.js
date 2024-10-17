// gets I/O from index.html
var output = document.getElementById('output');
var input = document.getElementById('input');

// stores json array
let listArray = [];

// fetches json file
fetch("dynamic-events.json")
    .then(res => res.json())
    .then(values => {
        listArray = values;
        console.log(listArray);
    })

// stores values for conversion
let inputVal;
let inputToLowerCase;
let appletNameToLowerCase;

// stores values after finalized conversion
let processedInput;
let processedAppletName;

// for button
let appletLinkButton;
let buttonParameters = `class="btn btn-primary" id="appletButton" style="padding-inline: .5rem; margin-top: 0.5rem; margin-bottom: .5rem;"`

// for input listening
input.addEventListener('input', (event) => {
    let currentInputLenght = 0;
    let inputLength = input.value.length;


    if(inputLength > currentInputLenght){
        currentInputLenght += inputLength;
        console.log(currentInputLenght);
    
    }
    else{
        currentInputLenght -= inputLength;
        console.log(currentInputLenght);
    }
    

    //takes "value" of "input" and converts it into lower case then removes spaces
    inputVal = input.value;
    inputToLowerCase = inputVal.toLowerCase();
    processedInput = inputToLowerCase.replace(/\s+/g,'');
    // to see input on console
    console.log(processedInput);

    // checks input if it is empty or not, if former is true, it clears the "output" div on index.html
    if (processedInput === '') {
        output.innerHTML = '';
        return;
    }


    let isRepeating = false;
    let isRepeatingCounter = 0;

    // to iterate through the array
    listArray.forEach(value => {
        // takes value of each element in "listArray" to process, converting to lowercase and removes spaces
        appletNameToLowerCase = value.applet_name.toLowerCase();
        processedAppletName = appletNameToLowerCase.replace(/\s+/g,'');

        
        const antiRepeat = new Set();

        // compares input to "processedAppletName" and catches matching results and sends them to the "output" div at index.html
        if(processedAppletName.includes(processedInput)){
            if(!antiRepeat.has(value.applet_name)){
                antiRepeat.add(value.applet_name);
                appletLinkButton = "<a href=" + value.applet_link + " " + buttonParameters + ">" + value.applet_name + "</a><br>";
                output.innerHTML += appletLinkButton;
                console.log("matching applet: " + value.applet_name);
                return;
            }
            else{
                output.innerHTML = '';
            }
        }
    })
})


/*
future plans-to improve and fix the bugs on my searching script:

[here's the rough plan for it]
const antiRepeat = new Set();
    const nameContainer = new Set();
    const linkContainer = new Set();
    processedInput = input.value.toLowerCase().replace(/\s+/g,'');

    if(antiRepeat.size == 0){
        listArray.forEach(value => {
            processedAppletName = value.applet_name.toLowerCase().replace(/\s+/g,'');
            antiRepeat.add(processedAppletName);
            nameContainer.add(value.applet_name);
            linkContainer.add(value.applet_link);  
        })
    }
    else if(antiRepeat.size !== 0){

    }

    console.log(antiRepeat);

for future update:

// stores updated output
var updatedOutput = document.getElementById('output');

if(){

}
*/