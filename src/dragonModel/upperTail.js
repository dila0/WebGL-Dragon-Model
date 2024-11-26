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
var upperTailHeight = 4;
var upperTailWidth = 1.5;

// Function to initialize the upper tail
function initUpperTail() {
    var m = mat4();
    m = translate(0.0, - 0.8 * bodyHeight, -0.5 * bodyWidth);
    m = rotatePart(UPPER_TAIL_ID, m);
    m = mult(m, translate(0.0, 0.0, 0.5 * upperTailWidth + 0.2));
    
    figure[UPPER_TAIL_ID] = createNode(m, renderUpperTail, null, LOWER_TAIL_ID);
}

// Function to render the upper tail
function renderUpperTail() {
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, rotate(-90, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, rotate(-40, 1, 0, 0));

    instanceMatrix = mult(instanceMatrix, scale4(upperTailWidth, upperTailHeight, upperTailWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.059, 0.569, 0.82, 1.0)));
    setTexture(TEXTURES.dragon_neck, vec2(2.2,1.2));
    drawCylinder(true, true, 0.6);
}