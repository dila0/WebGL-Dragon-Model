/**
 * @fileoverview Body part initialization helper functions
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

function initNodesForAll(){
    for(let i = 0; i < numNodes; i++){
        initNodes(i);
    }
}

// Update selected body part
function updateSelectedBodyPart() {
    let selectedLimb = limbSelect.value;

    xRotation.value = theta[selectedLimb][0];
    xRotVal = parseFloat(xRotation.value);
    xRotValue.textContent = xRotVal.toFixed(1);

    yRotation.value = theta[selectedLimb][1];
    yRotVal = parseFloat(yRotation.value);
    yRotValue.textContent = yRotVal.toFixed(1);

    zRotation.value = theta[selectedLimb][2];
    zRotVal = parseFloat(zRotation.value);
    zRotValue.textContent = zRotVal.toFixed(1);
    
    let bodyPartName = bodyPartNames[selectedLimb];
    selectedBodyPart.textContent = `Selected Part: ${bodyPartName}`;
    selectedLimb = parseFloat(limbSelect.value);
}

function initializeBuffers() {
    pointsArray = [];
    texCoordsArray = [];
    cube();
    cylinder();
    sphere();
    initBackground();

    let vPos = gl.getAttribLocation(program, "vPos");
    let cubeVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);
    gl.vertexAttribPointer(vPos, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPos);

    let vTexCoord = gl.getAttribLocation(program, "vTexCoord");
    let texCoordsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW);
    gl.vertexAttribPointer(vTexCoord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vTexCoord);
}

function setColor(color) {
    gl.uniform4fv(gl.getUniformLocation(program, "uColor"), flatten(color));
}

function setTexture(texture, repeat = vec2(1, 1)) {
    setColor(vec4(0, 0, 0, -1));
    gl.uniform2fv(gl.getUniformLocation(program, "uTexRepeat"), flatten(repeat));
    gl.uniform1i(gl.getUniformLocation(program, "uTexture"), texture.id || texture);
}