/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        if (array.includes(nums[i])) {
            return true;
        } else {
            array.push(nums[i])
        }
    }
    return false
};