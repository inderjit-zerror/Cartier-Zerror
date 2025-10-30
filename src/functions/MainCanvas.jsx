import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

const MainCanvas = ({ namePass }) => {
  const distance = 200;
  const FOV =
    2 * Math.atan(window.innerHeight / 2 / distance) * (180 / Math.PI);

   const canvasRef =useRef()

  return (
    <>
      <div className={`topCont w-full min-h-screen flex justify-center ${namePass}`}>
        <div
          ref={canvasRef}
          className={`w-full FirstLoad h-[120dvh] flex justify-center relative`}
        >
          <Canvas className="w-full h-full ">
            <PerspectiveCamera
              makeDefault
              fov={FOV}
              position={[0, 0, distance]}
            />
            <Scene distance={distance} namePass={namePass} canvasRef={canvasRef}  />

          </Canvas>

        </div>
      </div>
    </>
  );
};

export default MainCanvas;
