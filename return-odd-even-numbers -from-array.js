const array = [73, 45, 12, 89, 56, 33, 64, 27, 91, 58];

function filterArr(arr) {
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }

  }
  console.log(even);
    console.log(odd); 
}

filterArr(array)
