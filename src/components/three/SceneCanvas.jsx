import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SceneCanvas = () => {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ------------------------------------------------------------------------
    // Scene, Fog, and Camera
    // ------------------------------------------------------------------------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x101315, 0.038);

    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(1.4, 0.2, 6.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // ------------------------------------------------------------------------
    // Lighting — Cinematic Architectural Rig
    // ------------------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Key Light (Liquid Silver metallic sheen)
    const keyLight = new THREE.DirectionalLight(0xd9e0df, 2.5);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    // Rim Light (Acid Lime Signal #B8FF45)
    const limeRimLight = new THREE.DirectionalLight(0xb8ff45, 2.2);
    limeRimLight.position.set(-6, -4, -5);
    scene.add(limeRimLight);

    // Ground Reflection Fill
    const fillLight = new THREE.PointLight(0xa0b2b8, 1.4, 25);
    fillLight.position.set(0, -4, 4);
    scene.add(fillLight);

    // ------------------------------------------------------------------------
    // PROTOCOL 08 — The Transforming Mechanical Core
    // ------------------------------------------------------------------------
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Shared Premium Metallic Materials
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f7f6,
      metalness: 0.98,
      roughness: 0.08,
    });

    const brushedSilverMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9e0df,
      metalness: 0.92,
      roughness: 0.22,
    });

    const limeGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xb8ff45,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0xb8ff45,
      emissiveIntensity: 0.4,
    });

    // 1. Monumental Outer Chrome Mechanical Bevel Ring
    const outerRingGeo = new THREE.TorusGeometry(2.35, 0.26, 32, 120);
    const outerRing = new THREE.Mesh(outerRingGeo, chromeMaterial);
    rootGroup.add(outerRing);

    // Outer Ring Acid-Lime Precision Signal Track
    const signalTrackGeo = new THREE.TorusGeometry(2.68, 0.02, 16, 120);
    const signalTrack = new THREE.Mesh(signalTrackGeo, limeGlowMaterial);
    rootGroup.add(signalTrack);

    // 2. Inner Gimbal Mechanical Ring
    const innerRingGeo = new THREE.TorusGeometry(1.75, 0.1, 24, 100);
    const innerRing = new THREE.Mesh(innerRingGeo, brushedSilverMaterial);
    innerRing.rotation.x = Math.PI * 0.35;
    rootGroup.add(innerRing);

    // 3. Central Liquid Nucleus Sphere
    const nucleusGeo = new THREE.SphereGeometry(0.85, 48, 48);
    const nucleus = new THREE.Mesh(nucleusGeo, chromeMaterial);
    rootGroup.add(nucleus);

    // 4. Transforming Architectural Tier Layers (For ACT II: The Architecture)
    // 4 distinct layers: Frontend, Gateway, Microservices, Databases
    const layerGroup = new THREE.Group();
    rootGroup.add(layerGroup);

    const layerGeometry = new THREE.CylinderGeometry(1.4, 1.4, 0.04, 32);
    const layerMeshes = [];
    const tierColors = [0x61dafb, 0xb8ff45, 0xed8b00, 0x47a248];

    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0xd9e0df,
        metalness: 0.85,
        roughness: 0.25,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(layerGeometry, mat);
      mesh.position.y = 0; // Starts unified, expands along Y in Act II
      layerGroup.add(mesh);
      layerMeshes.push(mesh);
    }

    // 5. Service Nodes & Satellite Cluster (For ACT III & IV: Monarc & Timeline)
    const satellitesGroup = new THREE.Group();
    rootGroup.add(satellitesGroup);

    const nodeGeo = new THREE.OctahedronGeometry(0.16, 0);
    const satellites = [];
    const satelliteCount = 8;

    for (let i = 0; i < satelliteCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, limeGlowMaterial);
      const angle = (i / satelliteCount) * Math.PI * 2;
      const radius = 2.8 + (i % 2) * 0.5;
      mesh.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 1.2, Math.sin(angle) * radius);
      satellitesGroup.add(mesh);
      satellites.push({
        mesh,
        baseAngle: angle,
        baseRadius: radius,
        speed: 0.4 + (i % 3) * 0.2,
      });
    }

    // Dynamic Luminous Data Bus Connection Lines
    const linesGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(satelliteCount * 2 * 3);
    const linesMat = new THREE.LineBasicMaterial({
      color: 0xb8ff45,
      transparent: true,
      opacity: 0.35,
    });
    const connectionLines = new THREE.LineSegments(linesGeo, linesMat);
    rootGroup.add(connectionLines);

    // 6. Atmospheric Micro-Particle Field
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 300 : 750;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 30;
      particlePos[i + 1] = (Math.random() - 0.5) * 30;
      particlePos[i + 2] = (Math.random() - 0.5) * 26;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.06,
      color: 0xf4f6f2,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Architectural Floor Grid
    const gridHelper = new THREE.GridHelper(40, 40, 0x3d4745, 0x141a1c);
    gridHelper.position.y = -5.8;
    scene.add(gridHelper);

    // ------------------------------------------------------------------------
    // Mouse Interaction / Pointer Parallax
    // ------------------------------------------------------------------------
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }

    // ------------------------------------------------------------------------
    // THE SIGNATURE CHOREOGRAPHY — 5-Act Transforming Machine
    // ------------------------------------------------------------------------
    let scrollProgress = 0;

    const scrollTriggerInstance = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgress = self.progress;

        if (prefersReducedMotion) return;

        // Smooth continuous accumulation of 360-degree rotation across the journey
        const rotY = scrollProgress * Math.PI * 2.1;
        const rotX = Math.sin(scrollProgress * Math.PI) * 0.4;
        rootGroup.rotation.y = rotY;
        rootGroup.rotation.x = rotX;

        // --------------------------------------------------------------------
        // ACT I: THE CORE (Hero: 0.00 - 0.18)
        // Monolithic, unified chrome ring floating in space
        // --------------------------------------------------------------------
        if (scrollProgress < 0.18) {
          const t = scrollProgress / 0.18;
          camera.position.x = THREE.MathUtils.lerp(1.4, 2.2, t);
          camera.position.y = THREE.MathUtils.lerp(0.2, 0.4, t);
          camera.position.z = THREE.MathUtils.lerp(6.8, 7.8, t);
          rootGroup.position.set(THREE.MathUtils.lerp(1.5, 2.0, t), 0, 0);
          rootGroup.scale.setScalar(THREE.MathUtils.lerp(1.1, 1.0, t));

          // Tiers stay unified inside the core
          layerMeshes.forEach((mesh) => (mesh.position.y = 0));
          outerRing.scale.setScalar(1);
          signalTrack.scale.setScalar(1);
        }
        // --------------------------------------------------------------------
        // ACT II: THE ARCHITECTURE (About & Stack: 0.18 - 0.45)
        // The mechanical ring physically separates into 4 distinct tiers!
        // --------------------------------------------------------------------
        else if (scrollProgress < 0.45) {
          const t = (scrollProgress - 0.18) / 0.27;
          camera.position.x = THREE.MathUtils.lerp(2.2, 2.8, t);
          camera.position.y = THREE.MathUtils.lerp(0.4, -0.2, t);
          camera.position.z = THREE.MathUtils.lerp(7.8, 8.4, t);
          rootGroup.position.set(THREE.MathUtils.lerp(2.0, 2.6, t), 0, 0);

          // Physical vertical separation of architecture tiers
          const separation = THREE.MathUtils.lerp(0, 1.25, t);
          layerMeshes[0].position.y = separation * 1.5;   // Presentation (top)
          layerMeshes[1].position.y = separation * 0.5;   // API Gateway
          layerMeshes[2].position.y = -separation * 0.5;  // Microservices
          layerMeshes[3].position.y = -separation * 1.5;  // Databases (bottom)

          // Ring opens slightly along X
          outerRing.rotation.x = t * Math.PI * 0.3;
        }
        // --------------------------------------------------------------------
        // ACT III: THE BUILD (MONARC Projects: 0.45 - 0.70)
        // Geometry reorganizes into a multi-tenant node constellation
        // Lateral camera move gives full negative space to case studies
        // --------------------------------------------------------------------
        else if (scrollProgress < 0.7) {
          const t = (scrollProgress - 0.45) / 0.25;
          camera.position.x = THREE.MathUtils.lerp(2.8, -2.5, t);
          camera.position.y = THREE.MathUtils.lerp(-0.2, 0.6, t);
          camera.position.z = THREE.MathUtils.lerp(8.4, 9.2, t);
          rootGroup.position.set(THREE.MathUtils.lerp(2.6, -2.4, t), 0, 0);
          rootGroup.scale.setScalar(THREE.MathUtils.lerp(1.0, 0.85, t));

          // Multi-tenant cluster formation: satellites expand outwards
          satellites.forEach((sat, i) => {
            sat.mesh.position.y = Math.sin(t * Math.PI + i) * 1.8;
          });
        }
        // --------------------------------------------------------------------
        // ACT IV: THE TIMELINE (Experience: 0.70 - 0.88)
        // Service nodes line up vertically depicting API microservices
        // --------------------------------------------------------------------
        else if (scrollProgress < 0.88) {
          const t = (scrollProgress - 0.7) / 0.18;
          camera.position.x = THREE.MathUtils.lerp(-2.5, 1.8, t);
          camera.position.y = THREE.MathUtils.lerp(0.6, -0.6, t);
          camera.position.z = THREE.MathUtils.lerp(9.2, 8.5, t);
          rootGroup.position.set(THREE.MathUtils.lerp(-2.4, 1.8, t), 0, 0);
          rootGroup.scale.setScalar(THREE.MathUtils.lerp(0.85, 0.95, t));

          // Align nodes into a service pipeline
          const collapse = 1 - t;
          layerMeshes[0].position.y = collapse * 1.5;
          layerMeshes[1].position.y = collapse * 0.5;
          layerMeshes[2].position.y = -collapse * 0.5;
          layerMeshes[3].position.y = -collapse * 1.5;
        }
        // --------------------------------------------------------------------
        // ACT V: THE CONNECTION (Contact: 0.88 - 1.00)
        // Scattered components collapse & reconstruct into ONE luminous ring
        // --------------------------------------------------------------------
        else {
          const t = (scrollProgress - 0.88) / 0.12;
          camera.position.x = THREE.MathUtils.lerp(1.8, 0, t);
          camera.position.y = THREE.MathUtils.lerp(-0.6, 0, t);
          camera.position.z = THREE.MathUtils.lerp(8.5, 7.2, t);
          rootGroup.position.set(THREE.MathUtils.lerp(1.8, 0, t), 0, 0);
          rootGroup.scale.setScalar(THREE.MathUtils.lerp(0.95, 1.08, t));

          // Full re-integration into unified ring
          layerMeshes.forEach((mesh) => (mesh.position.y = 0));
          outerRing.rotation.x = THREE.MathUtils.lerp(outerRing.rotation.x, 0, t);
          signalTrack.scale.setScalar(THREE.MathUtils.lerp(1, 1.04, t));
        }

        camera.lookAt(rootGroup.position.x * 0.35, rootGroup.position.y * 0.35, 0);
      },
    });

    // ------------------------------------------------------------------------
    // Animation Loop
    // ------------------------------------------------------------------------
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous micro-rotations
        innerRing.rotation.z = elapsedTime * 0.3;
        signalTrack.rotation.z = -elapsedTime * 0.45;

        // Satellites orbiting & dynamic connection lines
        const linePosArray = connectionLines.geometry.attributes.position
          ? connectionLines.geometry.attributes.position.array
          : null;

        satellites.forEach((sat, i) => {
          sat.baseAngle += 0.009 * sat.speed;
          const sx = Math.cos(sat.baseAngle) * sat.baseRadius;
          const sz = Math.sin(sat.baseAngle) * sat.baseRadius;
          const sy = sat.mesh.position.y || Math.sin(elapsedTime * 1.5 + i) * 0.4;
          sat.mesh.position.set(sx, sy, sz);
          sat.mesh.rotation.y = elapsedTime * 2.2;

          if (linePosArray) {
            const idx = i * 6;
            linePosArray[idx] = 0;
            linePosArray[idx + 1] = 0;
            linePosArray[idx + 2] = 0;
            linePosArray[idx + 3] = sx;
            linePosArray[idx + 4] = sy;
            linePosArray[idx + 5] = sz;
          }
        });

        if (connectionLines.geometry.attributes.position) {
          connectionLines.geometry.attributes.position.needsUpdate = true;
        }

        // Particle field subtle drift
        particles.rotation.y = elapsedTime * 0.025;

        // Pointer Parallax Camera reaction
        camera.position.x += (mouse.x * 0.5 - (camera.position.x - (rootGroup.position.x + 0.15))) * 0.02;
        camera.position.y += (-mouse.y * 0.35 - (camera.position.y - 0.15)) * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ------------------------------------------------------------------------
    // Resize Handler
    // ------------------------------------------------------------------------
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      if (!isMobile) {
        window.removeEventListener("mousemove", onMouseMove);
      }
      scrollTriggerInstance.kill();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#101315]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#b8ff45_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px] bg-[#b8ff45]/10 pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
