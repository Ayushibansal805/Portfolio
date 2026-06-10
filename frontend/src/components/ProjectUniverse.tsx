import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text,
  Stars,
  useTexture,
} from "@react-three/drei";

import { useRef, useState } from "react";
import * as THREE from "three";

import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
function Moon({
  parentPosition,
}: any) {

  const moonRef =
    useRef<THREE.Mesh>(null);

  useFrame((state) => {

    if (!moonRef.current)
      return;

    const t =
      state.clock.elapsedTime;

    moonRef.current.position.x =
      parentPosition[0] +
      Math.cos(t) * 5;

    moonRef.current.position.z =
      Math.sin(t) * 5;
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry
        args={[0.6, 32, 32]}
      />

      <meshStandardMaterial
        color="white"
      />
    </mesh>
  );
}
function Planet({
  project,
  position,
  textureUrl,
  onClick,
}: any) {

  const ref =
    useRef<THREE.Mesh>(null);

  const texture =
  useTexture(textureUrl) as THREE.Texture;

  const [hovered, setHovered] =
    useState(false);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y +=
      0.008;
  });

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        scale={
          hovered
            ? 1.2
            : 1
        }
        onPointerOver={() =>
          setHovered(true)
        }
        onPointerOut={() =>
          setHovered(false)
        }
        onClick={() =>
          onClick(project)
        }
      >
        <sphereGeometry
          args={[3.5, 128, 128]}
        />

        <meshStandardMaterial
          map={texture}
        />
      </mesh>

      {/* Atmosphere */}

      <mesh
        position={position}
        scale={1.15}
      >
        <sphereGeometry
          args={[3.5, 128, 128]}
        />

        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.15}
        />
      </mesh>
        {project.title === "Sentilytics" && (
  <mesh
    position={position}
    rotation={[
      Math.PI / 2.5,
      0,
      0,
    ]}
  >
    <ringGeometry
      args={[
        4.5,
        6,
        128,
      ]}
    />

    <meshBasicMaterial
      color="#d8b4fe"
      transparent
      opacity={0.7}
      side={THREE.DoubleSide}
    />
  </mesh>
)}

{project.title === "Drishti" && (
  <Moon
    parentPosition={position}
  />
)}
      <Text
        position={[
          position[0],
          position[1] - 5,
          position[2],
        ]}
        fontSize={1}
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
          position: [0, 0, 24],
          fov: 60,
        }}
      >
        <Stars
  radius={250}
  depth={100}
  count={10000}
  factor={6}
  fade
/>

        <ambientLight intensity={2} />
        <directionalLight
  position={[10, 10, 5]}
  intensity={4}
/>
        <pointLight
          position={[10, 10, 10]}
          intensity={5}
        />
        <mesh rotation={[Math.PI/2,0,0]}>
  <ringGeometry
    args={[8,8.03,128]}
  />
  <meshBasicMaterial
    color="#00ffff"
    transparent
    opacity={0.15}
  />
</mesh>

<mesh rotation={[Math.PI/2,0,0]}>
  <ringGeometry
    args={[16,16.03,128]}
  />
  <meshBasicMaterial
    color="#00ffff"
    transparent
    opacity={0.12}
  />
</mesh>
        

        <Planet
  project={projects[0]}
  textureUrl="/textures/earth.jpg"
  position={[-12, 0, 0]}
  onClick={setSelected}
/>

<Planet
  project={projects[1]}
  textureUrl="/textures/saturn.jpg"
  position={[0, 0, 0]}
  onClick={setSelected}
/>

<Planet
  project={projects[2]}
  textureUrl="/textures/mars.jpg"
  position={[12, 0, 0]}
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