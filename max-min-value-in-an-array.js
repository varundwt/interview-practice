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
        return val>acc ? val : acc;
    });
}
console.log(minfunc(arr));
