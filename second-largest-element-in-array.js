//get second largest element from an array

let arr = [2,4,6,3,87,5,7,345,746,5, 5,1];

const newarr = [...new Set(arr.filter((item,i,arr)=>arr.indexOf(item)!==i))]

console.log(...newarr); // [ 5 ]
const removeduplicates=[...new Set(arr)]
console.log(removeduplicates);

const sliced = removeduplicates.slice(1);
const secondlargest = (sliced.splice(0,1));
console.log(...secondlargest);

