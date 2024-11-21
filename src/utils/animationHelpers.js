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
        console.log("keyframes saved");
    }
}

// Plays the latest saved keyframes.
function playCurrentKeyframe(currKf) {
    playCurrKFButton.onclick = function () {
        console.log("Playing keyframes...");
        console.log(keyframes);
        const keyframeThetas = currKf.thetaVals;
        const keyframeTranslations = currKf.translationVals;

        if(keyframeThetas.length < 2 || keyframeTranslations.length < 2){
            console.log("Not enough keyframes to play.");
            return;
        }

        let tempThetas = [];
        let tempTranslations = [];

        // Push thetas to the temporary array
        for(let i = 0; i < keyframeThetas.length - 1; i++){
            tempThetas.push(...insert(keyframeThetas[i], keyframeThetas[i+1], 50));
            console.log(tempThetas);
        }

        // Push translations to the temporary array
        for (let i = 0; i < keyframeTranslations.length - 1; i++){
            tempTranslations.push(...insert(keyframeTranslations[i], keyframeTranslations[i+1], 50));
            console.log(tempTranslations);
        }

        // Play the keyframes
        let frameIndex = 0;
        let currInterval = setInterval(() => {
            if(frameIndex >= tempThetas.length){
                clearInterval(currInterval);
                console.log("Keyframes played.");
                return;
            }
            for(let i = 0; i < tempThetas[frameIndex].length; i++){
                theta[i] = tempThetas[frameIndex][i];
            }
            xTransVal = tempTranslations[frameIndex][0];
            yTransVal = tempTranslations[frameIndex][1];
            zTransVal = tempTranslations[frameIndex][2];

            console.log(`[DEBUG] Updating frame ${frameIndex}:`);
            console.log("Theta:", theta);
            console.log("Translations:", [xTransVal, yTransVal, zTransVal]);

            for(let i = 0; i < numNodes; i++){
                initNodes(i);
            }
            frameIndex++;
        }, 50);
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