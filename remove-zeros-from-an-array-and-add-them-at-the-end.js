const arr = [6,4,0,7,0,0,1,0,21,16,1];

const zeros = []
const newarr = []
for (let i = 0; i < arr.length; i++) {
  if(arr[i] === 0){
    zeros.push(arr[i])
  }else{
    newarr.push(arr[i])
  }
  
} 

console.log([...newarr, ...zeros])
