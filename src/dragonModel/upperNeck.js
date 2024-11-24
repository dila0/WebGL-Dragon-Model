/**
 * @fileoverview Contains the left, middle, and right upper neck.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var upperNeckHeight = 1.0;
var upperNeckWidth = 0.5;

var leftUpperNeckHeight = 1.0;
var leftUpperNeckWidth = 1.7;

// Function to initialize the left upper neck 
function initLeftUpperNeck() {
    var m = mat4();
    m = translate(0.0, lowerNeckHeight + 0.5 * leftUpperNeckHeight, 0.0);
    m = rotatePart(LEFT_UPPER_NECK_ID, m);
    m = mult(m, translate(0.0, -0.5 * leftUpperNeckHeight, 0.0));

    figure[LEFT_UPPER_NECK_ID] = createNode(m, renderLeftUpperNeck, null, LEFT_JAW_ID);
}

// Function to initialize the middle upper neck
function initMidUpperNeck() {
    var m = mat4();
    m = translate(0.0, lowerNeckHeight + 0.5 * upperNeckHeight, 0.0);
    m = rotatePart(MID_UPPER_NECK_ID, m);
    m = mult(m, translate(0.0, -0.5 * upperNeckHeight, 0.0));
    
    figure[MID_UPPER_NECK_ID] = createNode(m, renderMiddleUpperNeck, null, MID_JAW_ID);
}

// Function to initialize the right upper neck
function initRightUpperNeck() {
    var m = mat4();
    m = translate(0.0, lowerNeckHeight + 0.5 * upperNeckHeight, 0.0);
    m = rotatePart(RIGHT_UPPER_NECK_ID, m);
    m = mult(m, translate(0.0, -0.5 * upperNeckHeight, 0.0));
    
    figure[RIGHT_UPPER_NECK_ID] = createNode(m, renderRightUpperNeck, null, RIGHT_JAW_ID);
}

// Function to render the left upper neck 
function renderLeftUpperNeck() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * leftUpperNeckHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(leftUpperNeckWidth, leftUpperNeckHeight, leftUpperNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0)));
    drawCylinder();

    let frontStripMatrix = mult(modelViewMatrix, translate(-0.5, 0.5 * leftUpperNeckHeight, 0.9)); 
    frontStripMatrix = mult(frontStripMatrix, scale4(0.15, leftUpperNeckHeight, 0.05)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(frontStripMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.314, 0.396, 0.961, 1.0))); 
    drawCube();

    let frontStrip2Matrix = mult(modelViewMatrix, translate(0.5, 0.5 * leftUpperNeckHeight, 0.9)); 
    frontStrip2Matrix = mult(frontStrip2Matrix, scale4(0.15, leftUpperNeckHeight, 0.05)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(frontStrip2Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.314, 0.396, 0.961, 1.0))); 
    drawCube();
}

// Function to render the middle upper neck
function renderMiddleUpperNeck() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * upperNeckHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(upperNeckWidth, upperNeckHeight, upperNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.404, 0.812, 0.0, 1.0)));
    drawCylinder();
}

// Function to render the right upper neck
function renderRightUpperNeck() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * upperNeckHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(upperNeckWidth, upperNeckHeight, upperNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.404, 0.812, 0.0, 1.0)));
    drawCube();
}