import { Canvas } from "@react-three/fiber";
import Astronaut from "./Astronaut";

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
    </Canvas>
  );
}