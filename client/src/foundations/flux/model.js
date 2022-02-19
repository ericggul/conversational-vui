import React, { useState, Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { useAnimatedLayout } from "@/foundations/flux/layouts/hooks";

function updateInstancedMeshMaterials({ mesh, data }) {
  const scratchObject3D = new THREE.Object3D();

  if (!mesh) {
    return;
  }
  for (let i = 0; i < data.length; i++) {
    const { position, rotation } = data[i];
    scratchObject3D.scale.setScalar(0.01);
    scratchObject3D.position.set(position.x, position.y, position.z);
    scratchObject3D.rotation.set(rotation.x, rotation.y, rotation.z);
    scratchObject3D.updateMatrix();

    mesh.setMatrixAt(i, scratchObject3D.matrix);
  }

  mesh.instanceMatrix.needsUpdate = true;
}

export const Model = ({ layoutIdx, data, realTimeMode }) => {
  const object = useLoader(
    PLYLoader,
    "/assets/flux/tower.ply",
    (loader) => {
      //success
    },
    (xhr) => {
      const loadedStatus = xhr.loaded / xhr.total;
    }
  );
  object.computeVertexNormals();
  const meshRef = useRef(null);

  let timeNow = new Date();
  const [layout, setLayout] = useState(
    realTimeMode ? timeNow.getHours() % 12 : layoutIdx
  );
  const [progress, setProgress] = useState(
    realTimeMode ? timeNow.getMinutes() / 60 : null
  );
  useEffect(() => {
    timeNow = new Date();
    setLayout(realTimeMode ? timeNow.getHours() % 12 : layoutIdx);
    setProgress(realTimeMode ? timeNow.getMinutes() / 60 : null);
  }, [realTimeMode, layoutIdx]);

  useAnimatedLayout({
    realTimeProgress: progress,
    data,
    layoutIdx: layout,
    onChange: () => {
      updateInstancedMeshMaterials({ mesh: meshRef.current, data });
    },
  });

  useEffect(() => {
    updateInstancedMeshMaterials({ mesh: meshRef.current, data });
  }, [data, layout, realTimeMode]);

  return (
    <>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, data.length]}
        geometry={object}
      >
        <meshStandardMaterial
          vertexColors={true}
          metalness={0.7}
          roughness={0.3}
        />
      </instancedMesh>
    </>
  );
};
