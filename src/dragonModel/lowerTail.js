/**
 * @fileoverview Contains the lower tail.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var lowerTailHeight = 0.5;
var lowerTailWidth = 0.5;

// Function to initialize the lower tail
function initLowerTail(){
    var m = mat4();
    figure[LOWER_TAIL_ID] = createNode(m, renderLowerTail, null, null);
}

// Function to render the lower tail
function renderLowerTail(){
    
}