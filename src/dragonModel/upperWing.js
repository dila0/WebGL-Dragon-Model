/**
 * @fileoverview Contains the left and the right upper wings.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var upperWingHeight = 0.7;
var upperWingWidth = 1.0;

// Function to initialize the left upper wing node
function initLeftUpperWing() {
    var m = mat4();
    m = translate(-(0.5 * bodyWidth + 0.5 * upperWingWidth), 0.5 * bodyHeight - upperWingHeight, 0.0);
    m = mult(m, rotate(theta[LEFT_UPPER_WING_ID], 1, 0, 0));
    m = mult(m, translate(0.0, 0.5 * upperWingHeight, 0.0));

    figure[LEFT_UPPER_WING_ID] = createNode(m, renderLeftUpperWing, RIGHT_UPPER_WING_ID, LEFT_LOWER_WING_ID);
}

// Function to initialize the right upper wing node
function initRightUpperWing() {
    var m = mat4();
    m = translate(0.5 * bodyWidth + 0.5 * upperWingWidth, 0.5 * bodyHeight - upperWingHeight, 0.0);
    m = mult(m, rotate(theta[LEFT_UPPER_WING_ID], 1, 0, 0));
    m = mult(m, translate(0.0, 0.5 * upperWingHeight, 0.0));
    
    figure[RIGHT_UPPER_WING_ID] = createNode(m, renderRightUpperWing, UPPER_TAIL_ID, RIGHT_LOWER_WING_ID);
}

// Function to render the left upper wing 
function renderLeftUpperWing() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * upperWingHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(upperWingWidth, upperWingHeight, upperWingWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 1.0, 0.937, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}

// Function to render the right upper wing
function renderRightUpperWing() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * upperWingHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(upperWingWidth, upperWingHeight, upperWingWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 1.0, 0.937, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}