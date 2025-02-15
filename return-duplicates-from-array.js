// Create an Array
const fruits = [11,2,2,5,3,6,7,4,7,6,5,5,4];
//remove duplicates
console.log([...new Set(fruits)]);
//return duplicates only
const sort = [...new Set(fruits.filter((item, i, arr)=>arr.indexOf(item)!==i)) ]
console.log(sort);
