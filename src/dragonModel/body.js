function createBody(gl) {
    // Define positions for a simple rectangle representing the body
    const positions = [
        -0.7, 1.0, 0.0,  // Top-left
        0.7, 1.0, 0.0,   // Top-right
        0.7, -1.0, 0.0,  // Bottom-right
        -0.7, -1.0, 0.0  // Bottom-left
    ];

    const indices = [
        0, 1, 2,
        2, 3, 0
    ];

    return { positions, indices };
}