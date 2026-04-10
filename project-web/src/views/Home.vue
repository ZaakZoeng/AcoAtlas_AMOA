<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useDark } from "@vueuse/core";
// 引入 Element Plus 图标（需确保已安装 @element-plus/icons-vue）
import { Message, Location, OfficeBuilding, Monitor } from "@element-plus/icons-vue";

// 1. 引入图片
import ImgHome1 from "./../assets/img/Home_01.png";
import ImgHome2 from "./../assets/img/Home_02.png";
import ImgHome3 from "./../assets/img/Home_03.png";
import ImgHome4 from "./../assets/img/Home_04.png";
import ImgHome5 from "./../assets/img/Home_05.png";

const isDark = ref(useDark());
const screenWidth = ref(window.innerWidth);

const homeModules = reactive([
  { name: "GSP-Cryo", path: "/gsp-cryo", img: ImgHome1 },
  { name: "Genome", path: "/genome", img: ImgHome2 },
  { name: "Transcriptome", path: "/transcriptome", img: ImgHome3 },
  { name: "Cross-Species", path: "/cross-species", img: ImgHome4 },
  { name: "Pathway", path: "/pathway", img: ImgHome5 }
]);

const contact = reactive({
  map: "/api/Map.html"
});

onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  }
});
</script>

<template>
  <div class="home-background"></div>

  <el-row class="home-intro">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1 class="amoa-title">AMOA</h1>
      <h2 style="color: #fff;"><i>Aurelia coerulea</i> Multi-Omics Atlas</h2>
      <span style="color: #fff;">
        A comprehensive multi-omics resource for <i>A. coerulea</i> integrating
        a chromosome-level genome assembly, single-nucleus transcriptomes, and spatial gene expression profiles to explore
        the Evo-Devo blueprint of early metazoan life.
      </span>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>

  <el-row :style="{ 'background-color': (!isDark ? '#f0f2f5' : '#131124') }" class="home-content">
    <el-col :span="2"></el-col>
    <el-col :span="20">

      <div class="module-navigation-wrapper">
        <el-row type="flex" justify="center">
          <el-col :span="20">
            <div class="module-flex-container">
              <div v-for="item in homeModules" :key="item.name" class="nav-item" @click="$router.push(item.path)">
                <div class="circle-box">
                  <el-image :src="item.img" fit="cover" class="nav-img" />
                </div>
                <h3 class="nav-title">{{ item.name }}</h3>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="home-summary-section">
        <el-row :gutter="40">
          <el-col :span="screenWidth > 1200 ? 8 : 24">
            <div class="sticky-header">
              <h1 class="section-header">Data Summary</h1>
              <div class="section-line"></div>
              <p class="section-desc">Multi-scale Resource Construction for Moon Jellyfish.</p>
            </div>
          </el-col>

          <el-col :span="screenWidth > 1200 ? 16 : 24">
            <div class="data-grid">
              <div class="data-card">
                <el-icon class="card-icon">
                  <Monitor />
                </el-icon>
                <div class="card-body">
                  <h3>Genome Assembly</h3>
                  <p>Constructed a <b>554.10 Mb</b> chromosome-level genome using 7 samples (WGS, PacBio HiFi, Hi-C, and
                    RNA-seq).</p>
                </div>
              </div>

              <div class="data-card">
                <el-icon class="card-icon">
                  <Monitor />
                </el-icon>
                <div class="card-body">
                  <h3>Refined Annotation</h3>
                  <p>Integrated full-length transcripts via CycloneSeq to optimize gene models and enhance functional
                    annotation.</p>
                </div>
              </div>

              <div class="data-card">
                <el-icon class="card-icon">
                  <Monitor />
                </el-icon>
                <div class="card-body">
                  <h3>Single-nucleus Transcriptomes</h3>
                  <p>Profiled <b>32,660</b> cells, identifying <b>7</b> major cell types and <b>2,318</b> differentially
                    expressed genes (DEGs).</p>
                </div>
              </div>

              <div class="data-card">
                <el-icon class="card-icon">
                  <Monitor />
                </el-icon>
                <div class="card-body">
                  <h3>Spatial Transcriptomics</h3>
                  <p>Analyzed <b>10,549</b> spatial spots (bin50) using Stereo-seq, mapping <b>4</b> key cell types in the
                    umbrella margin.</p>
                </div>
              </div>

              <div class="data-card">
                <el-icon class="card-icon">
                  <Monitor />
                </el-icon>
                <div class="card-body">
                  <h3>Cross-species Integration</h3>
                  <p>Covered <b>9</b> species across 4 basal lineages via <b>BasalMetazoansDataset</b>, involving
                    <b>173,786</b> cells.
                  </p>
                </div>
              </div>

              <div class="data-card">
                <el-icon class="card-icon">
                  <Monitor />
                </el-icon>
                <div class="card-body">
                  <h3>Neuro-evolutionary Pathways</h3>
                  <p>Identified <b>109</b> NCE-COGs, <b>154</b> NC-DEOGs, and <b>165</b> NO-DNBGs for multi-level
                    functional enrichment analysis.</p>
                </div>
              </div>
            </div>

            <div class="summary-quote">
              <p>AMOA serves as a pivotal data resource for exploring the origins and evolution of the primitive nervous
                system in basal metazoans.</p>
            </div>
          </el-col>
        </el-row>
      </div>

      <el-divider border-style="dashed" style="margin: 60px 0;"></el-divider>

      <div class="home-contact-section">
        <el-row :gutter="40">
          <el-col :span="screenWidth > 1200 ? 9 : 24">
            <h1 class="section-header">Contact</h1>
            <div class="contact-card-info">
              <h2 class="contact-name">Ze Zhang (张泽)</h2>
              <ul class="contact-list">
                <li><el-icon>
                    <OfficeBuilding />
                  </el-icon> Hangzhou Institute for Advanced Study (HIAS)</li>
                <li><el-icon>
                    <OfficeBuilding />
                  </el-icon> University of Chinese Academy of Sciences (UCAS)</li>
                <li><el-icon>
                    <Location />
                  </el-icon> No.1 Xiangshan Branch, Hangzhou 310004, China</li>
                <li><el-icon>
                    <Message />
                  </el-icon> zaakzoeng@gmail.com</li>
              </ul>
            </div>
          </el-col>

          <el-col :span="screenWidth > 1200 ? 15 : 24" v-if="contact.map">
            <div class="map-container">
              <iframe class="map-iframe" :src="contact.map" frameborder="0"></iframe>
            </div>
          </el-col>
        </el-row>
      </div>

    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
