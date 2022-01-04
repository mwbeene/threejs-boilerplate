import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;

let controls;

let mesh;

init();
animate();

function init(){
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, .01, 10 );
  camera.position.z = 4;

  scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry( 2, 2, 2 );
  const material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 5;

  window.addEventListener( 'resize', onWindowResize );
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate(){
  requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );
}