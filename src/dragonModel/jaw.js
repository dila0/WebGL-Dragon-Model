/**
 * @fileoverview Contains the left, middle, and right jaws.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var jawHeight = 0.5;
var jawWidth = 0.5;

// Function to initialize the left jaw
function initLeftJaw(){
    var m = mat4();
    figure[LEFT_JAW_ID] = createNode(m, renderLeftJaw, null, LEFT_HAND_ID);
}

// Function to initialize the middle jaw
function initMidJaw(){
    var m = mat4();
    figure[MID_JAW_ID] = createNode(m, renderMidJaw, null, MID_HAND_ID);
}   

// Function to initialize the right jaw
function initRightJaw(){
    var m = mat4();
    figure[RIGHT_JAW_ID] = createNode(m, renderRightJaw, null, RIGHT_HAND_ID);
}

// Function to render the left jaw
function renderLeftJaw(){

}

// Function to render the middle jaw
function renderMidJaw(){

}

// Function to render the right jaw
function renderRightJaw(){

}