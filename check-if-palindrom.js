function vowels(str) {
    const convertStr = str.toString();
  const rev = convertStr.split('').reverse().join('');
  
  if(rev == convertStr){
      console.log("hai hai")
  }
  else{
      console.log("nahi nahi")
  }
}

vowels(111)
