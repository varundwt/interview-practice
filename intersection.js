arr = [1,2,3,3,4,5,6,7,8,9]
arrtwo = [45,22,3,3,65]

let intersect = arr.filter((item)=>{
  return arrtwo.includes(item)
  
})
console.log(intersect)
console.log([...new Set(intersect)])
