/**
 * Problem statement:
 *  Given an array arr[] of N positive integers. 
    * Push all the zero’s of the given array to the right end of the array 
    * while maitaining the order of non-zero elements.
 * TestCases:
 *  Example 1:
    * Input:
        * N = 5
        * Arr[] = {3, 5, 0, 0, 4}
    * Output: 3 5 4 0 0
    * Explanation: The non-zero elements preserve their order while the 0 elements are moved to the right.
 * Example 2:
    * Input:
        * N = 4
        * Arr[] = {0, 0, 0, 4}
    * Output: 4 0 0 0
    * Explanation: 4 is the only non-zero element and it gets moved to the left.
 * 
 */

function usingFilterPushAndSpread(arr, n) {
    let newArr = arr.filter(x=>x!==0);
    let newArrSize = n - newArr.length;
    
    // Execution time is 0.52ms
    newArr.push(...Array(newArrSize).fill(0));
    arr.length = 0;
    arr.unshift(...newArr);
    console.log(arr);
}

function usingFilterConcatAndSpread(arr, n) {
    // filter array for non-zero numbers
    let newArr = arr.filter(x=>x!==0);
    let newArrSize = n - newArr.length;

    //Execution time is: 0.45ms
    arr.length = 0;
    arr.unshift(...newArr.concat(Array(newArrSize).fill(0)));
    console.log(arr);

}

function usingFilterPushAndApply(arr, n) {
    let newArr = arr.filter(x=>x!==0);
    let newArrSize = n - newArr.length;
    
    // Execution time is 0.44ms
    newArr.push.apply(newArr,Array(newArrSize).fill(0));
    //console.log(newArr);
    arr.length = 0;
    arr.unshift.apply(arr, newArr);
    console.log(arr);
}


usingFilterConcatAndSpread([3, 5, 0, 0, 4],5);

usingFilterPushAndSpread([3, 5, 0, 0, 4],5);

usingFilterPushAndApply([3, 5, 0, 0, 4],5);