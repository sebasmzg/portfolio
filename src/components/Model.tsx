import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();
  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play().paused = true;
    }
  })
  useFrame(
    () =>
        //@ts-expect-error description is not defined
      (actions["Experiment"].time =
        //@ts-expect-error description is not defined
        (actions["Experiment"]?.getClip().duration * scroll.offset) / 6)
  );
  return (
    <group ref={group} scale={[2,2,2]}>
      <primitive object={scene} />
    </group>
  );
}
