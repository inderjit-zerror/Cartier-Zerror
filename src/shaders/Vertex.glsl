varying vec2 vUv;
uniform float uCross;

void main() {
  vUv = uv;

  vec3 newPosition = position;
  float PI = 3.141592653589793;

  newPosition.y -= sin(uv.x * PI) * (0. + uCross);


  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
