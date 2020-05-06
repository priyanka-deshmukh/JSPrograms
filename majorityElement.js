/**
 * Problem Statement
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(a) {
    b={};
max=0, maxi=0;
for(let k of a) {
  if(b[k]) b[k]++; else b[k]=1;
  if(maxi < b[k]) { max=k; maxi=b[k] }
}
    return max
};

/**
 * Runtime: 60 ms
Memory Usage: 38.2 MB
 */