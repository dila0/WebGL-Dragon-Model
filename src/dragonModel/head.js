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
var headHeight = 3.0;
var headWidth = 0.5;

var leftHeadHeight = 1.0;
var leftHeadWidth = 1.7;

// Function to initialize the left head
function initLeftHead(){
    var m = mat4();
    m = translate(0.0, 0.5 * jawHeight + 0.5 * leftHeadHeight, 0.0);
    m = rotatePart(LEFT_HEAD_ID, m);

    figure[LEFT_HEAD_ID] = createNode(m, renderLeftHead, null, null);
}

// Function to initialize the middle head
function initMidHead(){
    var m = mat4();
    m = translate(0.0, 0.5 * jawHeight + 0.5 * headHeight, 0.0);
    m = rotatePart(MID_HEAD_ID, m);

    figure[MID_HEAD_ID] = createNode(m, renderMidHead, null, null);
}

// Function to initialize the right head
function initRightHead(){
    var m = mat4();
    m = translate(0.0, 0.5 * jawHeight + 0.5 * headHeight, 0.0);
    m = rotatePart(RIGHT_HEAD_ID, m);

    figure[RIGHT_HEAD_ID] = createNode(m, renderRightHead, null, null);
}

// Function to render the left head
function renderLeftHead(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(leftHeadWidth, leftHeadHeight, leftHeadWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0)));
    drawCylinder();

    // Upper head
    let sphereMatrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight, 0.0));
    sphereMatrix = mult(sphereMatrix, scale4(2.05, 2.05, 2.0)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphereMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0))); 
    drawSphere();
    
    // Back eye
    let sphere4Matrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.3, 1.0)); 
    sphere4Matrix = mult(sphere4Matrix, scale4(0.9, 0.9, 0.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere4Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0)));
    drawSphere();

    // Outer glasses
    let headWrapMatrix = mult(modelViewMatrix, translate(0, leftHeadHeight - 0.3 , -0.05));
    headWrapMatrix = mult(headWrapMatrix, scale4(1.8, 0.4, 1.8));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(headWrapMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    drawCylinder(false, false); 

    // Eye
    let sphere2Matrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.3, 1.0)); 
    sphere2Matrix = mult(sphere2Matrix, scale4(0.6, 0.6, 0.45)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere2Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0)));
    drawSphere();
    
    // Eye ball
    let sphere3Matrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.3, 1.2)); 
    sphere3Matrix = mult(sphere3Matrix, scale4(0.3, 0.3, 0.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere3Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    // Glasses
    let eyeCylinderMatrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.25, 0.8)); 
    eyeCylinderMatrix = mult(eyeCylinderMatrix, rotate(90, 1, 0, 0));
    eyeCylinderMatrix = mult(eyeCylinderMatrix, rotate(12, 1, 1, 0));
    eyeCylinderMatrix = mult(eyeCylinderMatrix, scale4(0.8, 0.8, 0.8)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(eyeCylinderMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.58, 0.588, 0.6, 1.0))); 
    drawCylinder(false, false); 

    
}

// Function to render the middle head
function renderMidHead(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(headWidth, headHeight, headWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.796, 0.0, 1.0)));
    drawCylinder();
}

// Function to render the right head
function renderRightHead(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(headWidth, headHeight, headWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.796, 0.0, 1.0)));
    drawCube();
}