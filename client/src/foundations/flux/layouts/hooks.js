import { useState, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/three";
import { CONFIG } from "@F/flux/layouts/config";
import {
  circleLayout,
  sphereLayout,
  cylinderLayout,
  pyramidesLayout,
  cubeLayout,
  towerLayout,
  orbitalLayout,
  helixLayout,
  bellLayout,
  squareLayout,
  jarLayout,
  giwaLayout,
  randomLayout,
} from "@F/flux/layouts/layouts";

export function useLayout({ data, layoutIdx }) {
  useEffect(() => {
    if (layoutIdx === 1) circleLayout(data);
    else if (layoutIdx === 2) sphereLayout(data);
    else if (layoutIdx === 3) cylinderLayout(data);
    else if (layoutIdx === 4) pyramidesLayout(data);
    else if (layoutIdx === 5) cubeLayout(data);
    else if (layoutIdx === 6) towerLayout(data);
    else if (layoutIdx === 7) orbitalLayout(data);
    else if (layoutIdx === 8) helixLayout(data);
    else if (layoutIdx === 9) bellLayout(data);
    else if (layoutIdx === 10) squareLayout(data);
    else if (layoutIdx === 11) jarLayout(data);
    else if (layoutIdx === 12) giwaLayout(data);
  }, [data, layoutIdx]);
}

function useSourceTargetLayout({ data, layoutIdx }) {
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      data[i].source.position.x = data[i].position ? data[i].position.x : 0;
      data[i].source.position.y = data[i].position ? data[i].position.y : 0;
      data[i].source.position.z = data[i].position ? data[i].position.z : 0;
      data[i].source.rotation.x = data[i].rotation ? data[i].rotation.x : 0;
      data[i].source.rotation.y = data[i].rotation ? data[i].rotation.y : 0;
      data[i].source.rotation.z = data[i].rotation ? data[i].rotation.z : 0;
    }
  }, [data, layoutIdx]);
  useLayout({ data, layoutIdx });
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      data[i].target.position.x = data[i].position ? data[i].position.x : 0;
      data[i].target.position.y = data[i].position ? data[i].position.y : 0;
      data[i].target.position.z = data[i].position ? data[i].position.z : 0;
      data[i].target.rotation.x = data[i].rotation ? data[i].rotation.x : 0;
      data[i].target.rotation.y = data[i].rotation ? data[i].rotation.y : 0;
      data[i].target.rotation.z = data[i].rotation ? data[i].rotation.z : 0;
    }
  }, [data, layoutIdx]);
}

function interpolateLayout({ data, progress }) {
  for (let i = 0; i < data.length; i++) {
    data[i].position.x =
      data[i].source.position.x * (1 - progress) +
      data[i].target.position.x * progress;
    data[i].position.y =
      data[i].source.position.y * (1 - progress) +
      data[i].target.position.y * progress;
    data[i].position.z =
      data[i].source.position.z * (1 - progress) +
      data[i].target.position.z * progress;
    data[i].rotation.x =
      data[i].source.rotation.x * (1 - progress) +
      data[i].target.rotation.x * progress;
    data[i].rotation.y =
      data[i].source.rotation.y * (1 - progress) +
      data[i].target.rotation.y * progress;
    data[i].rotation.z =
      data[i].source.rotation.z * (1 - progress) +
      data[i].target.rotation.z * progress;
  }
}

export function useAnimatedLayout({ data, layoutIdx, onChange }) {
  useSourceTargetLayout({ data, layoutIdx });
  const prevLayout = useRef(layoutIdx);

  const animProps = useSpring({
    from: { animProgress: 0 },
    to: { animProgress: 1 },
    config: CONFIG[0].animation,
    reset: layoutIdx !== prevLayout.current,
    onChange: (animProgress) => {
      const progress = animProgress.value.animProgress;
      interpolateLayout({ data, progress });
      onChange({ progress });
    },
    onRest: () => {
      prevLayout.current = layoutIdx;
    },
  });
  return animProps;
}
