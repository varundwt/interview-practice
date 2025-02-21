function vowels(str) {
  const splitted = str.split('');
  const newww = [];
  
  for (let i = 0; i < splitted.length; i++) {  // Fix the loop condition to < splitted.length
    if ('aeiou'.includes(splitted[i])) {  // Check if character is in 'aeiou'
      newww.push(true);  // Push vowel to the array
    }
    else{
        newww.push(false);
    }
  }
  
  return newww;  // Return after the loop is done
}

console.log(vowels("varun"));
