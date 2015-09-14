/**
 * Test if a string is a palindrome (ex: madam).
 * This function is case sensitive
 * Deosn't use build in method
 * @param {String} str
 * @return {Boolean} is Palindrome
 */
function isPalindorme(str){
  var len = str.length,
    middleInd = Math.floor(len/2);

    for (var i = 0; i <= middleInd - 1; i++){
      if(str[i] !== str[len - 1 - i]){
        return false;
      }
    }

    return true;
}

/**
 * Test if a string is a palindrome (ex: madam).
 * This function is case sensitive.
 * Use build in method
 * @param {String} str
 * @return {Boolean} is Palindrome
 */
function isPalindromeOptimized(str){
  return str.split('').reverse().join('') == str;
}

var firstString = "ressasser";
var secondString = "soleil";

console.log('is \"'
            + firstString
            + '\" a palindrome: '
            + isPalindromeOptimized(firstString));
            
console.log('is \"'
            + secondString
            + '\" a palindrome: '
            + isPalindromeOptimized(secondString));
