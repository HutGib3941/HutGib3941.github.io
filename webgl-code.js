main();

//https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context#initializing_the_shaders

function main() {
  const canvas = document.getElementById("webgl-canvas");

  const gl = canvas.getContext("webgl");

  gl.clearColor(0.0, 0.0, 0.0, 1.0); //set clear background colour to opaque black
  gl.clear(gl.COLOR_BUFFER_BIT); // Clear the color buffer with specified clear color

  drawScene(gl, );
}

const fragmentSource = `
void main() {
  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}
`;

function initShaderProgram(gl, /*vertSource,*/ fragSource) {
  //const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragSource); //load code of frag shader
  
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, fragmentShader); //add fragment shader to shader code
  
  gl.linkProgram(shaderProgram); //finalise shader

  return shaderProgram;
}
