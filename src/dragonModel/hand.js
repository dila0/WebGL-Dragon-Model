/**
 * @fileoverview Contains the left and right hands.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var handHeight = 0.5;
var handWidth = 1.0;

// Function to initialize the left hand
function initLeftHand() {
    var m = mat4();
    m = translate(-(0.5 * lowerWingWidth + 0.5 * handWidth), 0.5 * lowerWingHeight - handHeight, 0.0);
    m = mult(m, rotate(theta[LEFT_HAND_ID], 1, 0, 0));
    m = mult(m, translate(0.0, 0.5 * handHeight, 0.0));

    figure[LEFT_HAND_ID] = createNode(m, renderLeftHand, null, null);
}

// Function to initialize the right hand
function initRightHand() {
    var m = mat4();
    m = translate(0.5 * lowerWingWidth + 0.5 * handWidth, 0.5 * lowerWingHeight - handHeight, 0.0);
    m = mult(m, rotate(theta[RIGHT_HAND_ID], 1, 0, 0));
    m = mult(m, translate(0.0, 0.5 * handHeight, 0.0));

    figure[RIGHT_HAND_ID] = createNode(m, renderRightHand, null, null);
}

// Function to render the left hand
function renderLeftHand() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * lowerWingHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(lowerWingWidth, lowerWingHeight, lowerWingWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.0, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    } 
}

// Function to render the right hand
function renderRightHand() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * lowerWingHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(lowerWingWidth, lowerWingHeight, lowerWingWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.0, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    } 
}