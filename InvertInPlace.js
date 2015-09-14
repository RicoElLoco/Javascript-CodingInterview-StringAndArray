/**
 * Invert char in each words contained by a sentence,
 * the words stay in place.
 * Not using build in reverse fuction
 * @param {String} str
 * @return {String} sum
 */
function revertInPlace(str) {
  var array = str.split(' ');
  for(var i in array) {
    array[i] = array[i].split('').reverse().join('');
  }
  return array.join(' ');
}

/**
 * Invert char in each words contained by a sentence,
 * the words stay in place.
 * Using build in reverse fuction
 * @param {String} str
 * @return {String} sum
 */
function revertInPlaceOptimized(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

var firstSentence = 'Hello, my name is Rico.';
var secondSentence = 'The weather is nice today, isn’t it?';

console.log('Original sentence: \"'
          + firstSentence
          + '\" processed sentence whith revertInPlace: \"'
          + revertInPlace(firstSentence)
          + '\"');

console.log('Original sentence: \"'
          + secondSentence
          + '\" processed sentence whith revertInPlaceOptimized: \"'
          + revertInPlaceOptimized(secondSentence)
          + '\"');
