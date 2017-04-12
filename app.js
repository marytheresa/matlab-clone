#!/usr/bin/env node

//console application thats clones MATLAB

var program        = require('commander');

program
  .version('0.0.1')
  .option('-z, --zeros', 'Create array of all zeros')
  .option('-n, --squaresize <squaresize>', 'Specify size of square matrix')
  .parse(process.argv);

//conditional statements to set actions for the different commands
console.log('-----------------------------------------------------');
if (program.zeros) {
    if (program.squaresize) {
        var x = program.squaresize;
        console.log(x);                 //this returns the given value of x
        console.log(Array(6));          //this returns [ , , , , , ]
        console.log(Array(x));          //but this returns ['x'], I am not sure why     
        console.log(Array(x).fill(0));
        console.log((Array(x).fill(0)).fill(Array(x).fill(0)));
    }
    else {
        console.log(0);
    }
};

