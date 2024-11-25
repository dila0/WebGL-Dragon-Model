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

var cubeVertices = [
    vec4(-0.5,  0.5,  0.5, 1.0),
    vec4(-0.5, -0.5,  0.5, 1.0),
    vec4( 0.5,  0.5,  0.5, 1.0),
    vec4( 0.5, -0.5,  0.5, 1.0),
    vec4(-0.5,  0.5, -0.5, 1.0),
    vec4(-0.5, -0.5, -0.5, 1.0),
    vec4( 0.5,  0.5, -0.5, 1.0),
    vec4( 0.5, -0.5, -0.5, 1.0),
];

// Function to draw a quad
function quad(a, b, c, d){
    pointsArray.push(cubeVertices[a]);
    pointsArray.push(cubeVertices[b]);
    pointsArray.push(cubeVertices[c]);
    pointsArray.push(cubeVertices[d]);
}

// Function to draw a cube
function cube(){
    quad(0, 1, 2, 3); // front
    quad(2, 3, 6, 7); // right
    quad(6, 7, 4, 5); // back
    quad(4, 5, 0, 1); // left
    quad(4, 0, 6, 2); // top
    quad(1, 5, 3, 7); // bottom
}

// Vertex cube initialization function
function initCubeBuffers(){
    cubeVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);
}

function drawCube(){
    var vPos = gl.getAttribLocation(program, "vPos");
    gl.vertexAttribPointer(vPos, 4, gl.FLOAT, false, 0, 0); 
    gl.enableVertexAttribArray(vPos);

    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_STRIP, cubeOffset + 4*i, 4);
    }
}