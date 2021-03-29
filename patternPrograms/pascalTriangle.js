/** WAP for generating Pascal Triangle
[
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1]
]
 */
var generatePascalTriangle = function (numRows) {
    let arr = [];
    if(numRows == 0) {
        return arr;
    }
    let firstArr = [1];
    arr[0] = firstArr;
    for (i = 1; i < numRows; i++) {
        arr[i] = [];
        for (j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                arr[i].splice(j, 0, 1);

            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
            }
        }
    }
    return arr;
};

let opArr = generatePascalTriangle(5);

for(ele of opArr) {
    console.log(ele);
}
