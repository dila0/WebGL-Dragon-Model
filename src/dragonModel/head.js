/**
 * @fileoverview Contains the left, middle, and right heads.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var headHeight = 0.5;
var headWidth = 0.5;

// Function to initialize the left head
function initLeftHead(){
    var m = mat4();
    figure[LEFT_HEAD_ID] = createNode(m, renderLeftHead, null, null);
}

// Function to initialize the middle head
function initMidHead(){
    var m = mat4();
    figure[MID_HEAD_ID] = createNode(m, renderMidHead, null, null);
}

// Function to initialize the right head
function initRightHead(){
    var m = mat4();
    figure[RIGHT_HEAD_ID] = createNode(m, renderRightHead, null, null);
}

// Function to render the left head
function renderLeftHead(){

}

// Function to render the middle head
function renderMidHead(){

}

// Function to render the right head
function renderRightHead(){

}