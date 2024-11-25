/**
 * @fileoverview Contains the left, middle, and right lower necks.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var leftLowerNeckHeight = 1.0;
var leftLowerNeckWidth = 1.4;

var rightLowerNeckHeight = 0.7;
var rightLowerNeckWidth = 1.4;

var lowerNeckHeight = 1.2;
var lowerNeckWidth = 1.5;

var neckSeparation = 3;

// Function to create the left lower neck
function initLeftLowerNeck(){
    var m = mat4();
    m = translate(-neckSeparation, 0.5 * bodyHeight, 0.0);
    m = rotatePart(LEFT_LOWER_NECK_ID, m);
    m = mult(m, translate(0.0, 0.5 * leftLowerNeckHeight, 0.0));

    figure[LEFT_LOWER_NECK_ID] = createNode(m, renderLeftLowerNeck, MID_LOWER_NECK_ID, LEFT_UPPER_NECK_ID);
}

// Function to create the middle lower neck
function initMidLowerNeck(){
    var m = mat4();
    m = translate(0.0, 0.5 * bodyHeight, 0.0);
    m = rotatePart(MID_LOWER_NECK_ID, m);
    m = mult(m, translate(0.0, 0.5 * lowerNeckHeight, 0.0));

    figure[MID_LOWER_NECK_ID] = createNode(m, renderMidLowerNeck, RIGHT_LOWER_NECK_ID, MID_UPPER_NECK_ID);
}

// Function to create the right lower neck
function initRightLowerNeck(){
    var m = mat4();
    m = translate(neckSeparation, 0.5 * bodyHeight, 0.0);
    m = rotatePart(RIGHT_LOWER_NECK_ID, m);
    m = mult(m, translate(0.0, 0.5 * rightLowerNeckHeight, 0.0));

    figure[RIGHT_LOWER_NECK_ID] = createNode(m, renderRightLowerNeck, LEFT_UPPER_LEG_ID, RIGHT_UPPER_NECK_ID);
}

// Function to render the left lower neck
function renderLeftLowerNeck(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(leftLowerNeckWidth, leftLowerNeckHeight, leftLowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.314, 0.396, 0.961, 1.0)));
    setTexture(TEXTURES.pants, vec2(2.0, 1.0), vec2(0.5, 0.0));
    drawCylinder();
}

// Function to render the middle lower neck
function renderMidLowerNeck(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(lowerNeckWidth, lowerNeckHeight, lowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.086, 0.125, 0.376, 1.0)));
    setTexture(TEXTURES.dragon_head);
    drawCube(0.8);

    const paletteCount = 6; 
    const paletteSpacing = 0.25; 
    const paletteScale = vec3(0.25, 0.15, 0.8); 

    for (let i = 0; i < paletteCount; i++) {
        let paletteMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * lowerNeckHeight - i * paletteSpacing, -0.7));
        paletteMatrix = mult(paletteMatrix, scale4(paletteScale[0], paletteScale[1], paletteScale[2]));

        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(paletteMatrix));

        gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.5, 0.2, 0.0, 1.0)));
        drawCube(0.0);
    }
}

// Function to render the right lower neck
function renderRightLowerNeck(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(rightLowerNeckWidth, rightLowerNeckHeight, rightLowerNeckWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.125, 0.643, 0.624, 1.0)));
    drawCube();
}