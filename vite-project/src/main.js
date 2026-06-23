import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { World } from "./world.js";
import { setupUI } from "./ui.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x80a0e0); // Set background color to black
document.body.appendChild(renderer.domElement);
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshLambertMaterial({ color: 0x0aff00 });
const stats = new Stats();
document.body.appendChild(stats.dom);

camera.position.set(-5, 5, 5);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping for smoother controls
controls.dampingFactor = 0.05; // Adjust the damping factor for desired effect
controls.target.set(5, 0, 5); // Set the target to the center of the world
controls.update(); // Update controls to apply the target


window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  // Recalculate projection matrix
  camera.updateProjectionMatrix();

  // Resize renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function setupLights() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);
}

const world = new World({ width: 32, height: 32 });
world.generate();
scene.add(world);

// function setupWorld(size) {
//   const count = size * size * size;
//   const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
  
//   let index = 0;
//   const dummy = new THREE.Object3D();
  
//   for (let x = 0; x < size; x++) {
//     for (let y = 0; y < size; y++) {
//       for (let z = 0; z < size; z++) {
//         dummy.position.set(x, y, z);
//         dummy.updateMatrix();
//         instancedMesh.setMatrixAt(index, dummy.matrix);
//         index++;
//       }
//     }
//   }
  
//   scene.add(instancedMesh);
// }



// 1. Create a clock instance
const clock = new THREE.Clock();

function animate() {
  // 2. Get the time elapsed since the last frame
  const delta = clock.getDelta();

  // 3. Increment the rotation dynamically (radians per second)
 
  controls.update();
  stats.update(); // Update stats if needed

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}



setupLights();
setupUI(world);
animate();

