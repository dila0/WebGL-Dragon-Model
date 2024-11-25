/**
 * @fileoverview Contains the upper tail.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var upperTailHeight = 1.0;
var upperTailWidth = 0.3;

// Function to initialize the upper tail
function initUpperTail() {
    var m = mat4();
    m = translate(0.0, 0.0, -0.5 * bodyWidth);
    m = rotatePart(UPPER_TAIL_ID, m);
    m = mult(m, translate(0.0, 0.0, -0.5 * upperTailHeight));
    
    figure[UPPER_TAIL_ID] = createNode(m, renderUpperTail, null, LOWER_TAIL_ID);
}

// Function to render the upper tail
function renderUpperTail() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(upperTailWidth, upperTailWidth, upperTailHeight));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.059, 0.569, 0.82, 1.0)));
    drawCube();
}