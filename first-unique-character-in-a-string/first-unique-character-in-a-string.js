/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] += 1
        } else {
            map[s[i]] = 1
        }
    }
    let index = Object.values(map).indexOf(1)
    if (index === -1) {
        return index
    } else {
        let letter = Object.keys(map)[index]
        return s.indexOf(letter)
    }
};