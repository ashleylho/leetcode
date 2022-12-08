/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k = 0; 
    for (var i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            k++
            nums[k] = nums[i]
        }
    }
    return k + 1
};