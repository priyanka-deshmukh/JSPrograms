/**
 * Leetcode 290
 * Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    const uniqueWords = [...new Set(words)];
    const letters = pattern.split("");
    const uniqueLetter = [...new Set(letters)];
    if(uniqueWords.length !== uniqueLetter.length) {
        return false
    }
    
   let map1 = {};


    
    for(let i=0;i<uniqueWords.length || i< uniqueLetter.length;i++) {
        
        const key = uniqueLetter[i] || 'noKey'
        const value = uniqueWords[i] || 'noValue'
        
        map1[key] = value;
        
        
        
    }      
    for(let j=0; j< pattern.length || j< words.length; j++) {
        if(words[j] !== map1[pattern[j]]) {
            console.log(words[j], pattern[j])
            return false
        }
    }
    return true;
};