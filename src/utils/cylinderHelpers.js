/**
 * @fileoverview Helper functions for the cylinder drawing.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

var slices = 15;
var cylinderOffset = 24;

var cylinderTextureVertices = [...Array(slices+1).keys()].flatMap(i => [[i/slices, 1], [i/slices, 0]]);

// Function to generate a circular face (top or bottom of the cylinder)
function generateCircle(radius, height, slices, top = true) {
    const angleStep = 2 * Math.PI / slices;
    const circleVertices = [];
    
    // Add the center of the circle (same point for top/bottom, depending on `top` flag)
    const y = top ? height / 2 : -height / 2;
    circleVertices.push(vec4(0.0, y, 0.0, 1.0)); // center of the circle

    // Add vertices around the perimeter of the circle
    for (let i = 0; i < slices; i++) {
        const angle = Math.PI / 2 + -i * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        circleVertices.push(vec4(x, y, z, 1.0)); // Calculate the point and add it to the circle
    }
    // Close the triangle fan by adding the center vertex at the end of the array
    circleVertices.push(circleVertices[1]);
    return circleVertices;
}

function side(a, b, c, d){
    pointsArray.push(cylinderVertices[a]);
    pointsArray.push(cylinderVertices[b]);
    pointsArray.push(cylinderVertices[c]);
    pointsArray.push(cylinderVertices[d]);
}

function textureSide(a, b, c, d){
    texCoordsArray.push(cylinderTextureVertices[a]);
    texCoordsArray.push(cylinderTextureVertices[b]);
    texCoordsArray.push(cylinderTextureVertices[c]);
    texCoordsArray.push(cylinderTextureVertices[d]);
}

function cylinder(){
    //Push top and bottom circles into pointsArray
    for(let i = 0; i < 2*(slices + 2); i++){
        pointsArray.push(cylinderVertices[i]);
        texCoordsArray.push(cylinderTextureVertices[0]);
    }
    //Push sides
    for(let i = 0; i < slices+1; i++){
        let top = i + 1;
        let bottom = slices + 2 + top;
        pointsArray.push(cylinderVertices[top]);
        pointsArray.push(cylinderVertices[bottom]);
        texCoordsArray.push(cylinderTextureVertices[i * 2]);
        texCoordsArray.push(cylinderTextureVertices[i * 2 + 1]);
    }
    //Example for 6 sides:
    // side(1, 2, 10, 9);
    // side(2, 3, 11, 10);
    // side(3, 4, 12, 11);
    // side(4, 5, 13, 12);
    // side(5, 6, 14, 13);
    // side(6, 1, 9, 14);
}

function drawCylinder(drawTop = true, drawBottom = true, topScale = 1.0){
    gl.uniform1f(gl.getUniformLocation(program, "uTopScale"), topScale);

    if(drawTop){
        gl.drawArrays(gl.TRIANGLE_FAN, cylinderOffset, slices+2);
    }
    if(drawBottom){
        gl.drawArrays(gl.TRIANGLE_FAN, cylinderOffset + slices+2, slices+2);
    }
    
    gl.drawArrays(gl.TRIANGLE_STRIP, cylinderOffset + (slices+2)*2, (slices+1) * 2);
}
