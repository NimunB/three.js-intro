import * as THREE from "https://cdn.jsdelivr.net/npm/three@v0.108.0/build/three.module.js";
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@v0.108.0/examples/jsm/controls/OrbitControls.js";

function main() {
    const canvas = document.querySelector('#b');

    // Renderer
    const renderer = new THREE.WebGLRenderer({canvas, antialias : true});
    renderer.setPixelRatio(window.devicePixelRatio);

    // Camera
    const fov = 45;
    const aspect = 1.4;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.x = 0;
    camera.position.y = 2;
    camera.position.z = 5;

    // Scene
    const scene = new THREE.Scene();
    scene.color(ff99ff);

    // Directional & Ambient light in here
    {
        const color = 0xffffff;
        const intensity = 0.7;
        const directionalLight = new THREE.DirectionalLight(color, intensity);
        directionalLight.position.set(-1, 2, 4);
        scene.add(directionalLight);
    }
    
    // Sphere Geometry
    const radius = 1;
    const widthSegments = 32;
    const heightSegments = 32;
    const ballGeometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
    
    // Material (replaced by Texture)
    const ballMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(ball);

    // Texture
    
    // Plane (added at the end)
    {

    }

    // Orbit Controls (added at the end)


    // Allows Renderer to change its size 
    function resizeRendererToDisplaySize(renderer) {
        
    }

    // Animation/render loop
    function render(time) {
        
         renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();