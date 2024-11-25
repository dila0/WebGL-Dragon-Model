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
var upperLegHeight = 7;
var upperLegWidth = 7;
var upperLegWidthX = 2;
var legSeparation = 0.5;

// Function to initalize the left upper leg
function initLeftUpperLeg(){
    var m = mat4();
    m = translate(-legSeparation, -0.2 * lowerBodyHeight, 0.0);
    m = rotatePart(LEFT_UPPER_LEG_ID, m);
    m = mult(m, translate(0.0, -0.5 * upperLegHeight, 0.0));

    figure[LEFT_UPPER_LEG_ID] = createNode(m, renderLeftUpperLeg, RIGHT_UPPER_LEG_ID, LEFT_LOWER_LEG_ID);
}

// Function to initialize the right upper leg
function initRightUpperLeg(){
    var m = mat4();
    m = translate(legSeparation, -0.2 * lowerBodyHeight, 0.0);
    m = rotatePart(RIGHT_UPPER_LEG_ID, m);
    m = mult(m, translate(0.0, -0.5 * upperLegHeight, 0.0));

    figure[RIGHT_UPPER_LEG_ID] = createNode(m, renderRightUpperLeg, LEFT_UPPER_WING_ID, RIGHT_LOWER_LEG_ID);
}

// Function to render the left upper leg
function renderLeftUpperLeg(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, translate(-0.3 * bodyWidth, 0.0, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(upperLegWidthX, upperLegHeight, upperLegWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.651, 0.0, 1.0)));
    drawSphere();
}

// Function to render the right upper leg
function renderRightUpperLeg(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, translate(0.3 * bodyWidth, 0.0, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(upperLegWidthX, upperLegHeight, upperLegWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.651, 0.0, 1.0)));
    console.log("rendering");
    
    drawSphere();
}