/**
 * @fileoverview Main JS file containig the main logic.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

var canvas;
var gl;
var program;

var projectionMatrix;
let left = -20.0, right = 20.0;
    let bottom = -20.0, myTop = 20.0;
    let near = -100.0, far = 100.0;
    let zoomFactor = 0.7;

var modelViewMatrix;

var instanceMatrix;

var modelViewMatrixLoc;

// IDs 
const LEFT_HEAD_ID = 0;
const MID_HEAD_ID = 1;
const RIGHT_HEAD_ID = 2;
const LEFT_JAW_ID = 3;
const MID_JAW_ID = 4;
const RIGHT_JAW_ID = 5;
const LEFT_UPPER_NECK_ID = 6;
const MID_UPPER_NECK_ID = 7;
const RIGHT_UPPER_NECK_ID = 8;
const LEFT_LOWER_NECK_ID = 9;
const MID_LOWER_NECK_ID = 10;
const RIGHT_LOWER_NECK_ID = 11;
const LEFT_UPPER_WING_ID = 12;
const RIGHT_UPPER_WING_ID = 13;
const LEFT_LOWER_WING_ID = 14;
const RIGHT_LOWER_WING_ID = 15;
const LEFT_HAND_ID = 16;
const RIGHT_HAND_ID = 17;
const BODY_ID = 18;
const LEFT_UPPER_LEG_ID = 19;
const RIGHT_UPPER_LEG_ID = 20;
const LEFT_LOWER_LEG_ID = 21;
const RIGHT_LOWER_LEG_ID = 22;
const LEFT_FOOT_ID = 23;
const RIGHT_FOOT_ID = 24;
const UPPER_TAIL_ID = 25;
const LOWER_TAIL_ID = 26;

// Mapping
const bodyPartNames = {
    0: "Left Head",
    1: "Middle Head",
    2: "Right Head",
    3: "Left Jaw",
    4: "Middle Jaw",
    5: "Right Jaw",
    6: "Left Upper Neck",
    7: "Middle Upper Neck",
    8: "Right Upper Neck",
    9: "Left Lower Neck",
    10: "Middle Lower Neck",
    11: "Right Lower Neck",
    12: "Left Upper Wing",
    13: "Right Upper Wing",
    14: "Left Lower Wing",
    15: "Right Lower Wing",
    16: "Left Hand",
    17: "Right Hand",
    18: "Body",
    19: "Left Upper Leg",
    20: "Right Upper Leg",
    21: "Left Lower Leg",
    22: "Right Lower Leg",
    23: "Left Foot",
    24: "Right Foot",
    25: "Upper Tail",
    26: "Lower Tail"
}

var topCylinderCircleVertices = generateCircle(0.6, 1.0, slices, true);
var bottomCylinderCircleVertices = generateCircle(0.6, 1.0, slices, false);
var cylinderVertices = topCylinderCircleVertices.concat(bottomCylinderCircleVertices);
console.log(cylinderVertices);

var numNodes = 27;
var numAngles = 28;

// Angles
var theta = new Array(numNodes);
for(var i = 0; i < theta.length; i++) {
    theta[i] = new Array(3).fill(0);
}

var numVertices = 0; // TODO: fill
var stack = [];
var figure = [];

for(var i = 0; i < numNodes; i++) {
    figure[i] = createNode(null, null, null, null);
}

var cubeVBuffer;
var texCoordsBuffer;
var modelViewLoc;

var pointsArray = [];
var texCoordsArray = [];

// Keyframes for animations
var keyframes = {
    thetaVals: [],
    translationVals: [],
};

// Sliders
const limbSelect = document.getElementById("limbSelect");
const selectedBodyPart = document.getElementById("selectedBodyPart");

// Rotation
const xRotation = document.getElementById("xRotation");
const yRotation = document.getElementById("yRotation");
const zRotation = document.getElementById("zRotation");

const xRotValue = document.getElementById("xValue");
const yRotValue = document.getElementById("yValue");
const zRotValue = document.getElementById("zValue");

const resetRotX = document.getElementById("resetX");
const resetRotY = document.getElementById("resetY");
const resetRotZ = document.getElementById("resetZ");
const resetRotAll = document.getElementById("resetAll");

const rotationVal = document.getElementById("rotationVals");

var xRotVal = 0.0;
var yRotVal = 0.0;
var zRotVal = 0.0;

//  Translation
const xTranslation = document.getElementById("xTranslation");
const yTranslation = document.getElementById("yTranslation");

const xTransValue = document.getElementById("xTransValue");
const yTransValue = document.getElementById("yTransValue");

const resetTransX = document.getElementById("resetTransX");
const resetTransY = document.getElementById("resetTransY");
const resetTransAll = document.getElementById("resetTransAll");

const translationVal = document.getElementById("translationVals");
const resetButton = document.getElementById("resetButton");

var xTransVal = 0.0;
var yTransVal = 0.0;

let cameraRotationX = 0.0; 
let cameraRotationY = 0.0; 
let cameraRotationZ = 0.0; 

// Animation
const saveKeyframeButton = document.getElementById("save-keyframe");
const playCurrKFButton = document.getElementById("play-curr-keyframe");
const resetKFButton = document.getElementById("reset-keyframes");
const saveAnimationButton = document.getElementById("save-button");
const loadAnimationButton = document.getElementById("load-button");
const flyButton = document.getElementById("fly-button");
const warButton = document.getElementById("war-button");

// Main function
window.onload = async function init() {
    canvas = document.getElementById('gl-canvas');

    gl = WebGLUtils.setupWebGL(canvas);
    if(!gl) {
        alert("WebGL isn't available");
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.0, 1.0, 1.0); 
    gl.enable(gl.DEPTH_TEST);

    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    initializeBuffers();
    await initTextures();

    instanceMatrix = mat4();

    projectionMatrix = ortho(left, right, bottom, myTop, near, far);
    modelViewMatrix = mat4();

    gl.uniformMatrix4fv(gl.getUniformLocation(program, "modelViewMatrix"), false, flatten(modelViewMatrix));
    gl.uniformMatrix4fv(gl.getUniformLocation(program, "projectionMatrix"), false, flatten(projectionMatrix));

    modelViewMatrixLoc = gl.getUniformLocation(program, "modelViewMatrix");

    // Update Sliders and Reset 
    updateRotations();
    resetRotations();
    updateTranslationValues();
    resetTranslations();

    // Animations
    saveCurrKeyframe();
    playCurrKFButton.onclick = function() {
        animate(200);
    }
    resetKeyFrames();
    saveAnimationButton.addEventListener("click", saveAnimation);
    loadAnimationButton.addEventListener("change", loadAnimation);
    resetButton.addEventListener("click", resetZoomAndCamera);

    // Flying animation
    flyButton.addEventListener("click", function () {
        fetch("animations/flying_animation.json")
            .then((response) => response.json())
            .then((animationData) => {
                keyframes.thetaVals = animationData.thetaVals;
                keyframes.translationVals = animationData.translationVals;
    
                animate(400);
            })
            .catch((error) => {
                console.error("Error loading flying animation:", error);
            });
    });

    // War animation
    warButton.addEventListener("click", function () {
        fetch("animations/war_prep.json")
            .then((response) => response.json())
            .then((animationData) => {
                keyframes.thetaVals = animationData.thetaVals;
                keyframes.translationVals = animationData.translationVals;
    
                animate(300);
            })
            .catch((error) => {
                console.error("Error loading war animation:", error);
            });
    });

    window.addEventListener("keydown", function (event) {
        const rotationStep = 5.0; // Degrees to rotate per key press
    
        switch (event.key) {
            case "ArrowLeft": 
                cameraRotationY -= rotationStep;
                break;
            case "ArrowRight": 
                cameraRotationY += rotationStep;
                break;
            case "ArrowUp": 
                cameraRotationX -= rotationStep;
                break;
            case "ArrowDown": 
                cameraRotationX += rotationStep;
                break;
            case "q": 
                cameraRotationZ -= rotationStep;
                break;
            case "e": 
                cameraRotationZ += rotationStep;
                break;
        }
    
        renderOnce(); // Re-render the scene with updated rotation
    });

    canvas.addEventListener("wheel", function (event) {
        event.preventDefault();
    
        // Adjust zoom factor
        if (event.deltaY < 0) {
            // Zoom in (scroll up)
            console.log("zoom in");
            
            zoomFactor *= 0.9; // Reduce the bounds
            if (zoomFactor < 0.1) zoomFactor = 0.1; // Minimum zoom level
        } else {
            // Zoom out (scroll down)
            console.log("zoom out");
            zoomFactor *= 1.1; // Expand the bounds
            if (zoomFactor > 5.0) zoomFactor = 5.0; // Maximum zoom level
        }
    
        // Update the projection matrix with the new zoom factor
        updateProjectionMatrix();
    
        // Re-render the scene
        renderOnce();
    });

    for(var i = 0; i < numNodes; i++) initNodes(i);
    render();
}

// Render function
var render = function() {
    renderOnce()
    requestAnimationFrame(render);
}

function updateProjectionMatrix() {
    const zoomedLeft = left * zoomFactor;
    const zoomedRight = right * zoomFactor;
    const zoomedBottom = bottom * zoomFactor;
    const zoomedTop = myTop * zoomFactor;

    projectionMatrix = ortho(zoomedLeft, zoomedRight, zoomedBottom, zoomedTop, near, far);
    gl.uniformMatrix4fv(gl.getUniformLocation(program, "projectionMatrix"), false, flatten(projectionMatrix));
}

function resetZoomAndCamera() {
    // Reset zoom factor
    zoomFactor = 0.7;

    // Reset camera rotations
    cameraRotationX = 0.0;
    cameraRotationY = 0.0;
    cameraRotationZ = 0.0;

    // Update the projection matrix
    updateProjectionMatrix();
    renderOnce();
}

var renderOnce = function(){
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    modelViewMatrix = mat4();
    modelViewMatrix = mult(modelViewMatrix, rotate(cameraRotationX, [1, 0, 0])); // Rotate around X-axis
    modelViewMatrix = mult(modelViewMatrix, rotate(cameraRotationY, [0, 1, 0])); // Rotate around Y-axis
    modelViewMatrix = mult(modelViewMatrix, rotate(cameraRotationZ, [0, 0, 1])); // Rotate around Z-axis

    // Apply object translation
    modelViewMatrix = mult(modelViewMatrix, translate(xTransVal, yTransVal, 0.0));
    updateProjectionMatrix();
    renderBackground();
    traverse(BODY_ID);
}

