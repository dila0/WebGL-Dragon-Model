/**
 * @fileoverview Contains the left, middle, and right lower necks.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var lowerNeckHeight = 0.5;
var lowerNeckWidth = 0.5;

// Function to create the left lower neck
function initLeftLowerNeck(){
    var m = mat4();
    figure[LEFT_LOWER_NECK_ID] = createNode(m, renderLeftLowerNeck, MID_LOWER_NECK_ID, LEFT_UPPER_NECK_ID);
}

// Function to create the middle lower neck
function initMidLowerNeck(){
    var m = mat4();
    figure[MID_LOWER_NECK_ID] = createNode(m, renderMidLowerNeck, RIGHT_LOWER_NECK_ID, MID_UPPER_NECK_ID);
}

// Function to create the right lower neck
function initRightLowerNeck(){
    var m = mat4();
    figure[RIGHT_LOWER_NECK_ID] = createNode(m, renderRightLowerNeck, LEFT_UPPER_LEG_ID, RIGHT_UPPER_NECK_ID);
}

// Function to render the left lower neck
function renderLeftLowerNeck(){

}

// Function to render the middle lower neck
function renderMidLowerNeck(){

}

// Function to render the right lower neck
function renderRightLowerNeck(){

}