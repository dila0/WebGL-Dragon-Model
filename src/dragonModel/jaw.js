/**
 * @fileoverview Contains the left, middle, and right jaws.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var jawHeight = 0.5;
var jawWidth = 0.5;

var leftJawHeight = 0.5;
var leftJawWidth = 1.7;

// Function to initialize the left jaw
function initLeftJaw(){
    var m = mat4();
    m = translate(0.0, upperNeckHeight + 0.5 * leftJawHeight, 0.0);
    m = rotatePart(LEFT_JAW_ID, m);
    m = mult(m, translate(0.0, -0.5 * leftJawHeight, 0.0));
    
    figure[LEFT_JAW_ID] = createNode(m, renderLeftJaw, null, LEFT_HEAD_ID);
}

// Function to initialize the middle jaw
function initMidJaw(){
    var m = mat4();
    m = translate(0.0, upperNeckHeight + 0.5 * jawHeight, 0.0);
    m = rotatePart(MID_JAW_ID, m);
    m = mult(m, translate(0.0, -0.5 * jawHeight, 0.0));

    figure[MID_JAW_ID] = createNode(m, renderMidJaw, null, MID_HEAD_ID);
}   

// Function to initialize the right jaw
function initRightJaw(){
    var m = mat4();
    m = translate(0.0, upperNeckHeight + 0.5 * jawHeight, 0.0);
    m = rotatePart(RIGHT_JAW_ID, m);
    m = mult(m, translate(0.0, -0.5 * jawHeight, 0.0));

    figure[RIGHT_JAW_ID] = createNode(m, renderRightJaw, null, RIGHT_HEAD_ID);
}

// Function to render the left jaw
function renderLeftJaw(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * leftJawHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(leftJawWidth, leftJawHeight, leftJawWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0)));
    drawCylinder();

    // Mouth
    let mouthSphereMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * leftJawHeight, 1.0)); 
    mouthSphereMatrix = mult(mouthSphereMatrix, scale4(0.3, 0.25, 0.1)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(mouthSphereMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    drawSphere();

    // Teeth
    let tooth1Matrix = mult(modelViewMatrix, translate(-0.045, 0.65 * leftJawHeight, 1.05)); 
    tooth1Matrix = mult(tooth1Matrix, scale4(0.06, 0.09, 0.05)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tooth1Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0))); 
    drawCube();

    let tooth2Matrix = mult(modelViewMatrix, translate(0.045, 0.65 * leftJawHeight, 1.05)); 
    tooth2Matrix = mult(tooth2Matrix, scale4(0.06, 0.09, 0.05)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tooth2Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0))); 
    drawCube();
}

// Function to render the middle jaw
function renderMidJaw(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * jawHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(jawWidth, jawHeight, jawWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.424, 0.0, 1.0)));
    drawCylinder();
}

// Function to render the right jaw
function renderRightJaw(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * jawHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(jawWidth, jawHeight, jawWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.424, 0.0, 1.0)));
    drawCube();
}