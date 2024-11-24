/**
 * @fileoverview Contains the left and right lower legs.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var lowerLegHeight = 0.5;
var lowerLegWidth = 0.5;

// Function to initialize the left lower leg
function initLeftLowerLeg() {
    var m = mat4();
    m = translate(0.0, - 0.5 * upperLegHeight - 0.5 * lowerLegHeight, 0.0);
    m = rotatePart(LEFT_LOWER_LEG_ID, m);

    figure[LEFT_LOWER_LEG_ID] = createNode(m, renderLeftLowerLeg, null, LEFT_FOOT_ID);
}

// Function to initialize the right lower leg
function initRightLowerLeg() {
    var m = mat4();
    m = translate(0.0, - 0.5 * upperLegHeight - 0.5 * lowerLegHeight, 0.0);
    m = rotatePart(RIGHT_LOWER_LEG_ID, m);

    figure[RIGHT_LOWER_LEG_ID] = createNode(m, renderRightLowerLeg, null, RIGHT_FOOT_ID);
}

// Function to render the left lower leg
function renderLeftLowerLeg() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(lowerLegWidth, lowerLegHeight, lowerLegWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.804, 0.482, 0.89, 1.0)));
    drawCube();
}

// Function to render the right lower leg
function renderRightLowerLeg() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(lowerLegWidth, lowerLegHeight, lowerLegWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.804, 0.482, 0.89, 1.0)));
    drawCube();
}