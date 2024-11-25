const TEXTURES = {
    'background': {
        url: 'assets/background_image.png',
        id: 0
    },
    'test': {
        url: 'assets/test-cube-texture.png',
        id: 1
    },
    'dragon_neck': {
        url: 'assets/dragon_neck.png',
        id: 2
    },
    'dragon_head': {
        url: 'assets/dragon_head.png',
        id: 3
    },
    'dragon_bottom': {
        url: 'assets/bottom_head.png',
        id: 4
    },    
    'dragon_wings': {
        url: 'assets/dragon_wings.png',
        id: 5
    },
    'minion_body': {
        url: 'assets/minion_body.png',
        id: 6
    },
    'minion': {
        url: 'assets/minion.png',
        id: 7
    },
    'pants': {
        url: 'assets/pants.png',
        id: 8
    },
    'perry_body': {
        url: 'assets/perry_body.png',
        id: 9
    },
    'horn': {
        url: 'assets/horn.png',
        id: 10
    },
    'dragon_body': {
        url: 'assets/dragon_body.png',
        id: 11
    },
}

async function initTextures() {
    for (const value of Object.values(TEXTURES)) {
        await loadTexture(value.url, value.id);
    }
}

function loadTexture(url, id) {
    const texture = gl.createTexture();
    const image = new Image();
    image.setAttribute('crossorigin', 'anonymous');
    return new Promise(resolve => {
        image.onload = () => {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

            if (false && isPowerOf2(image.width) && isPowerOf2(image.height)) {
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
