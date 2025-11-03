import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import user1 from '/img/userImg1.webp'
import user2 from '/img/userImg2.webp'
import user3 from '/img/userImg3.webp'
import user4 from '/img/userImg4.webp'

gsap.registerPlugin(useGSAP);

const MainCanvas = ({ namePass, num, innerCan}) => {
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
            <Scene distance={distance} namePass={namePass} innerCan={innerCan}  canvasRef={canvasRef} num={num}  />

          </Canvas>

          {/* Canvas Top Image */}
          <div className={`w-[70%] h-fit ${innerCan} absolute top-[20%] opacity-0 left-[50%] flex gap-[20px] justify-center translate-x-[-50%] `}>

            <div className="w-1/5 h-[50%] overflow-hidden">
                <img src={user1} alt="" />
            </div>
            <div className="w-1/5 h-[50%]  overflow-hidden">
                <img src={user2} alt="" />
            </div>
            <div className="w-1/5 h-[50%]  overflow-hidden">
                <img src={user3} alt="" />
            </div>
            <div className="w-1/5 h-[50%] overflow-hidden">
                <img src={user4} alt="" />
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default MainCanvas;
