function vowels(str) {
  const reversed = str.split('').reverse().join('');
  console.log(reversed)
}

vowels("varun")

//without using reverse

const abc = [1,2,3,4,5];

function rev(arr){
  const ww = []
  for (var i = arr.length -1 ; i>=0; i-- ) {
    ww.push(arr[i])
  }
  console.log(ww)
}

rev(abc);
