import _ from 'lodash';
import * as THREE from 'three';

const scene = new THREE.Scene();

console.log( scene );

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());