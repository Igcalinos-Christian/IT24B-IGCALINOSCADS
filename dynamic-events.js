const input = document.getElementById('input');
const output = document.getElementById('output');
const cardTemplate = document.getElementById('cardTemplate');

let appletName = [];
let appletLink = [];

let divContainer;
let header;
let link;
let appletDescription;

fetch("dynamic-events.json")
    .then(res => res.json())
    .then(values => values.map(value => {
        appletName = value.applet_name;
        appletLink = value.applet_link;
        appletDescription = value.applet_description;
        divContainer = `<div class="card"><h2>${appletName}</h2><p>${appletDescription}</p><a href="${appletLink}">${appletName}</a></div>`
        output.innerHTML += divContainer;
        console.log(appletName, appletLink);
    }))