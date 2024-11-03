function createHead(gl) {
    // Define positions for a simple rectangle representing the head
    const positions = [
        -0.5, 0.5, 0.0,  // Top-left
        0.5, 0.5, 0.0,   // Top-right
        0.5, -0.5, 0.0,  // Bottom-right
        -0.5, -0.5, 0.0  // Bottom-left
    ];

    const indices = [
        0, 1, 2,  // First triangle
        2, 3, 0   // Second triangle
    ];

    return { positions, indices };
}