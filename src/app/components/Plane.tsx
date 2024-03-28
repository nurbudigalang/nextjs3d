import React from "react";

import { MeshProps, PlaneGeometryProps } from "@react-three/fiber";

type PlaneProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
};

const Plane: React.FC<PlaneProps> = ({ position, rotation, size }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[size[0], size[1]]} />
    </mesh>
  );
};
export default Plane;
