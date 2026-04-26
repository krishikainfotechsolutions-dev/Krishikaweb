import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

const Knot = () => {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1, 0.32, 140, 20]} />
        <meshStandardMaterial
          color="#FFD600"
          emissive="#FFD600"
          emissiveIntensity={0.25}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
};

const HeroScene = () => (
  <Canvas
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 4.5], fov: 45 }}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1.2} />
    <pointLight position={[-4, -2, -2]} intensity={0.8} color="#FFD600" />
    <Knot />
  </Canvas>
);

export default HeroScene;