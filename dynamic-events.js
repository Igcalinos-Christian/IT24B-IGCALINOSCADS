const input = document.getElementById('input');
const output = document.getElementById('output');
const cardTemplate = document.getElementById('cardTemplate');

let appletName = [];
let appletLink = [];

let jsonContainer = [];

let divContainer;
let header;
let link;
let appletDescription;

let processedAppletName;
let inputVal;
let processedInputVal;

let appName;

input.addEventListener('input', e => {
    inputVal = e.target.value.toLowerCase().replace(/\s+/g,'');
    console.log(inputVal);

    jsonContainer.forEach(name => {
        console.log(name.element);
        if (name.element) {
            appName = name.applet_name;
            processedAppletName = appName.toLowerCase().replace(/\s+/g, '');
    
            const isVisible = processedAppletName.includes(inputVal);
            name.element.classList.toggle("hide", !isVisible);
        } else {
            console.warn('Element not found for applet:', name.applet_name);
        }
    })
})

fetch("dynamic-events.json")
    .then(res => res.json())
    .then(values => {
        jsonContainer = values.map(value => {
            const appletName = value.applet_name;
            const appletLink = value.applet_link;
            const appletDescription = value.applet_description;

            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `<h2>${appletName}</h2><p>${appletDescription}</p><a class="btn" href="${appletLink}">${appletName}</a>`;
            output.appendChild(cardElement);

            return { element: cardElement, applet_name: appletName };
        });
        console.log(jsonContainer);
    });

// a lot of redudancy elements were made because of my horrendous coding. lol!