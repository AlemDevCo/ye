// Initialize Three.js scene
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('editor').appendChild(renderer.domElement);

// Cube texture loader for skybox
let loader = new THREE.CubeTextureLoader();
let texture = loader.load([

    // Skybox
    
    'textures/skybox/skybox-pz.jpg', // Right
    'textures/skybox/skybox-pz.jpg', // Left
    'textures/skybox/top.jpg', // Top
    'textures/skybox/bottom.jpg', // Bottom
    'textures/skybox/skybox-pz.jpg', // Front
    'textures/skybox/skybox-pz.jpg' // Back
]);
scene.background = texture;

// Basic cube object (example)
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Object manipulation example
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
