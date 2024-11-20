/**
 * @fileoverview Any helper function that are required.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Create Node function for the hiearchy
function createNode(transform, render, sibling, child) {
    return {
        transform: transform,
        render: render,
        sibling: sibling,
        child: child,
    };
}

// Function to scale 3x3 matrix to 4
function scale4(a, b, c) {
    var result = mat4();
    result[0][0] = a;
    result[1][1] = b;
    result[2][2] = c;
    return result;
}

// Function to traverse the tree
function traverse(id){
    if(id == null) return;
    stack.push(modelViewMatrix);
    modelViewMatrix = mult(modelViewMatrix, figure[id].transform);
    figure[id].render();
    if(figure[id].child != null) traverse(figure[id].child);
    modelViewMatrix = stack.pop();
    if(figure[id].sibling != null) traverse(figure[id].sibling);
}

// Init nodes function containing the initializer functions
function initNodes(id){
    id = parseInt(id)
    switch(id){
        case LEFT_HEAD_ID:
            initLeftHead();
            break;
        
        case MID_HEAD_ID:
            initMidHead();
            break;
        
        case RIGHT_HEAD_ID:
            initRightHead();
            break;

        case LEFT_JAW_ID:
            initLeftJaw();
            break;
        
        case MID_JAW_ID:
            initMidJaw();
            break;
        
        case RIGHT_JAW_ID:
            initRightJaw();
            break;
        
        case LEFT_UPPER_NECK_ID:
            initLeftUpperNeck();
            break;
        
        case MID_UPPER_NECK_ID:
            initMidUpperNeck();
            break;
        
        case RIGHT_UPPER_NECK_ID:
            initRightUpperNeck();
            break;
        
        case LEFT_LOWER_NECK_ID:
            initLeftLowerNeck();
            break;
        
        case MID_LOWER_NECK_ID:
            initMidLowerNeck();
            break;
        
        case RIGHT_LOWER_NECK_ID:
            initRightLowerNeck();
            break;
        
        case LEFT_UPPER_WING_ID:
            initLeftUpperWing();
            break;
        
        case RIGHT_UPPER_WING_ID:
            initRightUpperWing();
            break;
        
        case LEFT_LOWER_WING_ID:
            initLeftLowerWing();
            break;

        case RIGHT_LOWER_WING_ID:
            initRightLowerWing();
            break;

        case LEFT_HAND_ID:
            initLeftHand();
            break;
        
        case RIGHT_HAND_ID:
            initRightHand();
            break;

        case BODY_ID:
            initBody();
            break;

        case LEFT_UPPER_LEG_ID:
            initLeftUpperLeg();
            break;
        
        case RIGHT_UPPER_LEG_ID:
            initRightUpperLeg();
            break;
        
        case LEFT_LOWER_LEG_ID:
            initLeftLowerLeg();
            break;
        
        case RIGHT_LOWER_LEG_ID:
            initRightLowerLeg();
            break;

        case LEFT_FOOT_ID:
            initLeftFoot();
            break;
        
        case RIGHT_FOOT_ID:
            initRightFoot();
            break;

        case UPPER_TAIL_ID:
            initUpperTail();
            break;
        
        case LOWER_TAIL_ID:
            initLowerTail();
            break;

        default:
            console.error("Invalid ID: " + id);
            break;
    }
}


// Function to draw a quad
function quad(a, b, c, d){
    pointsArray.push(cubeVertices[a]);
    pointsArray.push(cubeVertices[b]);
    pointsArray.push(cubeVertices[c]);
    pointsArray.push(cubeVertices[d]);
}

// Function to draw a cube
function cube(){
    quad(1, 0, 3, 2);
    quad(2, 3, 7, 6);
    quad(3, 0, 4, 7);
    quad(6, 5, 1, 2);
    quad(4, 5, 6, 7);
    quad(5, 4, 0, 1);
}

// Rotation Function
function rotatePart(id, m){
    m = mult(m, rotate(theta[id][0], 1, 0, 0));
    m = mult(m, rotate(theta[id][1], 0, 1, 0));
    m = mult(m, rotate(theta[id][2], 0, 0, 1));
    return m;
}

// Update selected body part
function updateSelectedBodyPart() {
    let selectedLimb = limbSelect.value;

    xRotation.value = theta[selectedLimb][0];
    xVal = parseFloat(xRotation.value);
    xValue.textContent = xVal.toFixed(1);

    yRotation.value = theta[selectedLimb][1];
    yVal = parseFloat(yRotation.value);
    yValue.textContent = yVal.toFixed(1);

    zRotation.value = theta[selectedLimb][2];
    zVal = parseFloat(zRotation.value);
    zValue.textContent = zVal.toFixed(1);
    
    let bodyPartName = bodyPartNames[selectedLimb];
    selectedBodyPart.textContent = `Selected Part: ${bodyPartName}`;
    selectedLimb = parseFloat(limbSelect.value);
}

// Update rotation values
function updateRotationValues() {
      // Slider values
      const x = xRotation.value;
      const y = yRotation.value;
      const z = zRotation.value;

      // Parse to float
      const xFloat = Number(x);
      const yFloat = Number(y);
      const zFloat = Number(z);
      
      theta[limbSelect.value][0] = xFloat;
      theta[limbSelect.value][1] = yFloat;
      theta[limbSelect.value][2] = zFloat;
    
      initNodes(limbSelect.value);

      // Display rotation values
      rotationVal.textContent = `Rotation Values: x: ${xFloat}, y: ${yFloat}, z: ${zFloat}`;
}

// Reset rotations function
function resetRotations(){
    resetX.addEventListener("click", () => {
        xRotation.value = 0.0;
        xVal = 0.0;
        xValue.textContent = xVal;
        updateRotationValues();
    });
    resetY.addEventListener("click", () => {
        yRotation.value = 0.0;
        yVal = 0.0;
        yValue.textContent = yVal;
        updateRotationValues();
    });
    resetZ.addEventListener("click", () => {
        zRotation.value = 0.0;
        zVal = 0.0;
        zValue.textContent = zVal;
        updateRotationValues();
    });
}

// Update Sliders function
function updateSliders() {
    limbSelect.onchange = updateSelectedBodyPart;
    xRotation.oninput = updateRotationValues;
    yRotation.oninput = updateRotationValues;
    zRotation.oninput = updateRotationValues;

    // Sliders
    xRotation.addEventListener("input", (event) =>{
        xVal = parseFloat(event.target.value);
        xValue.textContent = xVal.toFixed(1);
    });

    yRotation.addEventListener("input", (event) =>{
        yVal = parseFloat(event.target.value);
        yValue.textContent = yVal.toFixed(1);
    });

    zRotation.addEventListener("input", (event) =>{
        zVal = parseFloat(event.target.value);
        zValue.textContent = zVal.toFixed(1);
    });
}

// Vertex cube initialization function
function initCubeBuffers(){
    cubeVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);

    var vPos = gl.getAttribLocation(program, "vPos");
    gl.vertexAttribPointer(vPos, 4, gl.FLOAT, false, 0, 0); 
    gl.enableVertexAttribArray(vPos);
}