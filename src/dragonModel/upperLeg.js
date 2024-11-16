/**
 * @fileoverview Contains the left and right upper legs.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var upperLegHeight = 0.5;
var upperLegWidth = 0.5;

// Function to initalize the left upper leg
function initLeftUpperLeg(){
    var m = mat4();
    figure[LEFT_UPPER_LEG_ID] = createNode(m, renderLeftUpperLeg, RIGHT_UPPER_LEG_ID, LEFT_LOWER_LEG_ID);
}

// Function to initialize the right upper leg
function initRightUpperLeg(){
    var m = mat4();
    figure[RIGHT_UPPER_LEG_ID] = createNode(m, renderRightUpperLeg, LEFT_UPPER_WING_ID, RIGHT_LOWER_LEG_ID);
}

// Function to render the left upper leg
function renderLeftUpperLeg(){

}

// Function to render the right upper leg
function renderRightUpperLeg(){

}