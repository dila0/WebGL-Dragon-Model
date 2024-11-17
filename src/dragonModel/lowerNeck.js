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
var lowerNeckHeight = 1.0;
var lowerNeckWidth = 0.5;
var neckSeparation = 0.8;

// Function to create the left lower neck
function initLeftLowerNeck(){
    var m = mat4();
    m = translate(-neckSeparation, bodyHeight + 0.5 * lowerNeckHeight, 0.0);
    m = mult(m, rotate(theta[LEFT_LOWER_NECK_ID], 1, 0, 0));
    m = mult(m, translate(0.0, -0.5 * lowerNeckHeight, 0.0));

    figure[LEFT_LOWER_NECK_ID] = createNode(m, renderLeftLowerNeck, MID_LOWER_NECK_ID, LEFT_UPPER_NECK_ID);
}

// Function to create the middle lower neck
function initMidLowerNeck(){
    var m = mat4();
    m = translate(0.0, bodyHeight + 0.5 * lowerNeckHeight, 0.0);
    m = mult(m, rotate(theta[MID_LOWER_NECK_ID], 1, 0, 0));
    m = mult(m, translate(0.0, -0.5 * lowerNeckHeight, 0.0));

    figure[MID_LOWER_NECK_ID] = createNode(m, renderMidLowerNeck, RIGHT_LOWER_NECK_ID, MID_UPPER_NECK_ID);
}

// Function to create the right lower neck
function initRightLowerNeck(){
    var m = mat4();
    m = translate(neckSeparation, bodyHeight + 0.5 * lowerNeckHeight, 0.0);
    m = mult(m, rotate(theta[RIGHT_LOWER_NECK_ID], 1, 0, 0));
    m = mult(m, translate(0.0, -0.5 * lowerNeckHeight, 0.0));

    figure[RIGHT_LOWER_NECK_ID] = createNode(m, renderRightLowerNeck, LEFT_UPPER_LEG_ID, RIGHT_UPPER_NECK_ID);
}

// Function to render the left lower neck
function renderLeftLowerNeck(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5*lowerNeckHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(lowerNeckWidth, lowerNeckHeight, lowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.333, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}

// Function to render the middle lower neck
function renderMidLowerNeck(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5*lowerNeckHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(lowerNeckWidth, lowerNeckHeight, lowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.333, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}

// Function to render the right lower neck
function renderRightLowerNeck(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5*lowerNeckHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(lowerNeckWidth, lowerNeckHeight, lowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.333, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}