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
var footHeight = 0.5;
var footWidth = 0.7;

// Function to initialize the left foot
function initLeftFoot() {
    var m = mat4();
    m = translate(0.0, - lowerLegHeight + 0.5 * footHeight, 0.0);
    m = mult(m, rotate(theta[LEFT_FOOT_ID], 0, 0, 1));
    m = mult(m, translate(0.0, -0.5 * footHeight, 0.0)); 

    figure[LEFT_FOOT_ID] = createNode(m, renderLeftFoot, null, null);
}

// Function to initialize the right foot
function initRightFoot() {
    var m = mat4();
    m = translate(0.0, - lowerLegHeight + 0.5 * footHeight, 0.0);
    m = mult(m, rotate(theta[LEFT_FOOT_ID], 0, 0, 1));
    m = mult(m, translate(0.0, -0.5 * footHeight, 0.0)); 

    figure[RIGHT_FOOT_ID] = createNode(m, renderRightFoot, null, null);
}

// Function to render the left foot
function renderLeftFoot() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * footHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(footWidth, footHeight, footWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 1.0, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }   
}

// Function to render the right foot
function renderRightFoot() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * footHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(footWidth, footHeight, footWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 1.0, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    } 
}