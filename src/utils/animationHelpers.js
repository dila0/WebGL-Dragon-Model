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
function animate(duration = 1000) {
    if (keyframes.thetaVals.length < 2) {
        console.log("At least two keyframes are required to animate.");
        return;
    }

    let currentFrame = 0;
    const totalFrames = keyframes.thetaVals.length - 1;
    const steps = Math.floor((60 * duration) / 1000); // Number of steps
    const interval = duration / (steps * totalFrames); // Time interval

    let currentStep = 0;
    let interpolatedTheta = [];
    let interpolatedTranslation = [];

    function interpolateKeyframes(startTheta, endTheta, startTranslation, endTranslation) {
        const thetaSteps = insert(startTheta.flat(), endTheta.flat(), steps);
        const translationSteps = insert(startTranslation, endTranslation, steps);

        return { thetaSteps, translationSteps };
    }

    function interpolate() {
        if (currentFrame >= totalFrames) {
            console.log("Animation complete.");
            return;
        }

        if (currentStep === 0) {
            // Start end keyframes
            const startTheta = keyframes.thetaVals[currentFrame];
            const endTheta = keyframes.thetaVals[currentFrame + 1];
            const startTranslation = keyframes.translationVals[currentFrame];
            const endTranslation = keyframes.translationVals[currentFrame + 1];

            // Interpolation
            const { thetaSteps, translationSteps } = interpolateKeyframes(
                startTheta,
                endTheta,
                startTranslation,
                endTranslation
            );

            interpolatedTheta = thetaSteps;
            interpolatedTranslation = translationSteps;
        }
        // TODO: Fix
        theta = interpolatedTheta[currentStep].map((value, index) => {
            return [value, value, value]; 
        });

        [xTransVal, yTransVal, zTransVal] = interpolatedTranslation[currentStep];

        render();

        currentStep++;

        if (currentStep >= steps) {
            currentFrame++;
            currentStep = 0;
        }

        setTimeout(() => requestAnimationFrame(interpolate), interval);
    }

    console.log("Starting animation...");
    interpolate();
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