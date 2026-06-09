import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
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
    const [hovered, setHovered] = useState(false);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        scale={hovered ? 1.3 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onClick(project)}
        >
        <sphereGeometry
          args={[0.9,64,64]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>

      <Text
        position={[
          position[0],
          position[1] - 1.5,
          position[2],
        ]}
        fontSize={0.3}
      >
        {project.title}
      </Text>
    </>
  );
}

export default function ProjectUniverse() {

  const [selected,
    setSelected] =
    useState<any>(null);

  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 25],
        }}
      >
        <ambientLight intensity={2} />

        <pointLight
          position={[10, 10, 10]}
        />

        <Planet
          project={projects[0]}
          color="#00ffff"
          position={[-7, 0, 0]}
          onClick={setSelected}
        />

        <Planet
          project={projects[1]}
          color="#8b5cf6"
          position={[0,0,0]}
          onClick={setSelected}
        />

        <Planet
          project={projects[2]}
          color="#ec4899"
          position={[7, 0, 0]}
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