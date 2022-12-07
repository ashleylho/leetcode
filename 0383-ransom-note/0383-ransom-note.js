/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var dictionary = Array.from(magazine);
    for (var i = 0; i < ransomNote.length; i++) {
        if (dictionary.includes(ransomNote[i]) === true) {
            var index = dictionary.indexOf(ransomNote[i])    
            dictionary.splice(index, 1);        
        } else return false 
    }
    return true
};