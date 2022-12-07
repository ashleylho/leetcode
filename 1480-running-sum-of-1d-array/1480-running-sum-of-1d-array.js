/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var total = 0;
    var result = [];
    for (var i=0; i < nums.length; i++) {
        total += nums[i];
        result.push(total);
    }
    return result;
};