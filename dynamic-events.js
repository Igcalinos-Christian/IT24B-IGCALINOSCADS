const input = document.getElementById('input');
const output = document.getElementById('output');
const cardTemplate = document.getElementById('cardTemplate');

let appletName = [];
let appletLink = [];

let divContainer;
let header;
let link;

fetch("dynamic-events.json")
    .then(res => res.json())
    .then(values => values.map(value => {
        appletName = value.applet_name;
        appletLink = value.applet_link;
        divContainer = `<div><h2>${appletName}</h2><a href="${appletLink}">${appletName}</a></div>`
        output.innerHTML += divContainer;
        console.log(appletName, appletLink);
    }))