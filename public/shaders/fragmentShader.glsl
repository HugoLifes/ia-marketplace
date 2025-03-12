uniform float u_intensity;
uniform float u_time;
//uniform vec3 u_color;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;

   // Calcula una base a partir de vUv y el efecto distort
  vec3 baseColor = vec3(abs(vUv - 0.5) * 2.0 * (1.0 - distort), 1.0);
  
  // Combina la base con el color definido en el uniform
 // vec3 finalColor = mix(baseColor, u_color, vZ * 2.0 + 0.5);
  
  gl_FragColor = vec4(baseColor ,1.0);
}
