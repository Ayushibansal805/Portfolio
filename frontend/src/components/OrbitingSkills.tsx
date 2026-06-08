import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function OrbitingSkills() {

  const groupRef =
    useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const skills = [
    "Python",
    "React",
    "AI",
    "FastAPI",
  ];

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {

        const angle =
          (i / skills.length) *
          Math.PI *
          2;

        return (
          <Text
            key={skill}
            position={[
              Math.cos(angle) * 3,
              0,
              Math.sin(angle) * 3,
            ]}
            fontSize={0.3}
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}