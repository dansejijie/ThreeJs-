<template>
  <div class="index-container">
  </div>
</template>

<script>
/**
 * ThreeManage 测试数据
 */
import * as THREE from 'three'
import ThreeManage from '../../manage/ThreeManage';
export default {
  name: 'a03',
  data () {
    return {};
  },
  mounted () {
    const threeManage = new ThreeManage();
    threeManage.addDefaultCube();
    threeManage.draw();
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.index-container {
  height: 100%;
  width: 100%;
  canvas {
    height: 100%;
    width: 100%;
  }
}
</style>
