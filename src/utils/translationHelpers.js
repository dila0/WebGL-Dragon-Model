/**
 * @fileoverview Translation implementation helper functions
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Translation values function
function updateTranslationValues() {
    xTransVal = parseFloat(xTranslation.value);
    yTransVal = parseFloat(yTranslation.value);

    xTransValue.textContent = xTransVal.toFixed(1);
    yTransValue.textContent = yTransVal.toFixed(1);

    translationVal.textContent = `Translation Values: x: ${xTransVal}, y: ${yTransVal}`;
}

// Reset Translations
function resetTranslations() {
    xTranslation.oninput = updateTranslationValues;
    yTranslation.oninput = updateTranslationValues;

    resetTransX.addEventListener("click", () => {
        xTranslation.value = 0;
        xTransVal = 0;
        xTransValue.textContent = xTransVal.toFixed(1);
        updateTranslationValues();
    });

    resetTransY.addEventListener("click", () => {
        yTranslation.value = 0;
        yTransVal = 0;
        yTransValue.textContent = yTransVal.toFixed(1);
        updateTranslationValues();
    });

    resetTransAll.addEventListener("click", () => {
        xTranslation.value = 0;
        yTranslation.value = 0;
        xTransVal = 0;
        yTransVal = 0;
        xTransValue.textContent = xTransVal.toFixed(1);
        yTransValue.textContent = yTransVal.toFixed(1);
        updateTranslationValues();
    });
}
