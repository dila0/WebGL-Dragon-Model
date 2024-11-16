/**
 * @fileoverview Contains the left and the right upper wings.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var upperWingHeight = 0.5;
var upperWingWidth = 0.5;

// Function to initialize the left upper wing node
function initLeftUpperWing() {
    var m = mat4();
    // fill for var m = mat4(), translate and mult
    figure[LEFT_UPPER_WING_ID] = createNode(m, renderLeftUpperWing, RIGHT_UPPER_WING_ID, LEFT_LOWER_WING_ID);
}

// Function to initialize the right upper wing node
function initRightUpperWing() {
    var m = mat4();
    figure[RIGHT_UPPER_WING_ID] = createNode(m, renderRightUpperWing, UPPER_TAIL_ID, RIGHT_LOWER_WING_ID);
}

// Function to render the left upper wing 
function renderLeftUpperWing() {

}

// Function to render the right upper wing
function renderRightUpperWing() {

}