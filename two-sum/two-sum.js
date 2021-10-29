/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // make a copy of assort nums array from small to large
    let copy = Array.from(nums)
    let assortedArray = copy.sort((a,b)=> (a-b))
    // get two variables firstIdx and secondIdx
    let beginIdx = 0
    let endIdx = nums.length - 1
        // firstIdx starts from beginning in the array
        // secondIdx starts from the ending
    
    // add two idx values, if its larger than the target value, move secondIdx down
        // else move firstIdx up
    
    while(beginIdx < endIdx) {
        let smallVal = assortedArray[beginIdx]
        let largeVal = assortedArray[endIdx]
        
        if (smallVal + largeVal === target) {
            let firstIdx = nums.indexOf(smallVal)
            delete nums[firstIdx]
            let secondIdx = nums.indexOf(largeVal)
            
            return [firstIdx, secondIdx]
        } else if (smallVal + largeVal > target) {
            endIdx --
        } else if (smallVal + largeVal < target) {
            beginIdx ++
        }
    }
};