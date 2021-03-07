// to transform the vertex position
uniform mat4 uModelTransform;
uniform mat4 uViewProjTransform;
attribute vec3 aSquareVertexPosition; // Expects one vertex position
void main(void) {
 //gl_Position = vec4(aSquareVertexPosition, 1.0);
 gl_Position = uViewProjTransform * uModelTransform * vec4(aSquareVertexPosition, 1.0);
}