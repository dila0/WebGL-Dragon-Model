/**
 * @fileoverview Contains the left and right hands.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var handHeight = 0.5;
var handWidth = 0.5;

// Function to initialize the left hand
function initLeftHand() {
    var m = mat4();
    figure[LEFT_HAND_ID] = createNode(m, renderLeftHand, null, null);
}

// Function to initialize the right hand
function initRightHand() {
    var m = mat4();
    figure[RIGHT_HAND_ID] = createNode(m, renderRightHand, null, null);
}

// Function to render the left hand
function renderLeftHand() {

}

// Function to render the right hand
function renderRightHand() {

}