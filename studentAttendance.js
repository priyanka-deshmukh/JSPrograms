// You are given a string representing an attendance record for a student. 
//The record only contains the following three characters:

//     'A' : Absent.
//     'L' : Late.
//     'P' : Present.

// A student could be rewarded if his attendance record doesn't contain 
    // more than one 'A' (absent) or 
    // more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:

//    Input         Output
//    "PPALLP"      True
//    "PPALLL"      false
//    "LLPPPLL"     true
//    "LLLALL"      false
//    "LALL"        true


/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let arr = s.split('');
    let count1 = 0, count2 = 0;
    /** long approach */
    // const test1 = arr.filter(element => element == 'A');
    // if (test1.length > 1) {
    //     return false;
    // }
    
    for(i=0; i<arr.length; i++) {

        if(arr[i] == 'L') {
            count1++;
            if(count1 == 3) {
                return false;
            } 
        } else if (arr[i] == 'A') {
            count2++;
            if(count2 == 2) {
                return false;
            }
        }
         else {
            count1 = 0;
        }
    }
    if(count1 <= 2) {
        return true;
    }
};
console.log(checkRecord("LALL"));
