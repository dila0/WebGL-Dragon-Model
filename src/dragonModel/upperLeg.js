/**
 * @fileoverview Contains the left and right upper legs.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var upperLegHeight = 4;
var upperLegWidth = 1.5;
var legSeparation = 1.5;

// Function to initalize the left upper leg
function initLeftUpperLeg(){
    var m = mat4();
    m = translate(-legSeparation, -0.5 * bodyWidth, 0.0);
    m = rotatePart(LEFT_UPPER_LEG_ID, m);

    figure[LEFT_UPPER_LEG_ID] = createNode(m, renderLeftUpperLeg, RIGHT_UPPER_LEG_ID, LEFT_LOWER_LEG_ID);
}

// Function to initialize the right upper leg
function initRightUpperLeg(){
    var m = mat4();
    m = translate(legSeparation, -0.5 * bodyWidth, 0.0);
    m = rotatePart(RIGHT_UPPER_LEG_ID, m);

    figure[RIGHT_UPPER_LEG_ID] = createNode(m, renderRightUpperLeg, LEFT_UPPER_WING_ID, RIGHT_LOWER_LEG_ID);
}

// Function to render the left upper leg
function renderLeftUpperLeg(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, rotate(180, 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4(upperLegWidth, upperLegHeight, upperLegWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.651, 0.0, 1.0)));
    setTexture(TEXTURES.dragon_head, vec2(0.6, 1.0));
    drawCylinder(true, true, 0.6);
}

// Function to render the right upper leg
function renderRightUpperLeg(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, rotate(180, 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4(upperLegWidth, upperLegHeight, upperLegWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.651, 0.0, 1.0)));
    setTexture(TEXTURES.dragon_head, vec2(0.6, 1.0));
    drawCylinder(true, true, 0.6);
}