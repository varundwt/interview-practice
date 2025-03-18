const arr = ['a', 'b','','f','s','','y','','','q','']
const n =[];
const r = []
for (let i = 0; i < arr.length; i++) {
  if(arr[i]!==''){
     n.push(arr[i])
  }else{
    r.push(arr[i])
  } 
}

console.log(n)
console.log(r)
