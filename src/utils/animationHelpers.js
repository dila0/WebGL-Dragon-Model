/**
 * @fileoverview Animation helper functions
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Saves the current theta and translation values of the current keyframe.
function saveCurrKeyframe(){
    saveKeyframeButton.onclick = function () {
        keyframes.thetaVals.push(theta.slice());
        keyframes.translationVals.push([xTransVal, yTransVal, zTransVal]);
        console.log(keyframes);
    }
}

// Plays the latest saved keyframes.
function playCurrentKeyframe() {
    playCurrKFButton.onclick = function () {
        console.log("Playing keyframes...");
    }
}

// Resets the saved keyframes. 
function resetKeyFrames() {
    resetKFButton.onclick = function () {
        keyframes.thetaVals = [];
        keyframes.translationVals = [];
        console.log("Resetting keyframes...");
        console.log(keyframes);
    }
    
}