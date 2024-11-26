/**
 * @fileoverview Contains the lower tail.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var lowerTailHeight = 1.7;
var lowerTailWidth = 1.7;

var tinyTailStartHeight = 2;
var tinyTailStartWidth = 2;

// Function to initialize the lower tail
function initLowerTail(){
    var m = mat4();
    m = translate(0.0, 0.0, -0.5 * upperTailHeight);
    m = rotatePart(LOWER_TAIL_ID, m);
    m = mult(m, translate(0.0, -0.5 * lowerTailHeight, 0.0));
    
    figure[LOWER_TAIL_ID] = createNode(m, renderLowerTail, null, null);
}

// Function to render the lower tail
function renderLowerTail(){
    instanceMatrix = modelViewMatrix
    instanceMatrix = mult(instanceMatrix, scale4(lowerTailWidth, lowerTailWidth, lowerTailHeight));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.392, 0.0, 1.0)));
    setTexture(TEXTURES.dragon_neck);
    drawSphere();

    //Draw Tiny Tail Start
    let tinyTailStart = mult(modelViewMatrix, translate(0.0, 0.0, 0.0));
    tinyTailStart = mult(tinyTailStart, translate(0.0, -0.2 * tinyTailStartHeight, -0.6 * tinyTailStartWidth)); 
    tinyTailStart = mult(tinyTailStart, scale4(tinyTailStartWidth, tinyTailStartHeight, tinyTailStartWidth));
    
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tinyTailStart));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    setTexture(TEXTURES.dragon_neck);
    drawSphere();

    //Draw Tail Continue
    tinyTailStart = mult(tinyTailStart, translate(0.0, 0, -0.7)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tinyTailStart));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    setTexture(TEXTURES.dragon_neck);
    drawSphere();

    tinyTailStart = mult(tinyTailStart, translate(0.2, -0.3, -0.7)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tinyTailStart));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    setTexture(TEXTURES.dragon_neck);
    drawSphere();

    tinyTailStart = mult(tinyTailStart, translate(0.3, -0.1, -0.8)); 
    tinyTailStart = mult(tinyTailStart, scale4(1.5, 1.5, 1.5)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tinyTailStart));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    setTexture(TEXTURES.dragon_rock);
    drawSphere();
}