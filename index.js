function isPalindrome(word) {
  // Write your algorithm here
 // iterate from beginning to middle
  for (let i = 0; i < word.length/2; i++){
    const j = word.length - 1 - i
    if (word[i] !== word[j]) return false
  }
  return true
}

//iterate from beginning to middle
//check to see if the corresponding letter from end match
//if any letters dont match, return false




/* 
  Add your pseudocode here:
  -iterate from beginning to middle of word 
    -check each character to the corrresponding letter from the end
      -if any don't match, return false
      -if all match, return true
*/

/*
  Add written explanation of your solution here:
  make a function that returns true if a word is a palindrom. That means if the first
  letter is the same as the last letter, and the second letter is the same as the second
  to last, and so on, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
