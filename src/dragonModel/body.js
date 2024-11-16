/**
 * @fileoverview Contains the body.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables 
var bodyHeight = 1.5;
var bodyWidth = 1.5;

// Function to initialize the body
function initBody(){
    var m = mat4();
    figure[BODY_ID] = createNode(m, renderBody, null, LEFT_LOWER_NECK_ID);
}

// Function to render the body
function renderBody(){

}