/**
 * Remove all duplicated charachter in a string
 * @param {String} str
 * @return {String} result
 */
function removeDuplicate(str){
  var len = str.length,
    letters = {},
    char,
    resutlArr = [];

  for(var i = 0; i < len; i++){
    char = str[i];
    if(!letters[char]){
      letters[char] = 1;
    } else {
      letters[char]++;
    }
  }

  for (var c in letters){
    if(letters[c] == 1){
      resutlArr.push(c);
    }
  }

  return resutlArr.join('');
}

var testString = 'aaadcrrtyhnnskiooo';

console.log( 'The original string is: \"'
          + testString
          + '\", the processed string is: \"'
          + removeDuplicate(testString)
          + '\"');
