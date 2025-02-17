// Create an Array
const fruits = [11,2,2,5,3,6,7,4,7,6,5,5,4];
//remove duplicates
console.log([...new Set(fruits)]);
//return duplicates only
const sort = [...new Set(fruits.filter((item, i, arr)=>arr.indexOf(item)!==i)) ]
console.log(sort);


//without using set method:

array = [3, 7, 2, 9, 3, 5, 7, 8, 2, 4];

function remove(arr){
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if(!unique.includes(arr[i])){
      unique.push(arr[i])
    }       
  }
  return unique;
}

console.log(remove(array))
