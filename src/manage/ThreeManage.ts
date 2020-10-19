import * as THREE from 'three';
import Stats from 'stats.js';
// const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
// window.requestAnimationFrame = requestAnimationFrame;

export default class ThreeManage {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  stats: Stats;

  constructor (domId: string) {
    let container = document.getElementById(domId || '3d-container');
    if (container) {
      container.innerHTML = '';
    } else {
      container = document.createElement('div');
      container.setAttribute('id', domId || '3d-container');
    }
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    this.camera.position.z = 5
    this.scene = new THREE.Scene();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);
    // 检测器
    this.stats = new Stats();
    this.stats.showPanel(0);
    container.appendChild(this.stats.dom);
    document.body.appendChild(container);
  }

  // 测验数据
  addDefaultCube (): void {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
  }

  addObject (object: THREE.Mesh) {
    this.scene.add(object);
  }

  draw () {
    const animate = () => {
      this.stats.begin();
      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(animate);
      this.stats.end();
    }
    window.requestAnimationFrame(animate);
  }
}
