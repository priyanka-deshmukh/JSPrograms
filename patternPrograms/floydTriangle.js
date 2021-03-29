/**
 * 1
 * 2 3
 * 4 5 6
 * 7 8 9 10
 * 11 12 13 14 15
 */

 function getFloydTriangle(noOfRow) {
     let counter = 0;
    for(let i=1; i<=noOfRow; i++) {
        for(let j=1;j<=i;j++) {
            counter++;
            process.stdout.write(`${counter} `);
        }
        console.log();
    }
}

getFloydTriangle(6);