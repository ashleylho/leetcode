/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // look at first letter of the first string in array
    // compare the first letter to the first letter of the other words in array
    // if they match, add letter to prefix
    // if they don't return prefix
    let prefix = ""
    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (letter !== strs[j][i]) {
                return prefix
            }
        }
     prefix += letter       
    }
    return prefix
};