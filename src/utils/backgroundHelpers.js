/**
 * @fileoverview Background image render helper functions.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

function initBackground(gl) {
    const vertices = new Float32Array([
        -1, -1,
        1, -1,
        -1,  1,
        1,  1 
    ]);

    // Create buffer 
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Background texture
    const texture = gl.createTexture();
    const image = new Image();
    image.src = 'assets/background_image.png'; 
    image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.generateMipmap(gl.TEXTURE_2D);
    };

    return { buffer, texture };
}

function renderBackground(gl, program, buffer, texture) {
    gl.useProgram(program);

    const positionLoc = gl.getAttribLocation(program, "vPos");
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    // Bind the background texture
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    const textureLoc = gl.getUniformLocation(program, "uTexture");
    gl.uniform1i(textureLoc, 0);

    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.enable(gl.DEPTH_TEST);
}

