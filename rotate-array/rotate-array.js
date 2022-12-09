/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let subArray;
    if (nums.length > k) {
        subArray = nums.splice(-k)
        nums.unshift(...subArray)
    }
    else {
        for (var i = 0; i < k; i++) {
            subArray = nums.splice(-1)
            nums.unshift(subArray)
        }
    }
};