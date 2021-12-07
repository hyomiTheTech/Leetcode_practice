/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // use two for loop to loop thru each array and find elements that exists in both arrays.
    
    const result = [];
    
    const store = {};
    
    for (const val of nums1) {
        if (val in store) {
            store[val] ++
        } else {
            store[val] = 1
        }
    }
    
    for (const val of nums2) {
        if (val in store) {
            store[val] --
            result.push(val)
        }
        
        if (store[val] === 0) {
            delete store[val]
        }
    }
    
    return result
};