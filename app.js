#!/usr/bin/env node

//console application thats clones MATLAB

var program        = require('commander');

function len(val) {
    return val.split(/]+/);
};

program
  .version('0.0.1')
  .option('-z, --zeros', 'Create array of all zeros')
  .option('-n, --squaresize <squaresize>', 'Specify size of square matrix')
  .option('-o, --ones', 'Create array of all ones')
  .option('-l, --linspace', 'Generate linearly spaced vector')
  .option('-x, --startpoint <startpoint>', 'Specify start point for linspace')
  .option('-y, --endpoint <endpoint>', 'Specify end point for linspace')
  .option('-p, --points <points>', 'Specify number of points')
  .option('-g, --logspace', 'Generate logarithmically spaced vector')
  .option('-d, --len <array>', 'Length of largest array dimension', len)
  .option('-s, --size <array>', 'Return the length of the dimensions of an array', len)
  .option('-a, --dimension <dimension>', 'Specify the dimension to be queried')
  .option('-f, --sort <array>', 'Sort array elements', len)
  .parse(process.argv);

//conditional statements to set actions for the different commands

console.log('-----------------------------------------------------');
if (program.zeros) {
    if (program.squaresize) {
        var x = program.squaresize;
        console.log(Array(Number(x)).fill(0).fill(Array(Number(x)).fill(0)));
    }
    else {
        console.log(0);
    }
};

if (program.ones) {
    if (program.squaresize) {
        var x = program.squaresize;
        console.log(x);
        console.log(Array(Number(x)).fill(1).fill(Array(Number(x)).fill(1)));
    }
    else {
        console.log(1);
    }
};

if (program.linspace) {
    var x = program.startpoint;
    var y = program.endpoint;
    var result = [Number(x)];
    if (program.points) {
        var p = program.points;
        console.log(p);
        console.log('-----------------------------------------------------');
        if (p <= 0) {
            console.log([]);
        }
        else if (p == 1) {
            console.log(y);
        }
        else {
            for (i = 2; i <= p; i++) {
            var interval = (y - x)/ (p - 1);
            console.log(interval);
            var next = result[i-2] + interval;
            result.push(next);
            }
            console.log(result);
        }
    }
    else {
        for (i = 2; i <= 100; i++) {
            var interval = (y - x)/ (100 - 1);
            var next = result[i-2] + interval;
            result.push(next);
        }
        console.log(result);
    }
};

if (program.logspace) {
    var x = program.startpoint;
    var y = program.endpoint;
    var result = [Number(Math.pow(10, x))];
    if (program.points) {
        var p = program.points;
        console.log(p);
        console.log('-----------------------------------------------------');
        if (p <= 0) {
            console.log([]);
        }
        else if (p == 1) {
            console.log(Math.pow(10, y));
        }
        else {
            for (i = 2; i <= p; i++) {
            var interval = (Math.pow(10, y) - Math.pow(10, x))/ (p - 1);
            console.log(interval);
            var next = result[i-2] + interval;
            result.push(next);
            }
            console.log(result);
        }
    }
    else {
        for (i = 2; i <= 50; i++) {
            var interval = (Math.pow(10, y) - Math.pow(10, x)) / (50 - 1);
            var next = result[i-2] + interval;
            result.push(next);
        }
        console.log(result);
    }
};

if (program.len) {
    var arr = program.len;
    console.log(arr);
    if (arr.length == 2) {
        console.log(0);
    }
    else {
        var row = arr.length - 1;                               //how can I use regex to count all the arrays within `arr`, except the empty string              
        console.log(row);
        var search = ',';
        var col = 1;
        for (i = 0; i < arr[0].length; i++) {
            if (search == arr[0][i]) {
                col += 1;
            }
        }
        console.log('-----------------------------------------------------');
        if (row > col) {
            console.log(row);
        }
        else {
            console.log(col);
        }
    }
};

if (program.size) {
    var arr = program.size;
    if (program.dimension) {
        var dim = program.dimension;
        if (dim == 1) {
            var row = arr.length - 1;              
            console.log(row);
        }
        else if (dim == 2) {
            var search = ',';
            var col = 1;
            for (i = 0; i < arr[0].length; i++) {
                if (search == arr[0][i]) {
                    col += 1;
                }
            }
            console.log('-----------------------------------------------------');
            console.log(col);
        }
        else {
            console.log("Invalid dimension");
        }
    }
    else {
        if (arr.length == 2) {
            console.log([0, 0]);
        }
        else {
            var row = arr.length - 1;              
            console.log(row);
            var search = ',';
            var col = 1;
            for (i = 0; i < arr[0].length; i++) {
                if (search == arr[0][i]) {
                    col += 1;
                }
            }
            console.log('-----------------------------------------------------');
            console.log([row, col]);
        }
    }
};

if (program.sort) {
    var arr = program.sort;
    if (program.dimension) {
        var dim = program.dimension;
        if (dim == 1) {

        }
        else if (dim == 2) {
            var new_array = [];
            for (i = 0; i < arr.length - 1; i++) {
                var sorted = [];
                for (j = 0; j < arr[i].length; j++) {
                    if (/\d/.test(arr[i][j])) {
                        console.log(arr[i][j]);
                        console.log('-----------------------------------------------------');
                        console.log(typeof sorted);                             //sorted is an object here
                        sorted += arr[i][j];
                        console.log(typeof sorted);                             //sorted becomes a string here
                        sorted.sort();
                        console.log('-----------------------------------------------------');
                        console.log(sorted);
                    }
                }
                new_array.push(sorted);
                console.log(new_array);
            }
            console.log(new_array);
        }
        else {
            console.log("Invalid dimension");
        }
    }
    else {

    }
};