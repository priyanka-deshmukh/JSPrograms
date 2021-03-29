// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

/**
 * Important trick here is:
 * no of rows are 5. so, i has to iterate 5 times
 * no of columns are 5 in first row, 4 in second.. that means j should be decreasing.
 * 
 * Why not console.log?
 *  console.log appends \n automatically. hence pattern will not form.
 * 
 * Why start j with i?
 *  as j is decreasing on every row, it is useful to initialize j with i.
 */
console.log("***************Pattern programs*************");


for(let i =5; i>0; i--) {
    for(let j =i; j>0; j--) {
        process.stdout.write(j + " ");
        //console.log(j + " ");
    }
    console.log();
}

/**
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
 */

for (let k = 1; k < 6; k++) {
    for (let l = 1; l <= k; l++) {
        process.stdout.write(l + " ");
        //console.log(j + " ");
    }
    console.log();
}
console.log("____________END_______________");
/**
5_4_3_2_1
_4_3_2_1_ 
__3_2_1__
___2_1___ 
____1____ 

 */


 // using 3 for loop
for(let p =0; p<5; p++) {
    for(let r = p; r>0; r--) {
        process.stdout.write(" ")
    }
    for (let q = (5-p);q > 0; q--) {

        process.stdout.write(q + " ");

    }
    console.log(" ");
}

//using 2 for loop

for(let x =0; x<5; x++) {
    let z = x;
    for(let y =0; y<5;y++) {
        if(z>0) {
            process.stdout.write(" ");
            z--;
        } else {
            let op = (5-y)
            process.stdout.write(`${op} `);
        }
    }
    console.log(" ");
}
console.log("____________END_______________");