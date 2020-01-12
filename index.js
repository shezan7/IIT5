let name = 'Shezan';
console.log(name);
let lastName = 'Al-Mahmud';
console.log(lastName);

let firstName = 'shezan';
let age = 22;

let person = {
    name: 'shezan',
    age: 22
};

console.log(person);

//dot notation
person.name = 'juice';
console.log(person.name);

//dynamic
let selection = 'firstName';
person[selection] = 'shezan2';
console.log(person.firstName);

//array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green'; //dynamic
console.log(selectedColors);

//function
function one()
{
    console.log('Hello World1');
}
one();

function two(name)
{
    console.log('Hello ' + name);
}
two('Shezu');
two('Shezu2');

function three(name, lastName)
{
    console.log('Hello ' + name + ' ' + lastName);
}
three('Shezu');
three('Shezu2', 'Shezu3');

function square(number)
{
    return number * number;
}
let number = square(2);
console.log(number);

function square(number)
{
    return number * number;
}
console.log(square(2));