/**
 * @fileoverview Contains the left and right feet.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var footHeight = 0.5;
var footWidth = 0.5;

// Function to initialize the left foot
function initLeftFoot() {
    var m = mat4();
    figure[LEFT_FOOT_ID] = createNode(m, renderLeftFoot, null, null);
}

// Function to initialize the right foot
function initRightFoot() {
    var m = mat4();
    figure[RIGHT_FOOT_ID] = createNode(m, renderRightFoot, null, null);
}

// Function to render the left foot
function renderLeftFoot() {

}

// Function to render the right foot
function renderRightFoot() {

}