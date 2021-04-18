/**
 * Problem statement:
 * Given an array nums of n integers where nums[i] is in the range [1, n], 
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 * 
 * Testcases:
 * Example 1:
 *  Input: nums = [4,3,2,7,8,2,3,1]
 *  Output: [5,6]
 * 
 * Example 2:
 *  Input: nums = [1,1]
 *  Output: [2]
 * 
 * Execution:
 *  Runtime: 128 ms
 *  Space: 49.9 MB
 */
const nums = [4,3,2,7,8,2,3,1];

var findDisappearedNumbers = function(nums) {
    
    let op = [];
    const N = nums.length+1;
    let seta = new Set(nums);
    
    for(let i =1; i<N; i++) {
        if(!seta.has(i)) {
            op.push(i);
        }
    }
    return op;
};

//one liner 

let missingElementArr = Array.from(Array(nums.length+1).keys()).slice(1).filter(x=>!new Set(nums).has(x))

console.log(findDisappearedNumbers(nums));

console.log(missingElementArr);

