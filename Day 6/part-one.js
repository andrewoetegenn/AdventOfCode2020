const fs = require('fs');

const data = fs.readFileSync('./Day 6/input.txt', 'utf8');
const groups = data.split('\r\n\r\n');

let total = 0;

groups.forEach(group => {
    let persons = group.split(/[ \r\n]+/);
    let questions = [...new Set(persons.join('').split(''))];

    total += questions.length;
});

console.log(total);