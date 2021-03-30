process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

function getSubSequence(vName, bloodName) {
    let index = -1;
    for(e of bloodName) {
       let newIndex = vName.indexOf(e, (index+1));
       if(newIndex >= 0 && newIndex > index) {
           index = newIndex;
       } else {
           return 'NEGATIVE';
       } 
    }
    return 'POSITIVE'

}


process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
	let vName = input_stdin_array[0];
    let noOfTC = Number(input_stdin_array[1]);
    let i = 1;
    while(noOfTC > 0) {
        let bloodName = input_stdin_array[Number(1+i)];
        i++;
        noOfTC--;
        let output = '';
        if(bloodName.length > vName.length) {
            output = 'NEGATIVE';
        } else {
            output = getSubSequence(vName, bloodName)
        }
        process.stdout.write(""+output+"\n");
    }
    
	//Write code here
    
});

