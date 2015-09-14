/**
 * Returns the first single char of a string.
 * @param {String} str
 * @return {String} char
 */
function findFirstNonRepeatedChar(str){
  var len = str.length,
    letters = {},
    char;

  for(var i = 0; i < len; i++){
    char = str[i];
    if(!letters[char]){
      letters[char] = 1;
    } else {
      letters[char]++;
    }
  }

  for (var l in letters){
    if (letters[l]==1){
      return l;
    }
  }

  return null;
}

var testString = "Halloween";

console.log(' The string value is: \"'
            + testString + '\"'
            + '. The first non repetead char is: '
            + findFirstNonRepeatedChar(testString));
