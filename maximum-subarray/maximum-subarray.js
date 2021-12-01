/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // loop thru the nums array and constantly update subarray and largest sum of subarray if possible
    let currentSubarray = -Infinity
    let maxSubarray = -Infinity
    
    for (const value of nums) {
        if (currentSubarray < 0) {
            currentSubarray = value
        } else {
            currentSubarray += value
        }
        
        if (currentSubarray > maxSubarray) {
            maxSubarray = currentSubarray
        }
    }
    
    return maxSubarray
};