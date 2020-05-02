/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n == 1) {
            return 1;
        } else if (n > 1 && n < 100) {
            
        for(let i = n; i >= 0; i--) {
            if(!isBadVersion(i)) { 
                return i+1;
            }
        }
        } else{
            let j = n;
          
            while(isBadVersion(j)){
                j = j - 10
            }
            for(let k =j; k<j+11; k++) {
             if(isBadVersion(k)) { 
                return k;
            }   
            }
        }
    };
};