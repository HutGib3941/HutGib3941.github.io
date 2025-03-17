main();

function main() {
  const canvas = document.getElementById("webgl-canvas");

  const gl = canvas.getContext("webgl");

  gl.clearColor(0.0, 0.0, 0.0, 1.0); //set clear background colour to opaque black
  gl.clear(gl.COLOR_BUFFER_BIT); // Clear the color buffer with specified clear color
}
