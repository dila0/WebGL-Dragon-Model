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
var handHeight = 0.32;
var handWidth = 0.32;

// Function to initialize the left hand
function initLeftHand() {
    var m = mat4();
    m = translate(-0.5 * lowerWingHeight, 0.0, 0.0);
    m = rotatePart(LEFT_HAND_ID, m);
    m = mult(m, rotate(-120, 0, 0, 1));
    m = mult(m, translate(0.2 * handHeight, -0.5 * handWidth, 0.0));

    figure[LEFT_HAND_ID] = createNode(m, renderLeftHand, null, null);
}

// Function to initialize the right hand
function initRightHand() {
    var m = mat4();
    m = translate(0.5 * lowerWingHeight, 0.0, 0.0);
    m = rotatePart(RIGHT_HAND_ID, m);
    m = mult(m, rotate(120, 0, 0, 1));
    m = mult(m, translate(-0.2 * handHeight, - 0.5 * handWidth, 0.0));

    figure[RIGHT_HAND_ID] = createNode(m, renderRightHand, null, null);
}

// Function to render the left hand
function renderLeftHand() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(handWidth, handHeight, handWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.463, 0.208, 0.251, 1.0)));
    drawSphere();

    const coneScale = vec3(0.15, 0.4, 0.2); 

    let finger1Matrix = mult(modelViewMatrix, translate(0.0, -0.5 * handHeight, 0.0)); 
    finger1Matrix = mult(finger1Matrix, rotate(180, 0, 0, 1));
    finger1Matrix = mult(finger1Matrix, scale4(coneScale[0], coneScale[1], coneScale[2])); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(finger1Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.631, 0.608, 0.596, 1.0))); 
    drawCube(0.5);

    let finger2Matrix = mult(modelViewMatrix, translate(-0.5 * handWidth, -0.5 * handHeight, 0.0)); 
    finger2Matrix = mult(finger2Matrix, rotate(-45, 0, 0, 1));
    finger2Matrix = mult(finger2Matrix, rotate(180, 0, 0, 1));
    finger2Matrix = mult(finger2Matrix, scale4(coneScale[0], coneScale[1], coneScale[2])); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(finger2Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.631, 0.608, 0.596, 1.0)));
    drawCube(0.5);

    let finger3Matrix = mult(modelViewMatrix, translate(0.5 * handWidth, -0.5 * handHeight, 0.0)); 
    finger3Matrix = mult(finger3Matrix, rotate(45, 0, 0, 1));
    finger3Matrix = mult(finger3Matrix, rotate(180, 0, 0, 1));
    finger3Matrix = mult(finger3Matrix, scale4(coneScale[0], coneScale[1], coneScale[2])); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(finger3Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.631, 0.608, 0.596, 1.0))); 
    drawCube(0.5);
}

// Function to render the right hand
function renderRightHand() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(handWidth, handHeight, handHeight));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.463, 0.208, 0.251, 1.0)));
    drawSphere();

    const coneScale = vec3(0.15, 0.4, 0.2); 

    let finger1Matrix = mult(modelViewMatrix, translate(0.0, -0.5 * handHeight, 0.0)); 
    finger1Matrix = mult(finger1Matrix, rotate(180, 0, 0, 1));
    finger1Matrix = mult(finger1Matrix, scale4(coneScale[0], coneScale[1], coneScale[2])); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(finger1Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.631, 0.608, 0.596, 1.0))); 
    drawCube(0.5);

    let finger2Matrix = mult(modelViewMatrix, translate(-0.5 * handWidth, -0.5 * handHeight, 0.0)); 
    finger2Matrix = mult(finger2Matrix, rotate(-45, 0, 0, 1));
    finger2Matrix = mult(finger2Matrix, rotate(180, 0, 0, 1));
    finger2Matrix = mult(finger2Matrix, scale4(coneScale[0], coneScale[1], coneScale[2])); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(finger2Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.631, 0.608, 0.596, 1.0)));
    drawCube(0.5);

    let finger3Matrix = mult(modelViewMatrix, translate(0.5 * handWidth, -0.5 * handHeight, 0.0)); 
    finger3Matrix = mult(finger3Matrix, rotate(45, 0, 0, 1));
    finger3Matrix = mult(finger3Matrix, rotate(180, 0, 0, 1));
    finger3Matrix = mult(finger3Matrix, scale4(coneScale[0], coneScale[1], coneScale[2])); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(finger3Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.631, 0.608, 0.596, 1.0))); 
    drawCube(0.5);
}