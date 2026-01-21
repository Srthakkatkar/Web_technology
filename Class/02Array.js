const superHeros = [ "Ironman", "Spiderman", "Black Panther" ];
const superVillains = [ "Lex Luthor", "Green Goblin", "Doctor Doom" ];

superHeros.push(superVillains);
console.log(superHeros);
console.log(superHeros[3]);
console.log(superHeros[3][2]);

//array-concat-

const allCharacters = superHeros.concat(superVillains);
console.log(allCharacters);

const array1 = [1, 2, 3,[4,5,6,],7,8,[6,7,[4,5]]];
const array2 = array1.flat(Infinity);
console.log(array1);
console.log(array2);
const array3 = array1.flat(1);
console.log(array3);

//nested array-
//flat- how deep a nested array should be flattened default value is 1
//infinity- flatten all levels np matter how deep it is
//flat does not change original it return new array useful when dealing with nested array

//data scripting using this methods-
console.log(Array.isArray("Sarthak"));//to check given value is array or not//false
console.log(Array.isArray([1,2,3]));//true
console.log(Array.from("sarthak"));//to convert iterable to object livestring to array
console.log(Array.from({name:"sarthak"}));//empty array as object is not iterable
console.log(Object.keys({name:"sarthak"}));//to get keys of object as array
console.log(Object.values({name:"sarthak"}));//to get values of object as array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));//to create array from given values no matter how many values are there

//array.from- convert iterable to array
//array.of- create array from given values
