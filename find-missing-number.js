const missingNumArr = [1, 2, 3, 4, 5, 6, 9, 10];

const findMisingNumber = (data) => {
  let missingArr = [];
  for (let i = 0; i < data.length; i++) {
    if(!missingNumArr.includes(i)){
      missingArr.push(i);
    }
    
  }
  return missingArr;
};

console.log(findMisingNumber(missingNumArr))

