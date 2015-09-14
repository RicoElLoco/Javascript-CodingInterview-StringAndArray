/**
 * Revert all characters of a string
 * Doesn't use build in method
 * @param {String} str
 * @return {String}
 */
function stringRevert(str){
  if (!str || str < 2)
    return str;

  var arr = str.split(''),
    len = str.length,
    midlleIndex = Math.floor(len/2),
    tmp;

    for(var i = 0; i <= midlleIndex - 1; i++){
      tmp = arr[i];
      arr[i] = arr[len - 1 - i];
      arr[len - 1 - i] = tmp;
    }

    return arr.join('');
}

/**
 * Revert all characters of a string
 * Use build in method
 * @param {String} str
 * @return {String}
 */
function stringRevertOptimized(str){
  if (!str || str < 2)
    return str;
  return str.split('').reverse().join('');
}

var firstString = 'Scooter';
var secondString = 'Algorithm';

console.log('String: \"'
            + firstString
            + '\", become: \"'
            + stringRevert(firstString)
            + '\"');

console.log('String: \"'
            + secondString
            + '\", become: \"'
            + stringRevertOptimized(secondString)
            + '\"');
