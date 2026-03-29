<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core";
// Import image assets
import workflowImg from "./../assets/img/GSP-Cryo_01_workflow.png";
import resultImg from "./../assets/img/GSP-Cryo_02_result.png";

const isDark = ref(useDark());
const screenWidth = ref(1200);

onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  }
})
</script>

<template>
  <div class="wrapper-background"></div>
  
  <div class="wrapper-sketch">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-row>
          <el-col class="wrapper-sketch-text" :span="screenWidth > 1200 ? 16 : 24">
            <div class="wrapper-sketch-text-title">GSP-Cryo</div>
            <div class="wrapper-sketch-text-subtitle">Methodology & Application</div>
            <h1 class="wrapper-sketch-text-content">
              Gelatin Pretreatment for Brittle Tissue Spatial Transcriptomics.
            </h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>

  <el-row :style="{ 'background-color': (!isDark ? '#f8f9fa' : '#131124') }">
    <el-col :span="6"></el-col>
    <el-col :span="12">
      <div class="gsp-main-content">
        
        <el-card class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'vial']" class="icon-m" />
              <span>Figure 1. Schematic overview of the GSP-Cryo workflow</span>
            </div>
          </template>
          
          <div class="image-container">
            <el-image 
              :src="workflowImg" 
              :preview-src-list="[workflowImg]" 
              :initial-index="0"
              fit="contain" 
              class="gsp-display-img" 
              preview-teleported
            />
          </div>

          <div class="figure-description">
            <p>
              <strong>(A) Upper panel:</strong> Sequential steps of the GSP-Cryo process, including gelatin preparation (①), 
              tissue pretreatment (②), PFA fixation (③), gelatin soaking (④), optional flash-freezing (⑤), and OCT embedding for cryosectioning (⑥).
            </p>
            <p>
              <strong>(B) Lower panel:</strong> Downstream validation and application, involving H&E staining for morphological assessment, 
              RNA quality control (RIN evaluation), spatial library construction, sequencing, and spatial transcriptomics analysis.
            </p>
          </div>
        </el-card>

        <el-card class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'microscope']" class="icon-m" />
              <span>Figure 2. Full-process application of spatial transcriptome sequencing</span>
            </div>
          </template>
          
          <div class="image-container">
            <el-image 
              :src="resultImg" 
              :preview-src-list="[resultImg]" 
              :initial-index="0"
              fit="contain" 
              class="gsp-display-img"
              preview-teleported
            />
          </div>

          <div class="figure-description">
            <p>
              Full-process application using moon jellyfish specimen <i>Ac9-3</i> treated with GSP-Cryo:
            </p>
            <ul class="description-list">
              <li>(A-B) Sampling schematics and Stereo-seq chip placement.</li>
              <li>(C-F) H&E imaging, fluorescence images, cDNA fragment size distribution (Qsep400), library saturation, and ssDNA imaging.</li>
              <li>(G-I) MID count spatial expression distribution, Leiden clustering at bin50 resolution, and corresponding UMAP projection.</li>
            </ul>
          </div>
        </el-card>

      </div>
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<style scoped>
.gsp-main-content {
  padding: 60px 0 100px 0;
}

.data-card {
  margin-bottom: 40px;
  border-radius: 8px;
}

.card-header {
  font-size: 20px;
  font-weight: bold;
  color: #18338e;
  display: flex;
  align-items: center;
}

.icon-m {
  margin-right: 12px;
  color: #409EFF;
}

/* Image styling: centering and limiting size */
.image-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: v-bind('isDark ? "#1a1a1a" : "#fff"');
}

.gsp-display-img {
  width: 85%; /* Image does not fill the entire card width */
  max-width: 1000px;
  border-radius: 4px;
  cursor: zoom-in;
  transition: transform 0.2s ease-in-out;
}

.gsp-display-img:hover {
  transform: scale(1.01);
}

.figure-description {
  margin-top: 30px;
  padding: 20px;
  background: v-bind('isDark ? "rgba(255,255,255,0.05)" : "#f9f9f9"');
  border-left: 4px solid #409EFF;
  line-height: 1.8;
  font-size: 15px;
  color: v-bind('isDark ? "#a8abb2" : "#606266"');
}

.description-list {
  padding-left: 20px;
  margin-top: 10px;
}

/* Fix for dark mode header text */
.dark .card-header {
  color: #409EFF;
}
</style>