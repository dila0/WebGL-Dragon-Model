/**
 * @fileoverview Contains the left and right feet.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var footHeight = 0.8;
var footWidth = 1.2;
var footDepth = 1.2;    

// Function to initialize the left foot
function initLeftFoot() {
    var m = mat4();
    m = translate(0.0, -0.5 * lowerLegHeight, 0.0);
    m = rotatePart(LEFT_FOOT_ID, m);
    m = mult(m, translate(0.0, -0.3 * footHeight, 0.0));

    figure[LEFT_FOOT_ID] = createNode(m, renderLeftFoot, null, null);
}

// Function to initialize the right foot
function initRightFoot() {
    var m = mat4();
    m = translate(0.0, -0.5 * lowerLegHeight, 0.0);
    m = rotatePart(RIGHT_FOOT_ID, m);
    m = mult(m, translate(0.0, -0.3 * footHeight, 0.0));

    figure[RIGHT_FOOT_ID] = createNode(m, renderRightFoot, null, null);
}

// Function to render the left foot
function renderLeftFoot() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(footWidth, footHeight, footDepth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 1.0, 0.0, 1.0)));
    setTexture(TEXTURES.horn)
    drawSphere();
}

// Function to render the right foot
function renderRightFoot() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(footWidth, footHeight, footDepth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 1.0, 0.0, 1.0)));
    setTexture(TEXTURES.horn)
    drawSphere();
}