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