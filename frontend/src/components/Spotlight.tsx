import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Spotlight() {

  const light =
    useRef<THREE.PointLight>(null);

  useFrame(({ mouse }) => {
    if (light.current) {

      light.current.position.x =
        mouse.x * 5;

      light.current.position.y =
        mouse.y * 5;
    }
  });

  return (
    <pointLight
      ref={light}
      intensity={5}
      color="#00ffff"
    />
  );
}