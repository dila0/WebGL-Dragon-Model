/**
 * @fileoverview Contains the left and right lower wings.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var lowerWingHeight = 0.5;
var lowerWingWidth = 0.5;  

// Function to create the left lower wing
function initLeftLowerWing(){
    var m = mat4();
    figure[LEFT_LOWER_WING_ID] = createNode(m, renderLeftLowerWing, null, LEFT_HAND_ID);
}

// Function to create the right lower wing
function initRightLowerWing(){
    var m = mat4();
    figure[RIGHT_LOWER_WING_ID] = createNode(m, renderRightLowerWing, null, RIGHT_HAND_ID);
}

// Function to render the left lower wing
function renderLeftLowerWing(){

}

// Function to render the right lower wing
function renderRightLowerWing(){

}