import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Astronaut from "./Astronaut";
function RotatingKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2}>
      <mesh ref={meshRef}>
  <icosahedronGeometry args={[1.7, 2]} />

  <meshPhysicalMaterial
  color="#00ffff"
  emissive="#00ffff"
  emissiveIntensity={2}
  metalness={1}
  roughness={0}
  transmission={0.5}
  clearcoat={1}
/>
</mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 12] }}>
      <ambientLight intensity={5} />

<directionalLight
  position={[5, 5, 5]}
  intensity={5}
/>

<pointLight
  position={[0, 5, 5]}
  intensity={10}
/>
        <Astronaut />
      {/* <group position={[4, 0, 0]}>
  <RotatingKnot />
</group> */}
    </Canvas>
  );
}