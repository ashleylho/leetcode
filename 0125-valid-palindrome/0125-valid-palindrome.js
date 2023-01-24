/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    let i = 0;
    let j = string.length - 1
    while (i < j) {
        if (string[i] !== string[j]) {
            return false
        } else {
            i++;
            j--;
        }
    }
    return true
};