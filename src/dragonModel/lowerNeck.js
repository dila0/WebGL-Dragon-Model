/**
 * @fileoverview Contains the left, middle, and right lower necks.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var leftLowerNeckHeight = 1.0;
var leftLowerNeckWidth = 1.7;

var lowerNeckHeight = 1.0;
var lowerNeckWidth = 0.5;
var neckSeparation = 2;

// Function to create the left lower neck
function initLeftLowerNeck(){
    var m = mat4();
    m = translate(-neckSeparation, 0.5 * bodyHeight + 0.5 * leftLowerNeckHeight, 0.0);
    m = rotatePart(LEFT_LOWER_NECK_ID, m);

    figure[LEFT_LOWER_NECK_ID] = createNode(m, renderLeftLowerNeck, MID_LOWER_NECK_ID, LEFT_UPPER_NECK_ID);
}

// Function to create the middle lower neck
function initMidLowerNeck(){
    var m = mat4();
    m = translate(0.0, 0.5 * bodyHeight + 0.5 * lowerNeckHeight, 0.0);
    m = rotatePart(MID_LOWER_NECK_ID, m);

    figure[MID_LOWER_NECK_ID] = createNode(m, renderMidLowerNeck, RIGHT_LOWER_NECK_ID, MID_UPPER_NECK_ID);
}

// Function to create the right lower neck
function initRightLowerNeck(){
    var m = mat4();
    m = translate(neckSeparation, 0.5 * bodyHeight + 0.5 * lowerNeckHeight, 0.0);
    m = rotatePart(RIGHT_LOWER_NECK_ID, m);

    figure[RIGHT_LOWER_NECK_ID] = createNode(m, renderRightLowerNeck, LEFT_UPPER_LEG_ID, RIGHT_UPPER_NECK_ID);
}

// Function to render the left lower neck
function renderLeftLowerNeck(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(leftLowerNeckWidth, leftLowerNeckHeight, leftLowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.314, 0.396, 0.961, 1.0)));
    drawCylinder();
}

// Function to render the middle lower neck
function renderMidLowerNeck(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(lowerNeckWidth, lowerNeckHeight, lowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.333, 0.0, 1.0)));
    drawCylinder();
}

// Function to render the right lower neck
function renderRightLowerNeck(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(lowerNeckWidth, lowerNeckHeight, lowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.333, 0.0, 1.0)));
    drawCube();
}