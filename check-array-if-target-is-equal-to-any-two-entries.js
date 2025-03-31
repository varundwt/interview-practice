function abc(arr, target) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === target) {
      final.push(arr[i], arr[i + 1]);
    }
  }
  return final;
}

console.log(abc([1, 2, 3, 4, 5, 6], 5));
