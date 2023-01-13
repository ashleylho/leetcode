/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let number = n
    if (number <= 0) {
        return false
    }
    while (number >= 0) {
        if (number % 3 === 0) {
            number = number / 3
        } else if (number === 1) {
            return true
        } else {
            return false
        }
    }
};