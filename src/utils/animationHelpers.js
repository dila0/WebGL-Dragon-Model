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