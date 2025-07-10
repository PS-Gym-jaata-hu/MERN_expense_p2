import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#111827'); // Tailwind gray-900

    const camera = new THREE.PerspectiveCamera(100, 1, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(300, 300);
    renderer.setClearColor('#111827'); // ensures background blends
    mountRef.current.appendChild(renderer.domElement);

    //Spinning cube
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff99 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // const geometry = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 64); // radiusTop, radiusBottom, height, segments
    // const material = new THREE.MeshStandardMaterial({
    //   color: 0xfacc15, // Tailwind yellow-400
    //   metalness: 0.8,
    //   roughness: 0.3,
    // });
    // const coin = new THREE.Mesh(geometry, material);
    // scene.add(coin);

// Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;

    let isUserRotating = false;

    controls.addEventListener('start', () => {
    isUserRotating = true;
    });

    controls.addEventListener('end', () => {
    isUserRotating = false;
    });

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);


     const loader = new GLTFLoader();
    let walletModel = null;

    loader.load('./models/kevin_the_cube.glb', (gltf) => {
      walletModel = gltf.scene;
      walletModel.scale.set(1.2, 1.2, 1.2);
      walletModel.rotation.y = Math.PI;
      scene.add(walletModel);
    });


    // Animation
    const animate = function () {
      requestAnimationFrame(animate);
      if(walletModel && !isUserRotating){walletModel.rotation.x += 0.04;
      walletModel.rotation.y += 0.04;}
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;

    //     coin.rotation.y += 0.01;
    //     coin.rotation.x = Math.sin(Date.now() * 0.002) * 0.3;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="rounded-2xl p-2"
      style={{ backgroundColor: '#111827' }}
    />
  );
}
