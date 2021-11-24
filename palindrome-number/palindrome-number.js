/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // change all characters to strings
    let string = x.toString()
    // loop thru the x from the beginning and from the end 
    for (let i = 0; i < Math.round(string.length/2); i ++) {
        // and compare characters each time
        if (string[i] !== string[string.length - 1 - i]) {
            return false
        }
    }
    
    return true
};