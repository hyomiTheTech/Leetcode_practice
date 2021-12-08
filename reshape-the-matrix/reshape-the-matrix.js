/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const r0 = nums.length, c0 = nums[0].length, result = [];
    if(r * c != r0 * c0) {
        return nums;
    }
    const tempArray = [];
    for(let i = 0; i < r0; i++) {
        for(let j = 0; j < c0; j++) {
            tempArray.push(nums[i][j]);
        }
    }
    while(tempArray.length) {
        result.push(tempArray.splice(0, c));
    }
    return result;
};