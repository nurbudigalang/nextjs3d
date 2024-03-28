"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { TextureLoader } from "three";
import { Model } from "@/app/components/BBK 040x60x85";
export default function Home() {
  // const gltf = useLoader(GLTFLoader, "/BBK 040x60x85.glb");
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight position={[10, 20, 10]} intensity={5} />
        <ambientLight />
        <axesHelper args={[5]} />
        <gridHelper args={[20, 20, 0xff0000, "teal"]} />
        <color attach="background" args={["#15151a"]} />
        <mesh>
          <Model />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function Room() {}
