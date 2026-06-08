import { useGLTF, Float } from "@react-three/drei";

export default function Astronaut() {
  const { scene } =
    useGLTF("/models/astronaut.glb");

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <primitive
        object={scene}
        scale={3}
        position={[0,-1,0]}
      />
    </Float>
  );
}