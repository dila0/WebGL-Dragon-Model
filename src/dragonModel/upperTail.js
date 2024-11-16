/**
 * @fileoverview Contains the upper tail.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Global variables
var upperTailHeight = 0.5;
var upperTailWidth = 0.5;

// Function to initialize the upper tail
function initUpperTail() {
    var m = mat4();
    // fill for var m = mat4(), translate and mult
    figure[UPPER_TAIL_ID] = createNode(m, renderUpperTail, null, LOWER_TAIL_ID);
}

// Function to render the upper tail
function renderUpperTail() {

}