/**
 * Deduct is a string is the substring of another string.
 * Case sensitive function.
 * @param {String} strA
 * @param {String} strB
 * @return {Boolean} result
 */
function isSubstring(strA, strB){
  var lenA = strA.length,
    lenB = strB.length,
    count = 0,
    i = 0,
    j = 0;

  if(lenA < lenB){
    return false;
  }

  for (; i < lenA; i++){
    if(strA[i] === strB[j]){
      j++;
      count++;
    } else {
      j = 0;
      count = 0
    }
    if(count == lenB){
      return true;
    }
  }

  return false;
}

var stringA = 'transpilation';
var stringB = 'spil';

console.log('Is \"'
            + stringB
            + '\", a substring of \"'
            + stringA
            + '\" ? \n'
            + isSubstring(stringA, stringB));
