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
var cubeTextureVertices = [0, 1, 2, 3, 4, 5, 6].flatMap(i => [[i/6, 1], [i/6, 0]]);

// Function to draw a quad
function quad(a, b, c, d){
    pointsArray.push(cubeVertices[a]);
    pointsArray.push(cubeVertices[b]);
    pointsArray.push(cubeVertices[c]);
    pointsArray.push(cubeVertices[d]);
}

function textureQuad(a, b, c, d){
    texCoordsArray.push(cubeTextureVertices[a]);
    texCoordsArray.push(cubeTextureVertices[b]);
    texCoordsArray.push(cubeTextureVertices[c]);
    texCoordsArray.push(cubeTextureVertices[d]);
}

// Function to draw a cube
function cube(){
    quad(0, 1, 2, 3); // front
    quad(2, 3, 6, 7); // right
    quad(6, 7, 4, 5); // back
    quad(4, 5, 0, 1); // left
    quad(4, 0, 6, 2); // top
    quad(1, 5, 3, 7); // bottom

    textureQuad(0, 1, 2, 3);
    textureQuad(2, 3, 4, 5);
    textureQuad(4, 5, 6, 7);
    textureQuad(6, 7, 8, 9);
    textureQuad(8, 9, 10, 11);
    textureQuad(10, 11, 12, 13);
}

function drawCube(topScale = 1.0){
    gl.uniform1f(gl.getUniformLocation(program, "uTopScale"), topScale);
    
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_STRIP, cubeOffset + 4*i, 4);
    }
}