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
    m = translate(0.0, 0.5 * bodyHeight, -(0.5 * bodyWidth + 0.5 * upperTailWidth));
    console.log("z upper tail: " + -(0.5 * bodyWidth + upperTailWidth));
    m = mult(m, rotate(180, 0, 1, 1)); // add upper tail rotation theta
    m = mult(m, translate(0.0, -0.5 * upperTailHeight, 0.0));
    
    figure[UPPER_TAIL_ID] = createNode(m, renderUpperTail, null, LOWER_TAIL_ID);
}

// Function to render the upper tail
function renderUpperTail() {
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * upperTailHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(upperTailWidth, upperTailHeight, upperTailWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.059, 0.569, 0.82, 1.0)));
    for(var i = 0; i < 6; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
}