/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numbers = Math.abs(x).toString().split('')
    let reverse = numbers.reverse()
    reverse = reverse.join('')
    reverse = +reverse
    if (x < 0) {
        reverse = reverse *-1
    }
    if (reverse > Math.pow(2, 31)-1 || reverse < Math.pow(-2, 31)) {
        return 0
    }
    return reverse
};