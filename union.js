arr = [1,2,3,3,]
arrtwo = [45,22,3,3,65]

let intersect = [...arr, ...arrtwo]
console.log([...new Set(intersect)])
