/**
 * @fileoverview Contains the body.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var bodyHeight = 1;
var bodyWidth = 7;

var upperBodyHeight = 3;
var upperBodyWidth = 6;

var lowerBodyHeight = 11;
var lowerBodyWidth = 6;
var lowerBodyWidthX = 8;

var leftLegBaseHeight = 8;
var leftLegBaseWidth = 6;
var leftLegBaseWidthX = 2;

var rightLegBaseHeight = 8;
var rightLegBaseWidth = 2;
var rightLegBaseWidthX = 2;

// Function to initialize the body
function initBody(){
    var m = mat4();
    m = rotatePart(BODY_ID, m);
    m = mult(m, translate(0.0, 0.0, 0.0));
    figure[BODY_ID] = createNode(m, renderBody, null, LEFT_LOWER_NECK_ID);
}

// Function to render the body
function renderBody(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(upperBodyWidth, upperBodyHeight, 2));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.753, 0.439, 0.0, 1.0)));
    setTexture(TEXTURES.dragon_neck, vec2(15.0, 1.0), vec2(0.25, 0.0));
    drawCube();
}