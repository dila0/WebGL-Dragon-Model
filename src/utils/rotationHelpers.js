/**
 * @fileoverview Rotation implemenetation helper functions.
 * 
 * @author Dila Tosun
 * @id 22102100
 * 
 * @author Ahmet Kaan Sever
 * @id 22102278
 */

// Rotation Function
function rotatePart(id, m){
    m = mult(m, rotate(theta[id][0], 1, 0, 0));
    m = mult(m, rotate(theta[id][1], 0, 1, 0));
    m = mult(m, rotate(theta[id][2], 0, 0, 1));
    return m;
}

// Update rotation values
function updateRotationValues() {
      // Slider values
      const x = xRotation.value;
      const y = yRotation.value;
      const z = zRotation.value;

      // Parse to float
      const xFloat = Number(x);
      const yFloat = Number(y);
      const zFloat = Number(z);
      
      theta[limbSelect.value][0] = xFloat;
      theta[limbSelect.value][1] = yFloat;
      theta[limbSelect.value][2] = zFloat;
    
      initNodes(limbSelect.value);

      // Display rotation values
      rotationVal.textContent = `Rotation Values: x: ${xFloat}, y: ${yFloat}, z: ${zFloat}`;
}

// Reset rotations function
function resetRotations(){
    resetRotX.addEventListener("click", () => {
        xRotation.value = 0.0;
        xRotVal = 0.0;
        xRotValue.textContent = xRotVal;
        updateRotationValues();
    });
    resetRotY.addEventListener("click", () => {
        yRotation.value = 0.0;
        yRotVal = 0.0;
        yRotValue.textContent = yRotVal;
        updateRotationValues();
    });
    resetRotZ.addEventListener("click", () => {
        zRotation.value = 0.0;
        zRotVal = 0.0;
        zRotValue.textContent = zRotVal;
        updateRotationValues();
    });
    resetAll.addEventListener("click", resetAllRotations);
}

// Update Sliders function
function updateRotations() {
    limbSelect.onchange = updateSelectedBodyPart;
    xRotation.oninput = updateRotationValues;
    yRotation.oninput = updateRotationValues;
    zRotation.oninput = updateRotationValues;

    // Sliders
    xRotation.addEventListener("input", (event) =>{
        xRotVal = parseFloat(event.target.value);
        xRotValue.textContent = xRotVal.toFixed(1);
    });

    yRotation.addEventListener("input", (event) =>{
        yRotVal = parseFloat(event.target.value);
        yRotValue.textContent = yRotVal.toFixed(1);
    });

    zRotation.addEventListener("input", (event) =>{
        zRotVal = parseFloat(event.target.value);
        zRotValue.textContent = zRotVal.toFixed(1);
    });
}

// Resets all rotations
function resetAllRotations() {
    for (let i = 0; i < theta.length; i++) {
        theta[i][0] = 0.0; 
        theta[i][1] = 0.0; 
        theta[i][2] = 0.0; 
        initNodes(i);    
    }

    xRotation.value = 0.0;
    yRotation.value = 0.0;
    zRotation.value = 0.0;

    xRotValue.textContent = 0.0;
    yRotValue.textContent = 0.0;
    zRotValue.textContent = 0.0;
}