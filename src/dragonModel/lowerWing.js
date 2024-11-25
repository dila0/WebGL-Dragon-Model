/**
 * @fileoverview Contains the left and right lower wings.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var lowerWingHeight = 4.1;
var lowerWingWidth = 2.1;  

// Function to create the left lower wing
function initLeftLowerWing(){
    var m = mat4();
    m = translate(-0.5 * upperWingHeight, 0.0, 0.0);
    m = rotatePart(LEFT_LOWER_WING_ID, m);
    m = mult(m, rotate(80, 0, 0, 1));
    m = mult(m, translate(-0.5 * lowerWingHeight, 0.0, 0.0));

    figure[LEFT_LOWER_WING_ID] = createNode(m, renderLeftLowerWing, null, LEFT_HAND_ID);
}

// Function to create the right lower wing
function initRightLowerWing(){
    var m = mat4();
    m = translate(0.5 * upperWingWidth, 0.0, 0.0);
    m = rotatePart(RIGHT_LOWER_WING_ID, m);
    m = mult(m, translate(0.5 * lowerWingWidth, 0.0, 0.0));

    figure[RIGHT_LOWER_WING_ID] = createNode(m, renderRightLowerWing, null, RIGHT_HAND_ID);
}

// Function to render the left lower wing
function renderLeftLowerWing(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, rotate(-90, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, rotate(90, 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4(lowerWingWidth, lowerWingHeight + 0.3, 0.3));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.4, 0.953, 1.0)));
    drawCube(0.5);
}

// Function to render the right lower wing
function renderRightLowerWing(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(lowerWingWidth, lowerWingHeight, 0.3));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.4, 0.953, 1.0)));
    drawCube(0.5);
}