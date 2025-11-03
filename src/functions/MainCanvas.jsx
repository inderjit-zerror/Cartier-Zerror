import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import user1 from "/img/userImg1.webp";
import user2 from "/img/userImg2.webp";
import user3 from "/img/userImg3.webp";
import user4 from "/img/userImg4.webp";

gsap.registerPlugin(useGSAP);

const MainCanvas = ({ namePass, num, innerCan ,innerPart1, innerPart2}) => {
  const distance = 200;
  const FOV =
    2 * Math.atan(window.innerHeight / 2 / distance) * (180 / Math.PI);

  const canvasRef = useRef();

  return (
    <>
      <div
        className={`topCont w-full min-h-screen flex justify-center ${namePass}`}
      >
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
            <Scene
              distance={distance}
              namePass={namePass}
              innerCan={innerCan}
              innerPart1={innerPart1}
              innerPart2={innerPart2}
              canvasRef={canvasRef}
              num={num}
            />
          </Canvas>

          {/* Canvas Top Image */}
          <div className={`w-[70%] h-fit ${innerCan} absolute top-[7%] opacity-0 left-[50%] flex gap-[20px]  flex-col justify-start  translate-x-[-50%] `}> 


            <div className={`w-full h-fit flex flex-col absolute top-0 ${innerPart1}`}>

              {/* SmallTop-title-text */}
              <div className="w-full tst1 h-[16px] flex justify-center P1 overflow-hidden ">
                <p className="text-[#202020] text-[14px] translate-y-[100%]">CHAPTER ONE</p>
              </div>

              {/* BigTop-title-text */}
              <div className="w-full tbt1 h-[60px] flex justify-center items-center mt-[50px]  overflow-hidden">
                <h2 className="text-[#3202020] text-[60px] P6 translate-y-[100%]"> SHAKE UP & <span className="P4">the</span> SENSES</h2>
              </div>

            </div>

            <div className={`w-full h-fit flex gap-[20px] justify-center mt-[40px]  ${innerPart2}`}>
                <div className="w-1/5 h-[60%] overflow-hidden">
                  <img src={user1} alt="" />
                </div>
                <div className="w-1/5 h-[60%]  overflow-hidden">
                  <img src={user2} alt="" />
                </div>
                <div className="w-1/5 h-[60%]  overflow-hidden">
                  <img src={user3} alt="" />
                </div>
                <div className="w-1/5 h-[60%] overflow-hidden">
                  <img src={user4} alt="" />
                </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default MainCanvas;
