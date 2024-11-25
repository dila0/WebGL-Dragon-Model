const TEXTURES = {
    'background': {
        url: 'assets/background_image.png',
        id: 0
    },
    'test': {
        url: 'assets/test-cube-texture.png',
        id: 1
    }
}

async function initTextures() {
    for (const value of Object.values(TEXTURES)) {
        await loadTexture(value.url, value.id);
    }
}

function loadTexture(url, id) {
    const texture = gl.createTexture();
    const image = new Image();
    return new Promise(resolve => {
        image.onload = () => {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

            if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
                gl.generateMipmap(gl.TEXTURE_2D);
            } else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }
            resolve();
        };
        image.src = url;
    });
}

function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}
