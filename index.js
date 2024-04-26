import fs from 'fs';
import _ from 'lodash';
import { color, log, red, green, blue } from 'console-log-colors';
import request from 'request';

const myarray = [1, 2, 3, 4, 5, 8, 4, 3, 9];

console.log(color.red(myarray));

const output = _.uniq(myarray)

console.log(output);

// echo 'node_modules/*' > .gitignore
// git add -A
// git commit -m "Some message"

//Sync File Access the program stops running until every else below completes <-Bad
const file = fs.readFileSync('./data.json', {encoding: 'utf8'});
console.log(color.red(file));

//An ASync File Access  mode <-Good
fs.readFile('./data.json', {encoding: 'utf8'}, (err,f) => console.log(color.green(f)));

request('https://jsonplaceholder.typicode.com/posts', (err, resp, body) => {
    const parsed = JSON.parse(body);
    parsed.forEach( (x) => console.log(x));
    fs.writeFileSync('./newWebStuff.json', JSON.stringify(parsed));
});

//An example of printing JSON data as a string is: JSON.stringify(parsed);
// console.log(JSON.stringify(parsed))

// for example
