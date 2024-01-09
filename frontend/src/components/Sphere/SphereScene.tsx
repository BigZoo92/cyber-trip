import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap, Power1 } from "gsap";
import SimplexNoise from "simplex-noise";

const SphereScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let ww = window.innerWidth;
    let wh = window.innerHeight;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let planet: THREE.Object3D;
    let strokes: THREE.LineSegments;
    const noise = new SimplexNoise();

    const init = () => {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
      });
      renderer.setSize(ww, wh);
      renderer.setClearColor(0x000000);
      renderer.setPixelRatio(window.devicePixelRatio || 1);

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 310, 550);

      camera = new THREE.PerspectiveCamera(50, ww / wh, 20, 10000);
      camera.position.set(0, 0, 600);
      scene.add(camera);

      createPlanet();
      window.addEventListener("resize", onWindowResize);
      render();
    };

    const onWindowResize = () => {
      ww = window.innerWidth;
      wh = window.innerHeight;
      camera.aspect = ww / wh;
      camera.updateProjectionMatrix();
      renderer.setSize(ww, wh);
    };

    const createPlanet = () => {
      planet = new THREE.Object3D();
      scene.add(planet);

      const segments = new THREE.BufferGeometry();
      const positions = new Float32Array(3500 * 3);
      const colors = new Float32Array(3500 * 10);

      for (let i = 0; i < 3500; i++) {
        const lat = 2 * Math.PI * Math.random();
        const lon = Math.acos(2 * Math.random() - 1);
        const u = Math.cos(lon);
        const pos = new THREE.Vector3(
          (Math.random() * 40 + 220) * Math.sqrt(1 - u * u) * Math.cos(lat),
          (Math.random() * 40 + 220) * Math.sqrt(1 - u * u) * Math.sin(lat),
          (Math.random() * 40 + 220) * u
        );

        gsap.to(pos, {
          x: pos.x * 0.2,
          y: pos.y * 0.2,
          z: pos.z * 0.2,
          repeat: -1,
          delay: -9,
          yoyo: true,
          ease: Power1.easeIn,
          duration: Math.random() * 5 + 2,
        });

        positions[i * 3] = pos.x;
        positions[i * 3 + 1] = pos.y;
        positions[i * 3 + 2] = pos.z;

        const perlin = Math.abs(
          noise.noise3D(pos.x * 0.005, pos.y * 0.005, pos.z * 0.002)
        );
        const color = new THREE.Color(`hsl(${perlin * 80 + 220}, 50%, 50%)`);

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      segments.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      segments.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const lineWidth = Math.random() * 400 + 10;

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        linewidth: lineWidth,
      });

      strokes = new THREE.LineSegments(segments, material);
      planet.add(strokes);
    };

    const render = () => {
      requestAnimationFrame(render);
      planet.rotation.x += 0.001;
      planet.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      height={"100dvh"}
      width={"100dvw"}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
};

export default SphereScene;
