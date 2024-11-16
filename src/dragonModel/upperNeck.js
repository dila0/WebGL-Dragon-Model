/**
 * @fileoverview Contains the left, middle, and right upper neck.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var upperNeckHeight = 0.5;
var upperNeckWidth = 0.5;

// Function to initialize the left upper neck 
function initLeftUpperNeck() {
    var m = mat4();
    figure[LEFT_UPPER_NECK_ID] = createNode(m, renderLeftUpperNeck, null, LEFT_JAW_ID);
}

// Function to initialize the middle upper neck
function initMidUpperNeck() {
    var m = mat4();
    figure[MID_UPPER_NECK_ID] = createNode(m, renderMiddleUpperNeck, null, MIDDLE_JAW_ID);
}

// Function to initialize the right upper neck
function initRightUpperNeck() {
    var m = mat4();
    figure[RIGHT_UPPER_NECK_ID] = createNode(m, renderRightUpperNeck, null, RIGHT_JAW_ID);
}

// Function to render the left upper neck 
function renderLeftUpperNeck() {

}

// Function to render the middle upper neck
function renderMiddleUpperNeck() {

}

// Function to render the right upper neck
function renderRightUpperNeck() {

}