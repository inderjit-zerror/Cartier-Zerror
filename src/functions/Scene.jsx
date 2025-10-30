import { useMemo } from "react";
import Vertex from "../shaders/Vertex.glsl";
import Fragment from "../shaders/Fragment.glsl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Scene = ({ distance, namePass, canvasRef }) => {
  const meshRef = useRef();
  const scrollSpeed = useRef(0);
  const lastScroll = useRef(window.scrollY);
  const targetCross = useRef(0);
  const lenis = new Lenis();

  // ✅ Proper uniform object with a 'value' property
  const uniforms = useMemo(
    () => ({
      uCross: { value: 0 },
    }),
    []
  );

  // Compute plane size based on screen
  const { width, height } = useMemo(() => {
    const aspect = window.innerWidth / window.innerHeight;
    const FOV =
      2 * Math.atan(window.innerHeight / 2 / distance) * (180 / Math.PI);

    const visibleHeight = 2 * Math.tan((FOV / 2) * (Math.PI / 180)) * distance;
    const visibleWidth = visibleHeight * aspect;

    // 80% of visible area
    return {
      width: visibleWidth * 0.64,
      height: visibleHeight * 0.7,
    };
  }, []);

  // ----------------------------------------------------------------------------- PreLoading Animation
  useEffect(() => {
    if (!meshRef.current) return;
    document.body.classList.add("scroll-lock");

    gsap.set(canvasRef.current, {
      position: "absolute",
      top: -70,
      left: 0,
    });
    gsap.set(meshRef.current.scale, {
      x: 1.4,
      ease: "power4.inOut",
    });

    const PL = gsap.timeline();

    PL.to(
      meshRef.current.scale,
      {
        x: 1,
        duration: 2,
        ease: "power4.inOut",
      },
      "pre1"
    );
    PL.to(
      uniforms.uCross,
      {
        value: 70.0,
        duration: 1,
        delay: 0.07,
        ease: "power4.inOut",
      },
      "pre1"
    );
    PL.to(
      uniforms.uCross,
      {
        value: 0.0,
        duration: 1,
        delay: 0.7,
        ease: "power4.inOut",
      },
      "pre1"
    );
    PL.to(
      canvasRef.current,
      {
        y: "64.6%",
        duration: 2,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(canvasRef.current, {
            position: "relative",
            top: "0",
            left: "0",
            y: 0,
          });

          
          ScrollTrigger.refresh();
          document.body.classList.remove("scroll-lock");
        },
      },
      "pre1"
    );
  }, []);

  // ----------------------------------------------------------------------------- Scrolling Ainmation

  useEffect(() => {
    //  ============================================= START
    if (!meshRef.current) return;

    const StartTL = gsap.timeline({
      scrollTrigger: {
        trigger: `.${namePass}`,
        start: "top 60%",
        end: "top -10%",
        scrub: true,
        // markers: true,
      },
    });
    StartTL.to(meshRef.current.scale, {
      x: 1.4,
      ease: "power2.inOut",
    },'s1');
  
    // ============================================== End

    const endTL = gsap.timeline({
      scrollTrigger: {
        trigger: `.${namePass}`,
        start: "bottom 80%",
        end: "bottom 40%",
        scrub: true,
        // markers: true,
      },
    });
    endTL.to(meshRef.current.scale, {
      x: 1,
      ease: "power2.inOut",
    },'e1');
    
  }, []);

  // ----------------------------------------------------------------------------- Detect Scroll Direction

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScroll.current;
      lastScroll.current = currentY;

      // detect direction
      if (delta > 0) {
        // scrolling down
        gsap.to(targetCross, {
          current: -40,
          duration: 0.6,
          ease: "power3.out",
        });
      } else if (delta < 0) {
        // scrolling up
        gsap.to(targetCross, {
          current: 40,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      // when scroll stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        gsap.to(targetCross, {
          current: 0,
          duration: 1,
          ease: "power3.out",
        });
      }, 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // if you want to see updates every frame: ----------------------------------------------------------
  useFrame(() => {
    if (!meshRef.current) return;

    // smooth lerp to targetCross.current
    uniforms.uCross.value = gsap.utils.interpolate(
      uniforms.uCross.value,
      targetCross.current,
      0.1 // smaller = smoother
    );

    meshRef.current.material.uniforms.uCross.needsUpdate = true;
  });

  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry args={[width, window.innerHeight - 80, 70, 70]} />
        <shaderMaterial
          vertexShader={Vertex}
          fragmentShader={Fragment}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

export default Scene;
