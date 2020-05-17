/**
 * ProblemStatment: Complete the checkMagazine function in the editor below. 
 * It must print Yes if the note can be formed using the magazine, or No. 
 * 
 * Sample Input 0
 * 6 4
 * give me one grand today night
 * give one grand today
 * 
 * Sample Output 0
 * Yes
 */

/**
 * @param {string} magazine 
 * @param {string} note 
 */

function checkMagazine(magazine, note) {

    let resp = note.every(function (ele) {
        if (magazine.includes(ele)) {
            magazine.splice(magazine.indexOf(ele), 1);
            return true;
        }
        return false;
        
    });
    if (resp) {

        console.log("Yes");
    } else {
        console.log("No");
    }
}
