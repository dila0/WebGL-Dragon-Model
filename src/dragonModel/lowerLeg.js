/**
 * @fileoverview Contains the left and right lower legs.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var lowerLegHeight = 0.5;
var lowerLegWidth = 0.5;

// Function to initialize the left lower leg
function initLeftLowerLeg() {
    var m = mat4();
    figure[LEFT_LOWER_LEG_ID] = createNode(m, renderLeftLowerLeg, null, LEFT_FOOT_ID);
}

// Function to initialize the right lower leg
function initRightLowerLeg() {
    var m = mat4();
    figure[RIGHT_LOWER_LEG_ID] = createNode(m, renderRightLowerLeg, null, RIGHT_FOOT_ID);
}

// Function to render the left lower leg
function renderLeftLowerLeg() {

}

// Function to render the right lower leg
function renderRightLowerLeg() {

}