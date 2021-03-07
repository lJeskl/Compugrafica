function MyGame(htmlCanvasID) {
    // Step A: Initialize the webGL Context
gEngine.Core.initializeWebGL(htmlCanvasID);
var gl = gEngine.Core.getGL();
// Step B: Setup the camera
this.mCamera = new Camera(
    vec2.fromValues(20, 60), // center of the WC
    20, // width of WC
    [20,100, 600, 300] // viewport (orgX, orgY, width, height)
    );
// Step C: Create the shader
this.mConstColorShader = new SimpleShader(
    "GLSLShaders/SimpleVS.glsl", // Path to the VertexShader
    "GLSLShaders/SimpleFS.glsl"); // Path to the simple FragmentShader
   
   // Step D: Create the Renderable objects:
   this.mBlueSq = new Renderable(this.mConstColorShader);
   this.mBlueSq.setColor([0.25, 0.25, 0.95, 1]);
   this.mRedSq = new Renderable(this.mConstColorShader);
   this.mRedSq.setColor([1, 0.25, 0.25, 1]);
   this.mTLSq = new Renderable(this.mConstColorShader);
   this.mTLSq.setColor([0.9, 0.1, 0.1, 1]);
   this.mTRSq = new Renderable(this.mConstColorShader);
   this.mTRSq.setColor([0.1, 0.9, 0.1, 1]);
   this.mBRSq = new Renderable(this.mConstColorShader);
   this.mBRSq.setColor([0.1, 0.1, 0.9, 1]);
   this.mBLSq = new Renderable(this.mConstColorShader);
   this.mBLSq.setColor([0.1, 0.1, 0.1, 1]);
   
   // Step E: Clear the canvas
   gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1]); // Clear the canvas
    // Step F: Starts the drawing by activating the camera
this.mCamera.setupViewProjection();
var vpMatrix = this.mCamera.getVPMatrix();

// Step G: Draw the blue square
// Centre Blue, slightly rotated square
this.mBlueSq.getXform().setPosition(20, 60);
this.mBlueSq.getXform().setRotationInRad(0.2); // In Radians
this.mBlueSq.getXform().setSize(5, 5);
this.mBlueSq.draw(vpMatrix);

// Step H: Draw the center and the corner squares
// centre red square
this.mRedSq.getXform().setPosition(20, 60);
this.mRedSq.getXform().setSize(2, 2);
this.mRedSq.draw(vpMatrix);
// top left
this.mTLSq.getXform().setPosition(10, 65);
this.mTLSq.draw(vpMatrix);
// top right
this.mTRSq.getXform().setPosition(30, 65);
this.mTRSq.draw(vpMatrix);
// bottom right
this.mBRSq.getXform().setPosition(30, 55);
this.mBRSq.draw(vpMatrix);
// bottom left
this.mBLSq.getXform().setPosition(10, 55);
this.mBLSq.draw(vpMatrix);
   };