// shaders.js

export const vertexShader = `
  attribute float aRandom;
  attribute float aCharIndex;
  
  varying float vCharIndex;
  varying float vRandom;
  
  uniform float uTime;
  
  void main() {
    vCharIndex = aCharIndex;
    vRandom = aRandom;
    
    // Pegamos a posição original da partícula
    vec3 pos = position;
    
    // --- 1. ROTAÇÃO PRINCIPAL (Rápida e no Eixo Y) ---
    // Aumentei a velocidade para 0.4 para dar sensação de processamento
    float angle = uTime * 0.4; 
    
    // --- 2. INSTABILIDADE (Wobble) ---
    // Adiciona uma leve inclinação oscilante no eixo Z para o objeto não parecer estático
    float tilt = sin(uTime * 0.3) * 0.15; 

    // Matriz de Rotação Y (Giro principal)
    mat3 rotY = mat3(
      cos(angle), 0.0, sin(angle),
      0.0, 1.0, 0.0,
      -sin(angle), 0.0, cos(angle)
    );
    
    // Matriz de Rotação Z (Instabilidade)
    mat3 rotZ = mat3(
      cos(tilt), -sin(tilt), 0.0,
      sin(tilt), cos(tilt), 0.0,
      0.0, 0.0, 1.0
    );
    
    // Aplica as rotações
    pos = rotY * rotZ * pos;
    
    // --- 3. EFEITO DE RESPIRAÇÃO / GLITCH NA GEOMETRIA ---
    // Faz as partículas vibrarem levemente para fora e para dentro
    // Frequência rápida (5.0) e amplitude baixa (0.03)
    float noise = sin(uTime * 5.0 + aRandom * 15.0);
    pos += normal * noise * 0.03;
    
    // --- 4. POSICIONAMENTO PADRÃO ---
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // --- 5. TAMANHO DA PARTÍCULA ---
    // Attenuation: Partículas longe ficam menores. 
    // O valor '24.0' controla o tamanho base. Ajuste se achar muito grande/pequeno.
    gl_PointSize = 24.0 * (1.0 / -mvPosition.z);
  }
`;

export const fragmentShader = `
  varying float vCharIndex;
  varying float vRandom;
  
  uniform float uTime;
  uniform sampler2D uFontTexture;
  uniform vec3 uColor;
  
  void main() {
    // --- 1. MAPEAMENTO DE TEXTURA (Sprite Sheet 4x4) ---
    // Mapeia o índice do caractere (0-15) para coordenadas UV
    float charIndex = floor(vCharIndex);
    float col = mod(charIndex, 4.0);
    float row = floor(charIndex / 4.0);
    
    // gl_PointCoord nos dá as coordenadas 0.0 a 1.0 DENTRO do ponto da partícula
    float u = (col + gl_PointCoord.x) / 4.0;
    
    // Invertemos o eixo Y porque texturas WebGL e Canvas têm origens diferentes
    // (3.0 - row) garante que pegamos a linha certa de cima para baixo
    float v = (3.0 - row + (1.0 - gl_PointCoord.y)) / 4.0;
    
    vec4 texColor = texture2D(uFontTexture, vec2(u, v));
    
    // --- 2. CORTAR O FUNDO ---
    // Se o pixel da textura for transparente (fundo da letra), descartamos.
    // Threshold 0.3 limpa bem as bordas serrilhadas.
    if (texColor.a < 0.3) discard;
    
    // --- 3. LÓGICA DO GLITCH (A "Mágica") ---
    // Criamos um padrão de onda muito rápido baseado no tempo e na aleatoriedade da partícula
    float glitchSpeed = 12.0; 
    float flashValue = sin(uTime * glitchSpeed + vRandom * 80.0);
    
    // Só ativamos o glitch se o valor da onda for muito alto (> 0.96)
    // Isso garante que apenas poucas partículas pisquem por vez (efeito "espumante")
    bool isGlitch = flashValue > 0.90;
    
    vec3 finalColor = uColor;
    float alpha = texColor.a;
    
    if (isGlitch) {
      // GLITCH: Branco puro e opacidade total
      finalColor = vec3(1.0, 1.0, 1.0); 
      alpha = 1.0; 
    } else {
      // NORMAL: Cor base (cinza escuro) e um pouco transparente
      // Isso ajuda a dar profundidade e o visual "fantasmagórico"
      alpha *= 0.8; 
    }
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;