/**
 * @fileoverview Background image render helper functions.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

var backgroundOffset;

function initBackground() {
    backgroundOffset = pointsArray.length;
    pointsArray.push(
        vec4(-1, -1, 0, 1),
        vec4(1, -1, 0, 1),
        vec4(-1,  1, 0, 1),
        vec4(1,  1, 0, 1),
    );
    texCoordsArray.push(
        vec2(0, 0),
        vec2(1, 0),
        vec2(0, 1),
        vec2(1, 1),
    );
}

function renderBackground() {
    gl.uniform1f(gl.getUniformLocation(program, "uTopScale"), 1.0);
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0, 0, 0, -1.0)));
    gl.uniform1i(gl.getUniformLocation(program, "uTexture"), TEXTURES.background.id);
    
    gl.uniformMatrix4fv(gl.getUniformLocation(program, "modelViewMatrix"), false, flatten(mat4()));
    gl.uniformMatrix4fv(gl.getUniformLocation(program, "projectionMatrix"), false, flatten(mat4()));

    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.TRIANGLE_STRIP, backgroundOffset, 4);
    gl.enable(gl.DEPTH_TEST);
    gl.uniformMatrix4fv(gl.getUniformLocation(program, "projectionMatrix"), false, flatten(projectionMatrix));
}

