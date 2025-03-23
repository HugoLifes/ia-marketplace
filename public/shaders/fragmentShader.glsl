uniform float u_intensity;
uniform float u_time;
//uniform vec3 u_color;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;
 
  
  vec3 baseColor = vec3(0.094, 0.42-distort, 0.565);

  
  gl_FragColor = vec4(baseColor ,1.0);
}
