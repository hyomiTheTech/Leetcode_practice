/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const store = {}
    // loop thru the array and store each number to store object.
    for (const value of nums) {
        // also at the same time check the store object to see if current number is in the object
        if (value in store) {
            return true
        } else {
            store[value] = value
        }
    }
    
    return false
};