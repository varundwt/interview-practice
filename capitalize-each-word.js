const str = "varun pandey"
const splitstr = str.split(" ");
const res = splitstr.map((word)=> word.charAt(0).toUpperCase()+ word.slice(1));
console.log(res)
