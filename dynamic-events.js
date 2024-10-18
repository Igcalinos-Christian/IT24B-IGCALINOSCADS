const input = document.getElementById('input');
const output = document.getElementById('output');

let dataList = [];

fetch("dynamic-events.json")
    .then(res => res.json())
    .then(values => {
        dataList = values;
        console.log(dataList);
    })