/**
 * Reverts all Words of a sentence.
 * Doesn't use build in methode.
 * @param {String} str
 * @return {String} arr
 */
function revertWord(str){
  var arr = str.split(' '),
    len = arr.length,
    middleInd = Math.floor(len/2),
    tmp;

    for(var i = 0; i <= middleInd - 1; i++){
      tmp = arr[i];
      arr[i] = arr[len - 1 - i];
      arr[len - 1 - i] = tmp;
    }

    return arr.join(' ');
}

//function using build in methode
/**
 * Reverts all Words of a sentence.
 * Use build in methode.
 * @param {String} str
 * @return {String} str
 */
function revertWordOptimized(str){
  return str.split(' ').reverse().join(' ');
}

var firstString = "Hello, my name is Rico";
var secondString = "The weather is nice today, isn’t it?";

console.log('The original sentence is: '
            + '\"'
            + firstString
            + '\", the modified sentence is: \"'
            + revertWord(firstString)
            + '\" \n');

console.log('The original sentence is: '
            + '\"'
            + secondString
            + '\", the modified sentence is: \"'
            + revertWordOptimized(secondString)
            + '\"');
