/**
 * @fileoverview Contains the left, middle, and right heads.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var headHeight = 1.0;
var headWidth = 0.5;

// Function to initialize the left head
function initLeftHead(){
    var m = mat4();
    m = translate(0.0, jawHeight + 0.5 * headHeight, 0.0);
    m = rotatePart(LEFT_HEAD_ID, m);
    m = mult(m, translate(0.0, -0.5 * headHeight, 0.0));

    figure[LEFT_HEAD_ID] = createNode(m, renderLeftHead, null, null);
}

// Function to initialize the middle head
function initMidHead(){
    var m = mat4();
    m = translate(0.0, jawHeight + 0.5 * headHeight, 0.0);
    m = rotatePart(MID_HEAD_ID, m);
    m = mult(m, translate(0.0, -0.5 * headHeight, 0.0));

    figure[MID_HEAD_ID] = createNode(m, renderMidHead, null, null);
}

// Function to initialize the right head
function initRightHead(){
    var m = mat4();
    m = translate(0.0, jawHeight + 0.5 * headHeight, 0.0);
    m = rotatePart(RIGHT_HEAD_ID, m);
    m = mult(m, translate(0.0, -0.5 * headHeight, 0.0));

    figure[RIGHT_HEAD_ID] = createNode(m, renderRightHead, null, null);
}

// Function to render the left head
function renderLeftHead(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * headHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(headWidth, headHeight, headWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.796, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}

// Function to render the middle head
function renderMidHead(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * headHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(headWidth, headHeight, headWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.796, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}

// Function to render the right head
function renderRightHead(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * headHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(headWidth, headHeight, headWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.796, 0.0, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}