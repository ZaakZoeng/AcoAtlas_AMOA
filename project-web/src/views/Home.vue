<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
const isDark = ref(useDark());
const screenWidth = ref();

// 监听浏览器宽度
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  }
})

</script>

<template>
  <!-- 首页背景图 -->
  <div class="home-background">
  </div>
  <!-- 首页导语 -->
  <el-row class="home-intro">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1 class="amoa-title">AMOA</h1>
      <h2 style="color: #fff;"><i>Aurelia coerulea</i> Multi-Omics Atlas</h2>
      <span style="color: #fff;">
        A comprehensive multi-omics resource for <i>A. coerulea</i>, integrating
        chromosome-level genome, single-nucleus transcriptomes, and spatial
        gene expression data to explore the evolution of the nervous system.
      </span>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 首页内容 -->
  <el-row :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <!-- 招兵买马 -->
      <div class="home-recruiting">
        <el-row>
          <!-- 8→24 -->
          <!-- <el-col :span="8"> -->
          <el-col :span="screenWidth > 1200 ? 8 : 24">
            <h1 class="section-header">Data Summary</h1>
          </el-col>
          <!-- 14→24，2→0 -->
          <!-- <el-col :span="14" :offset="2"> -->
          <el-col :span="screenWidth > 1200 ? 14 : 24" :offset="screenWidth > 1200 ? 2 : 0">
            <h2 class="sub-header">Multi-scale Resource Construction</h2>
            <div class="web-text">
              <p>
                <strong>Genome Assembly:</strong>
                Constructed a <b>554.10 Mb</b> chromosome-level genome using 7 samples (WGS, PacBio HiFi, Hi-C, and
                RNA-seq), providing a high-quality genetic foundation.
              </p>

              <p>
                <strong>Single-nucleus transcriptomes:</strong>
                Profiled <b>32,660</b> high-quality snRNA-seq cells from 3 samples, identifying <b>7</b> major cell types and
                <b>2,318</b> differentially expressed genes (DEGs) across subtypes.
              </p>

              <p>
                <strong>Spatial Transcriptomics:</strong>
                Analyzed <b>10,549</b> spatial spots (bin50) from 1 sample using Stereo-seq, mapping the spatial
                distribution of <b>4</b> key cell types in the umbrella margin.
              </p>

              <p>
                <strong>Refined Annotation:</strong>
                Integrated full-length transcripts from 2 samples via CycloneSeq to optimize gene models and
                enhance functional annotation information.
              </p>

              <p
                style="margin-top: 20px; font-style: italic; color: #666; border-left: 4px solid #409EFF; padding-left: 15px;">
                AMOA serves as a pivotal data resource for exploring the origins and evolution of the primitive nervous
                system in <i>A. coerulea</i>.
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
.home-background {
  width: 100%;
  min-height: 100%;
  background: url("./../assets/home-amoa.png") center center no-repeat;
  /* background-size: 100% 100%; */
  background-size: cover;
  position: fixed;
  z-index: -1;
  overflow: auto;
}

.home-intro {
  padding: 100px 0 220px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  /* color: white; */
  /* border: 1px solid green; */
}

.amoa-title {
  color: #409EFF;
  /* 给 AMOA 一个亮眼的蓝色 */
  font-weight: bold;
}

.home-intro h1 {
  font-size: 80px;
  margin-bottom: 10px;
}

.home-intro h2 {
  /* font-size: 60px; */
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 20px;
}

.home-intro span {
  /* font-size: 48px;
  line-height: 1.2; */
  font-size: 24px;
  line-height: 1.4;
  display: block;
  max-width: 900px;
}

.home-recruiting {
  padding: 50px 0 80px 0;
  /* padding: 60px 0 80px 0; */
}

.section-header {
  font-size: 48px;
  color: #409EFF;
}

.sub-header {
  font-size: 32px;
  margin-bottom: 20px;
}

.web-text {
  font-size: 18px;
  line-height: 1.8;
}

.web-text p {
  margin-bottom: 10px;
}

/* 判断屏幕宽度小于1080px后使用百分比 */
@media screen and (max-width: 1200px) {
  .home-intro {
    padding: 100px 0 200px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }

  .home-intro h1 {
    font-size: 64px;
  }

  .home-intro h2 {
    font-size: 46px;
  }

  .home-intro span {
    font-size: 32px;
  }
}

/* 判断屏幕宽度小于640px后使用百分比 */
@media screen and (max-width: 640px) {
  .home-intro {
    padding: 100px 0 180px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }

  .home-intro h1 {
    font-size: 52px;
  }

  .home-intro h2 {
    font-size: 36px;
  }

  .home-intro span {
    font-size: 28px;
  }
}</style>
