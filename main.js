/**
 * @fileoverview Main JS file containig the main logic.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

var canvas;
var gl;
var program;

var projectionMatrix;
var modelViewMatrix;

var instanceMatrix;

var modelViewMatrixLoc;

// IDs 
const LEFT_HEAD_ID = 0;
const MID_HEAD_ID = 1;
const RIGHT_HEAD_ID = 2;
const LEFT_JAW_ID = 3;
const MID_JAW_ID = 4;
const RIGHT_JAW_ID = 5;
const LEFT_UPPER_NECK_ID = 6;
const MID_UPPER_NECK_ID = 7;
const RIGHT_UPPER_NECK_ID = 8;
const LEFT_LOWER_NECK_ID = 9;
const MID_LOWER_NECK_ID = 10;
const RIGHT_LOWER_NECK_ID = 11;
const LEFT_UPPER_WING_ID = 12;
const RIGHT_UPPER_WING_ID = 13;
const LEFT_LOWER_WING_ID = 14;
const RIGHT_LOWER_WING_ID = 15;
const LEFT_HAND_ID = 16;
const RIGHT_HAND_ID = 17;
const BODY_ID = 18;
const LEFT_UPPER_LEG_ID = 19;
const RIGHT_UPPER_LEG_ID = 20;
const LEFT_LOWER_LEG_ID = 21;
const RIGHT_LOWER_LEG_ID = 22;
const LEFT_FOOT_ID = 23;
const RIGHT_FOOT_ID = 24;
const UPPER_TAIL_ID = 25;
const LOWER_TAIL_ID = 26;

var vertices = [
    
];