/**
 * @fileoverview Helper functions for the cylinder drawing.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

var sphereOffset = 118;
var sphereDensity = 15;
var sphereRadius = 0.5;

function sphere() {
    const slices = sphereDensity * 2;
    const verts = sphereDensity;
    const sliceStep = 2 * Math.PI / slices;
    const vertStep = Math.PI / verts;
    const vertOffset = Math.PI / 2;

    // Generate the vertices of the sphere
    for (let slice = 0; slice < slices; slice++) {
        // Get the left and right angles of the slice
        let sliceAngle1 = slice * sliceStep;
        let sliceAngle2 = (slice + 1) * sliceStep;
        for (let vert = 0; vert <= verts; vert++) {
            let vertAngle = vertOffset + vert * vertStep;

            let x1 = sphereRadius * Math.cos(vertAngle) * Math.cos(sliceAngle1);
            let y1 = sphereRadius * Math.sin(vertAngle);
            let z1 = sphereRadius * Math.cos(vertAngle) * Math.sin(sliceAngle1);

            let x2 = sphereRadius * Math.cos(vertAngle) * Math.cos(sliceAngle2);
            let y2 = sphereRadius * Math.sin(vertAngle);
            let z2 = sphereRadius * Math.cos(vertAngle) * Math.sin(sliceAngle2);

            pointsArray.push([x1, y1, z1, 1.0]);
            pointsArray.push([x2, y2, z2, 1.0]);
        }
    }
}

function drawSphere() {
    for (let i = 0; i < sphereDensity * 2; i++) {
        gl.drawArrays(gl.TRIANGLE_STRIP, sphereOffset + (sphereDensity + 1) * 2 * i, (sphereDensity + 1) * 2);
    }
}
