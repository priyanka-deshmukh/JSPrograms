/**
 * Problem statement :
 * Input: [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 * Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
 * Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
 */



var flipAndInvertImage = function(A) {
    let opNew = A.map(function(row){ 
        let invert1 =[];
        for(i=row.length-1, j=0; i>=0; i--, j++) {
            invert1[j] = row[i] == 0 ? 1 : 0;
        }
        return invert1;
        
    });
    return opNew;
};

console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));

// Stats:
// Average run time it took 84 ms and memory 40.2 MB
