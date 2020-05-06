/**
 * Problem Statement
 *  Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters. 
 */

 /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   
    for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
        //console.log(c);
      return i;
    }
  }
  return -1;
};

/**
 * Runtime: 60 ms
Memory Usage: 37.7 MB
 */