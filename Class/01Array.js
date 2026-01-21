//array

let myArray = [0,1,2,3,4]
console.log('my array is:, ${myArray}');
console.log(typeof myArray);

//object

const arr = new Array(1,2,3,4);
console.log('my array is:, ${arr}');
console.log(typeof arr);

//array methods

arr.push(2);//add element at the end
console.log('my array after push:, ${arr}');

myArray.pop();//remove last element
console.log('my array after pop:, ${myArray}');

arr.unshift(0);//it shifts all elements to the right and adds element at the start
console.log('my array after unshift:, ${arr}');
arr.shift();//it removes first element 
console.log('my array after shift:, ${arr}');

//includes
console.log(arr.includes(3));//to check if element is present in array
//indexOf
console.log(arr.indexOf(3));//to find index of element in array


//activity 2-
//functions related
//

//activity 3-
//slice and split 

