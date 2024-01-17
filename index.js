function isPalindrome(word) {
  // Write your algorithm here
}
// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();
  
  // Remove non-letter characters
  str = str.replace(/[^a-z]/g, '');

  // Check if the string is the same forwards and backwards
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("robot")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true (ignores spaces and punctuation)

// Additional test cases
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
