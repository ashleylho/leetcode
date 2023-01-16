/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    } 
    let string = x.toString()
    let array = string.split('')
    let reverse = array.reverse().join('')
    if (string === reverse) {
        return true
    } else return false
};