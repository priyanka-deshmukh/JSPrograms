/**
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 */


var addStrings = function(num1, num2) {
    let resp ='';
    let maxLen = num2.length;
    let baseStr = num2;
    let smallStr = num1;
    let j = num1.length;
    
    if(num1.length > num2.length) {
        maxLen = num1.length;
        baseStr = num1;
        smallStr = num2
        j = num2.length;
    } 
    
    let carry = 0;
    while(maxLen>0) {
        const res = carry + ((baseStr[maxLen-1] - 0) || 0) + ((smallStr[j-1] - 0) || 0)
        carry = 0;
        if(res > 9) {
            carry = Math.trunc(res/10);
        }
        resp = (res % 10).toString() + resp;
        j--;
        maxLen--;
    }
    resp = (carry? carry.toString() : "") + resp;
    return resp;
};

console.log(addStrings(24343546556742432423, 345465657));

/**
 * output measures:
 * 68 ms	44.4 MB
 */