/**
 * @fileoverview Contains the left, middle, and right jaws.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var jawHeight = 0.8;
var jawWidth = 1.6;

var leftJawHeight = 0.5;
var leftJawWidth = 1.4;

var rightJawHeight = 0.8;
var rightJawWidth = 1.4;

// Function to initialize the left jaw
function initLeftJaw(){
    var m = mat4();
    m = translate(0.0, 0.5 * leftUpperNeckHeight, 0.0);
    m = rotatePart(LEFT_JAW_ID, m);
    m = mult(m, translate(0.0, 0.5 * leftJawHeight, 0.0));
    
    figure[LEFT_JAW_ID] = createNode(m, renderLeftJaw, null, LEFT_HEAD_ID);
}

// Function to initialize the middle jaw
function initMidJaw(){
    var m = mat4();
    m = translate(0.0, 0.5 * upperNeckHeight, 0.0);
    m = rotatePart(MID_JAW_ID, m);
    m = mult(m, translate(0.0, 0.5 * jawHeight, 0.0));

    figure[MID_JAW_ID] = createNode(m, renderMidJaw, null, MID_HEAD_ID);
}   

// Function to initialize the right jaw
function initRightJaw(){
    var m = mat4();
    m = translate(0.0, 0.5 * rightUpperNeckHeight, 0.0);
    m = rotatePart(RIGHT_JAW_ID, m);
    m = mult(m, translate(0.0, 0.5 * rightJawHeight, 0.0));

    figure[RIGHT_JAW_ID] = createNode(m, renderRightJaw, null, RIGHT_HEAD_ID);
}

// Function to render the left jaw
function renderLeftJaw(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(leftJawWidth, leftJawHeight, leftJawWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0)));
    drawCylinder();

    // Mouth
    let mouthSphereMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * leftJawHeight, 1.0)); 
    mouthSphereMatrix = mult(mouthSphereMatrix, scale4(0.3, 0.25, 0.1)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(mouthSphereMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    drawSphere();

    // Teeth
    let tooth1Matrix = mult(modelViewMatrix, translate(-0.045, 0.65 * leftJawHeight, 1.05)); 
    tooth1Matrix = mult(tooth1Matrix, scale4(0.06, 0.09, 0.05)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tooth1Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0))); 
    drawCube();

    let tooth2Matrix = mult(modelViewMatrix, translate(0.045, 0.65 * leftJawHeight, 1.05)); 
    tooth2Matrix = mult(tooth2Matrix, scale4(0.06, 0.09, 0.05)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(tooth2Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0))); 
    drawCube();
}

// Function to render the middle jaw
function renderMidJaw(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, translate(0.0, 0.0, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(jawWidth, jawHeight, headDepth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.086, 0.125, 0.376, 1.0)));
    setTexture(TEXTURES.dragon_head);
    drawCube();

    // Teeth 
    const toothCount = 5; 
    const toothSpacing = 0.2; 
    const toothSize = vec3(0.2, 0.3, 0.05); 

    for (let i = 0; i < toothCount; i++) {
        // Pos
        let toothMatrix = mult(modelViewMatrix, translate(
            jawWidth/2 - (i + 2) * toothSpacing, 
            0.5 * jawHeight,      
            0.5      
        ));
        toothMatrix = mult(toothMatrix, scale4(toothSize[0], toothSize[1], toothSize[2])); 

        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(toothMatrix));

        gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0))); // White color
        drawCube(0.5);
    }
}

// Function to render the right jaw
function renderRightJaw(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(rightJawWidth, rightJawHeight, rightJawWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.125, 0.643, 0.624, 1.0)));
    drawCube();

    // Mouth
    let mouthBaseMatrix = mult(modelViewMatrix, translate(0.0, -0.05, 0.7)); 
    mouthBaseMatrix = mult(mouthBaseMatrix, rotate(90, 1, 0, 0)); 
    mouthBaseMatrix = mult(mouthBaseMatrix, rotate(90, 0, 1, 0));
    mouthBaseMatrix = mult(mouthBaseMatrix, scale4(0.5, 0.2, 0.7)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(mouthBaseMatrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.98, 0.588, 0.29, 1.0)));
    drawCylinder(); 

    // Nose
    let mouthCylinderMatrix = mult(modelViewMatrix, translate(0.2, -0.1, 1.0)); 
    mouthCylinderMatrix = mult(mouthCylinderMatrix, rotate(90, 1, 0, 0));
    mouthCylinderMatrix = mult(mouthCylinderMatrix, rotate(-60, 0, 1, 1));
    mouthCylinderMatrix = mult(mouthCylinderMatrix, rotate(-45, 0, 1, 0));
    mouthCylinderMatrix = mult(mouthCylinderMatrix, scale4(0.25, 0.5, 0.4)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(mouthCylinderMatrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.545, 0.227, 1.0)));
    drawCylinder(true, true, 0.7);
}