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
    m = translate(-(0.5 * lowerWingWidth + 0.5 * handWidth), 0.0, 0.0);
    m = rotatePart(LEFT_HAND_ID, m);

    figure[LEFT_HAND_ID] = createNode(m, renderLeftHand, null, null);
}

// Function to initialize the right hand
function initRightHand() {
    var m = mat4();
    m = translate(0.5 * lowerWingWidth + 0.5 * handWidth, 0.0, 0.0);
    m = rotatePart(RIGHT_HAND_ID, m);

    figure[RIGHT_HAND_ID] = createNode(m, renderRightHand, null, null);
}

// Function to render the left hand
function renderLeftHand() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(handWidth, handHeight, handWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.0, 0.0, 1.0)));
    drawCube();
}

// Function to render the right hand
function renderRightHand() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(handWidth, handHeight, handHeight));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.0, 0.0, 1.0)));
    drawCube();
}