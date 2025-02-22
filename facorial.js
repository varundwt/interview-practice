function facto(num){
  for (let i = 1; i <= num; i++) {
    if(num%i===0){
      console.log(i)
    }
    
  }
}

console.log(facto(6))
