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
var bodyWidth = 8;

var upperBodyHeight = 3;
var upperBodyWidth = 6;

var lowerBodyHeight = 9;
var lowerBodyWidth = 9;
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
    m = mult(m, translate(0.0, 0.5 * upperBodyHeight, 0.0));
    figure[BODY_ID] = createNode(m, renderBody, null, LEFT_LOWER_NECK_ID);
}

// Function to render the body
function renderBody(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(upperBodyWidth, upperBodyHeight, 2));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.753, 0.439, 0.0, 1.0)));
    setTexture(TEXTURES.dragon_head, vec2(0.8,0.8), vec2(5,5))
    drawCube();

    // Lower Body
    let lowerBodySphereMatrix = mult(modelViewMatrix, translate(0.0, 0.0, 0.0));
    lowerBodySphereMatrix = mult(lowerBodySphereMatrix, translate(0.0, -0.2*lowerBodyHeight, -0.2*(lowerBodyWidth - upperBodyWidth))); 
    lowerBodySphereMatrix = mult(lowerBodySphereMatrix, scale4(lowerBodyWidthX, lowerBodyHeight, lowerBodyWidth));
    
     
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(lowerBodySphereMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    setTexture(TEXTURES.dragon_head, vec2(1.3,1.3), vec2(4,3))
    drawSphere();

}