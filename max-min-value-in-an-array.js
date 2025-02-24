let arr = [2,4,6,3,87,5,7,345,746,5,1];
//Max number in array
console.log(Math.max(...arr));
//Min number in array
console.log(Math.min(...arr));

//Using reduce method max number
const maxfunc = (arr) => {
    return arr.reduce((acc, val) => {
        return val>acc ? val : acc;
    });
}
console.log(maxfunc(arr));

//Using reduce method min number
const minfunc = (arr) => {
    return arr.reduce((acc, val) => {
        return val<acc ? val : acc;
    });
}
console.log(minfunc(arr));

//Using for loop max number
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);

//Using for loop min number
let min = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min);


//using for loop
const arr = [2,4,6,8,10]

function maxNumber(att){
  let max = att[0]
  for (var i = 1; i < att.length; i++) {
    if (att[i]> max) {
      max = att[i]
    }
  }
  console.log(max);
}
maxNumber(arr);
