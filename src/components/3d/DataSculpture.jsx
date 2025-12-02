import React, { useMemo, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';

const DataSculpture = ({ count = 3000, darkMode = true }) => {
    const mesh = useRef();
    const { viewport } = useThree();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const randoms = new Float32Array(count);
        const charIndices = new Float32Array(count);

        // Ponto inicial para o cálculo do Caos
        let x = 0.1;
        let y = 0.1;
        let z = 0.1;

        // Constantes do Atrator de Lorenz
        const sigma = 10;
        const rho = 28;
        const beta = 8.0 / 3.0;
        const dt = 0.008; // Passo de tempo (menor = mais detalhe na curva)

        for (let i = 0; i < count; i++) {
            // --- FÓRMULA DO CAOS (Lorenz Attractor) ---
            // Isso cria aquela forma de "borboleta" infinita
            const dx = sigma * (y - x);
            const dy = x * (rho - z) - y;
            const dz = x * y - beta * z;

            x += dx * dt;
            y += dy * dt;
            z += dz * dt;

            // O Atrator gera números grandes, então escalamos por 0.15 para caber na tela
            // Também centralizamos subtraindo o offset (z costuma crescer para cima)
            positions[i * 3] = x * 0.15;
            positions[i * 3 + 1] = y * 0.15;
            positions[i * 3 + 2] = (z - 25) * 0.15; // Centraliza verticalmente

            // Adicionamos um pouco de "nuvem" ao redor da linha
            // Para não parecer um fio elétrico fino, e sim uma nuvem de dados
            positions[i * 3] += (Math.random() - 0.5) * 0.3;
            positions[i * 3 + 1] += (Math.random() - 0.5) * 0.3;
            positions[i * 3 + 2] += (Math.random() - 0.5) * 0.3;

            randoms[i] = Math.random();
            charIndices[i] = Math.floor(Math.random() * 16);
        }

        return {
            positions,
            randoms,
            charIndices
        };
    }, [count]);

    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        const size = 512;
        const cols = 4; // 4x4 grid for 16 chars
        const charSize = size / cols;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, size, size);
        ctx.font = `bold ${charSize * 0.7}px monospace`;
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const chars = "0123456789ABCDEF";

        for (let i = 0; i < 16; i++) {
            const char = chars[i];
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = col * charSize + charSize / 2;
            const y = row * charSize + charSize / 2 + (charSize * 0.1); // slight offset
            ctx.fillText(char, x, y);
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.minFilter = THREE.NearestFilter;
        tex.magFilter = THREE.NearestFilter;
        return tex;
    }, []);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uFontTexture: { value: texture },
            uColor: { value: new THREE.Color(0.5, 0.5, 0.5) }
        }),
        [texture]
    );

    useEffect(() => {
        if (mesh.current) {
            // Switch blending mode: Additive for Dark Mode (glow), Normal for Light Mode (dark text)
            mesh.current.material.blending = darkMode ? THREE.AdditiveBlending : THREE.NormalBlending;
            mesh.current.material.needsUpdate = true;
        }
    }, [darkMode]);

    // Responsive Scaling Effect
    useEffect(() => {
        if (mesh.current) {
            // The Lorenz attractor is roughly 6 units wide (approx -20 to 20 scaled by 0.15)
            const objectWidth = 6.0;
            const availableWidth = viewport.width * 0.9; // Use 90% of screen width

            let scale = 1.0;
            if (availableWidth < objectWidth) {
                scale = availableWidth / objectWidth;
            }

            mesh.current.scale.set(scale, scale, scale);
        }
    }, [viewport]);

    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
            mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
            // Smoothly interpolate color
            // Dark Mode: Dark Grey (0.2)
            // Light Mode: Pure Black (0.0) for maximum contrast
            const targetColor = darkMode ? new THREE.Color(0.2, 0.2, 0.2) : new THREE.Color(0.0, 0.0, 0.0);
            mesh.current.material.uniforms.uColor.value.lerp(targetColor, 0.1);
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    count={particles.randoms.length}
                    array={particles.randoms}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-aCharIndex"
                    count={particles.charIndices.length}
                    array={particles.charIndices}
                    itemSize={1}
                />
            </bufferGeometry>
            <shaderMaterial
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending} // Initial value, updated by useEffect
                vertexColors={false}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </points>
    );
};

export default DataSculpture;
