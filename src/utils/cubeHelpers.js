/**
 * @fileoverview Helper functions for the cube drawing.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

var cubeOffset = 0;
// Function to draw a quad
function quad(a, b, c, d){
    pointsArray.push(cubeVertices[a]);
    pointsArray.push(cubeVertices[b]);
    pointsArray.push(cubeVertices[c]);
    pointsArray.push(cubeVertices[d]);
}

// Function to draw a cube
function cube(){
    quad(1, 0, 3, 2);
    quad(2, 3, 7, 6);
    quad(3, 0, 4, 7);
    quad(6, 5, 1, 2);
    quad(4, 5, 6, 7);
    quad(5, 4, 0, 1);
}

// Vertex cube initialization function
function initCubeBuffers(){
    cubeVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);

    var vPos = gl.getAttribLocation(program, "vPos");
    gl.vertexAttribPointer(vPos, 4, gl.FLOAT, false, 0, 0); 
    gl.enableVertexAttribArray(vPos);
}

function drawCube(){
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, cubeOffset + 4*i, 4);
    }
}