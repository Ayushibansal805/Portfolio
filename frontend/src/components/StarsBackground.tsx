import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          fade
        />
      </Canvas>
    </div>
  );
}