/* 原有背景与导语样式保持不变 */
.home-background {
  width: 100%;
  min-height: 100%;
  background: url("./../assets/home-amoa.png") center center no-repeat;
  background-size: cover;
  position: fixed;
  z-index: -1;
  overflow: auto;
}

.home-intro {
  padding: 100px 0 220px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.amoa-title {
  color: #409EFF;
  font-weight: bold;
  font-size: 80px;
  margin-bottom: 10px;
}

.home-intro h2 {
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 20px;
}

.home-intro span {
  font-size: 24px;
  line-height: 1.4;
  display: block;
  max-width: 900px;
}

/* 原有导航模块样式 (保持不变) */
.module-navigation-wrapper {
  padding: 80px 0 60px 0;
}

.module-flex-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.nav-item {
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.circle-box {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid v-bind('isDark ? "#2a2a3a" : "#fff"');
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-item:hover .circle-box {
  transform: scale(1.1) translateY(-10px);
  box-shadow: 0 15px 35px rgba(64, 158, 255, 0.2);
  border-color: #409EFF;
}

.nav-title {
  margin-top: 25px;
  font-size: 18px;
  font-weight: 600;
  color: v-bind('isDark ? "#fff" : "#333"');
  letter-spacing: 0.5px;
}

.nav-img {
  width: 100%;
  height: 100%;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(64, 158, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.hover-overlay span {
  color: white;
  font-weight: bold;
  border: 1px solid white;
  padding: 4px 12px;
  border-radius: 20px;
}

.nav-item:hover .hover-overlay {
  opacity: 1;
}

/* --- 润色：Data Summary 样式 --- */
.home-summary-section,
.home-contact-section {
  padding: 60px 0;
}

.section-header {
  font-size: 42px;
  color: #409EFF;
  font-weight: 800;
  margin-bottom: 10px;
}

.section-line {
  width: 60px;
  height: 4px;
  background: #409EFF;
  margin-bottom: 20px;
}

.section-desc {
  color: #909399;
  font-size: 16px;
  font-style: italic;
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.data-card {
  display: flex;
  padding: 20px;
  background: v-bind('isDark ? "#1e1b35" : "#fff"');
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.data-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 24px;
  color: #409EFF;
  margin-right: 15px;
  margin-top: 5px;
}

.card-body h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #409EFF;
}

.card-body p {
  font-size: 14px;
  line-height: 1.6;
  color: v-bind('isDark ? "#a8abb2" : "#606266"');
}

.summary-quote {
  margin-top: 40px;
  padding: 20px;
  border-left: 5px solid #409EFF;
  background: v-bind('isDark ? "rgba(64,158,255,0.1)" : "#eef6ff"');
  font-style: italic;
  font-size: 16px;
}

/* --- 润色：Contact 样式 --- */
.contact-card-info {
  margin-top: 20px;
}

.contact-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 15px;
  color: v-bind('isDark ? "#ccc" : "#444"');
}

.contact-list li .el-icon {
  color: #409EFF;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid v-bind('isDark ? "#333" : "#ebeef5"');
}

.map-iframe {
  width: 100%;
  height: 100%;
}

/* 响应式微调 */
@media screen and (max-width: 1200px) {
  .nav-item {
    width: 33%;
    margin-bottom: 20px;
  }

  .section-header {
    font-size: 32px;
  }

  .map-container {
    margin-top: 30px;
  }
}
</style>