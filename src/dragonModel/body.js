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
var bodyHeight = 2.5;
var bodyWidth = 2.5;

// Function to initialize the body
function initBody(){
    var m = mat4();
    m = rotatePart(BODY_ID, m);
    figure[BODY_ID] = createNode(m, renderBody, null, LEFT_LOWER_NECK_ID);
}

// Function to render the body
function renderBody(){
    console.log("Rendering body...");
    instanceMatrix = mult(modelViewMatrix, translate(0.0, 0.5 * bodyHeight, 0.0));
    instanceMatrix = mult(instanceMatrix, scale4(bodyWidth, bodyHeight, bodyWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.753, 0.439, 0.0, 1.0)));
 
    pointsArray = [];
    //cube();
    cylinder();

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);

    // Create buffer for the cylinder
    let cylinderOffset = 0;
    for(var i = 0; i < 2; i++){
        gl.drawArrays(gl.TRIANGLE_FAN, cylinderOffset + (slices+2)*i, (slices+2));
    }
    // for(var i = 0; i < slices; i++){
    //     gl.drawArrays(gl.TRIANGLE_FAN, cylinderOffset + (2 * (slices+2)) + 4*i, 4);
    // }

    // for(var i = 0; i < 6; i++){
    //     gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    // }
}