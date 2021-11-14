// TOGGLE MENU
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

// FOR 3D MODEL

// === VARIABLES ===
// let container;
// let camera;
// let renderer;
// let scene;
// let airplane;

// function init() {
//   container = document.querySelector(".scene");

// Create scene
//   scene = new THREE.Scene();

//   const fov = 35;
//   const aspect = container.clientWidth / container.clientHeight;
//   const near = 0.1;
//   const far = 1000;

// Camera Setup
//   camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(-5, 3, 25);

//   const ambient = new THREE.AmbientLight(0x404040, 3);
//   scene.add(ambient);

// Renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);

//   container.appendChild(renderer.domElement);

// Load Model
//   let loader = new THREE.GLTFLoader();
//   loader.load("./3d/scene.gltf", function (gltf) {
//     scene.add(gltf.scene);
//     console.log(gltf);
//     renderer.render(scene, camera);
//   });
// }

// init();
