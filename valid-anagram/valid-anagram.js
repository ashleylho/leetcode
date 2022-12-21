/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sArr = s.split('').sort()
    let tArr = t.split('').sort()
    s = sArr.join()
    t = tArr.join()
    if (s !== t) {
        return false
    } else {
        return true
    }
};