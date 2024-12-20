/**
 * @fileoverview Contains the left, middle, and right heads.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var headHeight = 1.5;
var headWidth = 1.6;
var headDepth = 2.5;

var leftHeadHeight = 1.0;
var leftHeadWidth = 1.4;

var rightHeadHeight = 1.2;
var rightHeadWidth = 1.4;

// Function to initialize the left head
function initLeftHead(){
    var m = mat4();
    m = translate(0.0, 0.5 * leftJawHeight, 0.0);
    m = rotatePart(LEFT_HEAD_ID, m);
    m = mult(m, translate(0.0, 0.5 * leftHeadHeight, 0.0));

    figure[LEFT_HEAD_ID] = createNode(m, renderLeftHead, null, null);
}

// Function to initialize the middle head
function initMidHead(){
    var m = mat4();
    m = translate(0.0, 0.5 * jawHeight, 0.0);
    m = rotatePart(MID_HEAD_ID, m);
    m = mult(m, rotate(-15, 1, 0, 0));
    m = mult(m, translate(0.0, 0.5 * headHeight, 0.0));

    figure[MID_HEAD_ID] = createNode(m, renderMidHead, null, null);
}

// Function to initialize the right head
function initRightHead(){
    var m = mat4();
    m = translate(0.0, 0.5 * rightJawHeight, 0.0);
    m = rotatePart(RIGHT_HEAD_ID, m);
    m = mult(m, translate(0.0, 0.5 * rightHeadHeight, 0.0));

    figure[RIGHT_HEAD_ID] = createNode(m, renderRightHead, null, null);
}

// Function to render the left head
function renderLeftHead(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(leftHeadWidth, leftHeadHeight, leftHeadWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0)));
    setTexture(TEXTURES.minion_body, vec2(0.8, 0.5));
    drawCylinder();

    // Upper head
    let sphereMatrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight, 0.0));
    sphereMatrix = mult(sphereMatrix, scale4(1.6, 1.5, 1.8)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphereMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0))); 
    setTexture(TEXTURES.minion_body, vec2(0.8, 1.9));
    drawSphere();

    // Small cap
    let sphere5Matrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight + 0.6, 0.0));
    sphere5Matrix = mult(sphere5Matrix, scale4(0.8, 0.8, 0.8)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere5Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.416, 0.078, 0.078, 1.0))); 
    drawSphere();

    // Horns
    let leftHornMatrix = mult(modelViewMatrix, translate(-0.5, leftHeadHeight + 1.05, 0.0)); 
    leftHornMatrix = mult(leftHornMatrix, rotate(40, 0, 0, 1)); 
    leftHornMatrix = mult(leftHornMatrix, scale4(0.2, 0.6, 0.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(leftHornMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.416, 0.078, 0.078, 1.))); 
    drawCube(0.3);

    // Right horn
    let rightHornMatrix = mult(modelViewMatrix, translate(0.5, leftHeadHeight + 1.05, 0.0)); 
    rightHornMatrix = mult(rightHornMatrix, rotate(-40, 0, 0, 1)); 
    rightHornMatrix = mult(rightHornMatrix, scale4(0.2, 0.6, 0.2));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(rightHornMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.416, 0.078, 0.078, 1.))); 
    drawCube(0.3);
    
    // Back eye
    let sphere4Matrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.3, 1.0)); 
    sphere4Matrix = mult(sphere4Matrix, scale4(0.9, 0.9, 0.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere4Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.961, 0.878, 0.314, 1.0)));
    drawSphere();

    // Outer glasses
    let headWrapMatrix = mult(modelViewMatrix, translate(0, leftHeadHeight - 0.3 , -0.05));
    headWrapMatrix = mult(headWrapMatrix, scale4(1.5, 0.4, 1.5));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(headWrapMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.137, 0.122, 0.125, 1.0))); 
    drawCylinder(false, false); 

    // Eye
    let sphere2Matrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.3, 1.0)); 
    sphere2Matrix = mult(sphere2Matrix, scale4(0.6, 0.6, 0.45)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere2Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0)));
    drawSphere();
    
    // Eye ball
    let sphere3Matrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.3, 1.2)); 
    sphere3Matrix = mult(sphere3Matrix, scale4(0.3, 0.3, 0.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere3Matrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    // Glasses
    let eyeCylinderMatrix = mult(modelViewMatrix, translate(0.0, leftHeadHeight - 0.25, 0.8)); 
    eyeCylinderMatrix = mult(eyeCylinderMatrix, rotate(90, 1, 0, 0));
    eyeCylinderMatrix = mult(eyeCylinderMatrix, rotate(12, 1, 1, 0));
    eyeCylinderMatrix = mult(eyeCylinderMatrix, scale4(0.8, 0.8, 0.8)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(eyeCylinderMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.58, 0.588, 0.6, 1.0))); 
    drawCylinder(false, false);
}

// Function to render the middle head
function renderMidHead(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(headWidth, headHeight, headDepth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));

    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.086, 0.125, 0.376, 1.0)));
    setTexture(TEXTURES.dragon_bottom);
    drawCube();

    /// Left eye
    let sphere2Matrix = mult(modelViewMatrix, translate(-0.45, headHeight - 1.35, 1.3)); 
    sphere2Matrix = mult(sphere2Matrix, scale4(0.4, 0.36, 0.3)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere2Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0)));
    drawSphere();
    
    let sphere3Matrix = mult(modelViewMatrix, translate(-0.5, headHeight - 1.35, 1.4)); 
    sphere3Matrix = mult(sphere3Matrix, scale4(0.23, 0.23, 0.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere3Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    // Right eye
    let sphere4Matrix = mult(modelViewMatrix, translate(0.45, headHeight - 1.35, 1.3)); 
    sphere4Matrix = mult(sphere4Matrix, scale4(0.4, 0.36, 0.3)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere4Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0)));
    drawSphere();
    
    let sphere5Matrix = mult(modelViewMatrix, translate(0.5, headHeight - 1.35, 1.4)); 
    sphere5Matrix = mult(sphere5Matrix, scale4(0.23, 0.23, 0.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere5Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    // Nostrils
    let nostrilMatrix = mult(modelViewMatrix, translate(-0.2, headHeight - 1.9, 1.3)); 
    nostrilMatrix = mult(nostrilMatrix, scale4(0.2, 0.13, 0.3)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(nostrilMatrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    let nostril1Matrix = mult(modelViewMatrix, translate(0.2, headHeight - 1.9, 1.3)); 
    nostril1Matrix = mult(nostril1Matrix, scale4(0.2, 0.13, 0.3)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(nostril1Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    // Big horns
    const hornPositions = [-0.4, 0.4]; 
    const hornScale = vec3(0.2, 1.5, 0.4); 
    const hornColor = vec4(0.02, 0.22, 0.157, 1.0); 

    for (let i = 0; i < hornPositions.length; i++) {
        let hornMatrix = mult(modelViewMatrix, translate(hornPositions[i], leftHeadHeight + 0.3, 0.0)); 
        hornMatrix = mult(hornMatrix, scale4(hornScale[0], hornScale[1], hornScale[2])); 

        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(hornMatrix));
        setColor(hornColor);  
        setTexture(TEXTURES.horn);
        drawCylinder(true, true, 0.2); 
    }

    // Small horns
    const hornPositionsZ = [-1.2, -1.0, -0.8, -0.6, -0.4, 0.2, 0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2]; 
    const hornX = 0.0; 
    const hornScale2 = vec3(0.15, 0.45, 0.15); 
    const hornColor2 = vec4(0.5, 0.2, 0.0, 1.0); 

    // Loop to render each horn
    for (let i = 0; i < hornPositionsZ.length; i++) {
        let hornMatrix2 = mult(modelViewMatrix, translate(hornX, leftHeadHeight, hornPositionsZ[i]));
        hornMatrix2 = mult(hornMatrix2, scale4(hornScale2[0], hornScale2[1], hornScale2[2])); 

        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(hornMatrix2));
        setColor(hornColor2); 
        drawCylinder(true, true, 0.0); 
    }
}

// Function to render the right head
function renderRightHead(){
    instanceMatrix = modelViewMatrix;
    instanceMatrix = mult(instanceMatrix, scale4(rightHeadWidth, rightHeadHeight, rightHeadWidth));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.125, 0.643, 0.624, 1.0)));
    setTexture(TEXTURES.perry_body, vec2(0.8, 1.1));
    drawCube();

    // Left eye
    let sphere2Matrix = mult(modelViewMatrix, translate(-0.3, rightHeadHeight - 1.6, 0.7)); 
    sphere2Matrix = mult(sphere2Matrix, scale4(0.45, 0.40, 0.3)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere2Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0)));
    drawSphere();
    
    let sphere3Matrix = mult(modelViewMatrix, translate(-0.2, rightHeadHeight - 1.6, 0.85)); 
    sphere3Matrix = mult(sphere3Matrix, scale4(0.2, 0.2, 0.1)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere3Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    // Right eye
    let sphere4Matrix = mult(modelViewMatrix, translate(0.3, rightHeadHeight - 1.6, 0.7)); 
    sphere4Matrix = mult(sphere4Matrix, scale4(0.45, 0.40, 0.3)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere4Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(1.0, 1.0, 1.0, 1.0)));
    drawSphere();
    
    let sphere5Matrix = mult(modelViewMatrix, translate(0.4, rightHeadHeight - 1.6, 0.85)); 
    sphere5Matrix = mult(sphere5Matrix, scale4(0.2, 0.2, 0.1)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(sphere5Matrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.0, 0.0, 0.0, 1.0)));
    drawSphere();

    // Hat 
    let hatBrimMatrix = mult(modelViewMatrix, translate(0.0, rightHeadHeight - 0.6, 0.0)); 
    hatBrimMatrix = mult(hatBrimMatrix, scale4(2.0, 0.3, 2.0));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(hatBrimMatrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.337, 0.169, 0.208, 1.0))); 
    drawCube();

    // Hat Top 
    let hatTopMatrix = mult(modelViewMatrix, translate(0.0, rightHeadHeight - 0.3, 0.0)); 
    hatTopMatrix = mult(hatTopMatrix, scale4(1.4, 1.4, 1.4)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(hatTopMatrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.337, 0.169, 0.208, 1.0))); 
    drawSphere();

    // Hat Top 
    let hatMatrix = mult(modelViewMatrix, translate(0.0, rightHeadHeight - 0.4, 0.0)); 
    hatMatrix = mult(hatMatrix, scale4(1.2, 0.18, 1.2)); 
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(hatMatrix));
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(vec4(0.012, 0.012, 0.012, 1.0))); 
    drawCylinder(false, false);
}