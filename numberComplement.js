/**
 * Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Example 1:

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:

Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 */

 /**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(n) {
  
    let strArr = n.toString(2).split('');
    let comp = strArr.map((e) => e === '0' ? 1 : 0).join('', 2)
    let compDec = parseInt(comp, 2).toString(10);
    return compDec;
    
    
};

/**
 * Runtime: 56 ms
Memory Usage: 34 MB
 */