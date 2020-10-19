<template>
  <div class="index-container" ></div>
</template>

<script>
/**
 * 画线
 */
import * as THREE from 'three'
export default {
  data () {
    return {
      title: 'xx'
    }
  },
  created () {
    console.log('created')
    this.init();
  },
  methods: {
    init () {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff })
      const points = [];
      points.push(new THREE.Vector3(-10, 0, 0));
      points.push(new THREE.Vector3(0, 10, 0));
      points.push(new THREE.Vector3(10, 0, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material)
      scene.add(line)
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);
      const animate = function () {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()
    }
  }
}
</script>

<style lang="less" scoped>
.index-container {
  height: 100%;
  width: 100%;
}
</style>
