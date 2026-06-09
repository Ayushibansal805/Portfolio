import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const skills = [
  "Python",
  "React",
  "TypeScript",
  "FastAPI",
  "MongoDB",
  "Git",
  "AI/ML",
  "Tailwind"
];

function OrbitingSkills() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;

        return (
          <Text
            key={skill}
            position={[
              Math.cos(angle) * 10,
              Math.sin(angle) * 8,
              Math.sin(angle) * 8,
            ]}
            fontSize={1.2}
            color="#00ffff"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}

export default function SkillGalaxy() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>

      <ambientLight intensity={2} />

      <pointLight position={[5, 5, 5]} />

      {/* AI Core */}
      <mesh>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial
          emissive="#00ffff"
          emissiveIntensity={3}
          color="#00ffff"
        />
      </mesh>

      <OrbitingSkills />

      <OrbitControls
        enableZoom={false}
      />

    </Canvas>
  );
}