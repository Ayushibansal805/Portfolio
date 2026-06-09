import { useGLTF, Float } from "@react-three/drei";

export default function Astronaut() {
  const { scene } = useGLTF("/models/astronaut.glb");

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <primitive
        object={scene}
        scale={15}
        position={[0, -5, 0]}
      />
    </Float>
  );
}