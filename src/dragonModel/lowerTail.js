/**
 * @fileoverview Contains the lower tail.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var lowerTailHeight = 0.5;
var lowerTailWidth = 1.5;

// Function to initialize the lower tail
function initLowerTail(){
    var m = mat4();
    m = translate(0.0, - 0.5 * bodyHeight + 0.5 * upperTailHeight, -(0.5 * bodyWidth - 0.82 * lowerTailWidth));
    theta[LOWER_TAIL_ID][0] = 90;
    m = rotatePart(LOWER_TAIL_ID, m);
    m = mult(m, translate(0.0, -0.5 * lowerTailHeight, 0.0));
    
    figure[LOWER_TAIL_ID] = createNode(m, renderLowerTail, null, null);
}

// Function to render the lower tail
function renderLowerTail(){
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * lowerTailHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(lowerTailWidth, lowerTailHeight, lowerTailWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 0.392, 0.0, 1.0)));
    drawCube();
}