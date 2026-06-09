import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Stars } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

function Planet({
  project,
  position,
  color,
  onClick,
}: any) {
  const ref = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] =
    useState(false);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.002;
    }
  });

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        scale={hovered ? 1.3 : 1}
        onPointerOver={() =>
          setHovered(true)
        }
        onPointerOut={() =>
          setHovered(false)
        }
        onClick={() => onClick(project)}
      >
        <sphereGeometry
          args={[3.5, 64, 64]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />
      </mesh>

      <Text
        position={[
          position[0],
          position[1] - 4,
          position[2],
        ]}
        fontSize={1.2}
        color="white"
      >
        {project.title}
      </Text>
    </>
  );
}

export default function ProjectUniverse() {
  const [selected, setSelected] =
    useState<any>(null);

  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 18],
          fov: 60,
        }}
      >
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
        />

        <ambientLight intensity={3} />

        <pointLight
          position={[10, 10, 10]}
          intensity={5}
        />

        <Planet
          project={projects[0]}
          color="#00ffff"
          position={[-8, 0, 0]}
          onClick={setSelected}
        />

        <Planet
          project={projects[1]}
          color="#8b5cf6"
          position={[0, 0, 0]}
          onClick={setSelected}
        />

        <Planet
          project={projects[2]}
          color="#ec4899"
          position={[8, 0, 0]}
          onClick={setSelected}
        />
      </Canvas>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() =>
            setSelected(null)
          }
        />
      )}
    </>
  );
}