/**
 * @fileoverview Matrix calculation helper functions
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Function to scale 3x3 matrix to 4
function scale4(a, b, c) {
    var result = mat4();
    result[0][0] = a;
    result[1][1] = b;
    result[2][2] = c;
    return result;
}

// Function to insert keyframes in steps
function insert(start, end, step){
    res = [];
    for (let i = 0; i < step; i++){
        temp = [];
        for (let j = 0; j < start.length; j++){
            console.log("Type of array element: " + typeof(start[j]));
            let interploatedValue = start[j] + (end[j] - start[j]) * i / step
            temp.push(interploatedValue);
        }
        res.push(temp);
    }
    res.push(end);
    return res;
}