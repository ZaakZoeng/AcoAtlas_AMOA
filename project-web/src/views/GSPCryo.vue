<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core";
// Import image assets
import ImgJellyfish from "./../assets/img/GSP-Cryo_01_jellyfish.png";
import ImgWorkflow from "./../assets/img/GSP-Cryo_02_workflow.png";
import ImgResult from "./../assets/img/GSP-Cryo_03_result.png";

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
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="main-content">
        <el-card class="content-card">
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'microscope']" class="icon-m" />
              <span><i>A. coerulea</i> structure</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgJellyfish" :preview-src-list="[ImgJellyfish]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Schematic diagram of the moon jellyfish <i>A. coerulea</i> structure.
                </strong>
              </p>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'microscope']" class="icon-m" />
              <span>GSP-Cryo workflow</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgWorkflow" :preview-src-list="[ImgWorkflow]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Schematic overview of the GSP-Cryo workflow.
                </strong>
              </p>
              <ul class="card-image-description-list">
                <li>(A) The upper panel depicts the sequential steps of the GSP-Cryo workflow, beginning with gelatin
                  solution preparation (Step 1), followed by tissue preprocessing (Step 2), fixation in paraformaldehyde
                  (Step 3), immersion in gelatin solution (Step 4), optional rapid flash-freezing on crushed dry ice (Step
                  5), and embedding in OCT compound for cryosectioning (Step 6).</li>
                <li>(B) The lower panel outlines the subsequent validation and application steps, including serial H&E
                  staining to assess tissue morphology, RNA quality control (QC), spatial library construction and
                  sequencing, and high-resolution spatial omics analysis.</li>
              </ul>
            </div>
          </div>
          <div hidden>
            <el-divider></el-divider>
          </div>
          <div hidden>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'microscope']" class="icon-m" />
              <span>GSP-Cryo full-process application</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgResult" :preview-src-list="[ImgResult]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Full-process Stereo-seq spatial transcriptomics profiling of the <i>A. coerulea</i> umbrella margin
                  enabled by GSP-Cryo.
                </strong>
              </p>
              <ul class="card-image-description-list">
                <li>(A) Sampling schematic of the adult <i>A. coerulea</i> specimen Ac9-3 used for spatial transcriptomics
                  analysis.</li>
                <li>(B) Placement of the Ac9-3 cryosection onto the Stereo-seq T chip carrier.</li>
                <li>(C) Representative H&E-stained image and corresponding fluorescence image of the Ac9-3.</li>
                <li>(D) Size distribution of cDNA fragments from the Ac9-3 Stereo-seq library measured by Qsep400 DNA
                  analysis.</li>
                <li>(E) Plot of the sequencing saturation as a function of sequencing depth of the Ac9-3 Stereo-seq
                  library.</li>
                <li>(F) ssDNA imaging of the Ac9-3 tissue section acquired during the Stereo-seq workflow.</li>
                <li>(G) Spatial gene expression distribution plot shows MID count at each spot for Ac9-3.</li>
                <li>(H) Clustering spots (bin50) under tissue covered with the Leiden algorithm for Ac9-3.</li>
                <li>(I) UMAP projections of spots (bin50) colored by automated clustering for Ac9-3.</li>
              </ul>
            </div>
          </div>
        </el-card>

        <el-card class="content-card">
          <h1 class="card-header">
            <font-awesome-icon :icon="['fas', 'quote-left']" class="icon-m" />
            <span>Citation</span>
          </h1>
          <div class="citation-container">
            <div>
              <div class="citation-content">
                <span class="citation-index">[1]</span>
                <span class="citation-text">
                  张泽，冯春露，庄镇堃，陈成，胡馨月，陈铎元. 一种高含水量样本的空间转录组制备方法及其应用[P]. 中国：CN120275136B，2025-11-04 [2026-03-08].
                  <a href="https://epub.cnipa.gov.cn/cred/CN120275136B"
                    target="_blank">https://epub.cnipa.gov.cn/cred/CN120275136B</a>.
                </span>
              </div>
              <div hidden class="citation-content">
                <span class="citation-index">[2]</span>
                <span class="citation-text">
                  Zhang Z, Feng C, Lin Y, Wang L, Cai X, Mo S, Chang H, Zhuang Z, Chen D, Hu X, Guo W, Lu Y, Feng S, Xu X,
                  Liu S, Wang M, Liu X. GSP-Cryo: Gelatin pretreatment enables cryosectioning of brittle tissues for
                  spatial transcriptomics. iScience. (Manuscript submitted for publication).
                  <a href="https://epub.cnipa.gov.cn/cred/CN120275136B"
                    target="_blank">https://epub.cnipa.gov.cn/cred/CN120275136B</a>.
                </span>
              </div>
              <div hidden class="citation-content">
                <span class="citation-index">[3]</span>
                <span class="citation-text">
                  Github: AcoProtocol_GSP-Cryo.
                  <a href="https://github.com/ZaakZoeng/AcoProtocol_GSP-Cryo"
                    target="_blank">https://github.com/ZaakZoeng/AcoProtocol_GSP-Cryo</a>.
                </span>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
/* 容器整体边距 */
.main-content {
  padding: 40px 0 80px 0;
}

/* 卡片样式 */
.content-card {
  margin: 0 0 20px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* 标题样式：增加学术蓝和边距 */
.card-header {
  color: #409EFF;
}

.icon-m {
  margin-right: 12px;
  color: #409EFF;
}

/* 图片容器：负责居中和自适应宽度 */
.card-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
}

.card-image-display {
  /* 全屏（大屏）时占据 el-card 的 50% */
  width: 50%;
  border-radius: 8px;
  border: 1px solid v-bind('isDark ? "#333" : "#ebeef5"');
  cursor: zoom-in;
  transition: all 0.2s ease;
}

.card-image-display:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* 图注描述：宽度与图片对齐 */
.card-image-description {
  margin: 0 auto 0 auto;
  /* auto实现水平居中 */
  padding: 5px 20px;
  width: 50%;
  /* 初始宽度与图片一致 */
  background: v-bind('isDark ? "rgba(255,255,255,0.05)" : "#f9fbfd"');
  border-left: 3px solid #409EFF;
  line-height: 1.8;
  font-size: 15px;
  color: v-bind('isDark ? "#a8abb2" : "#555"');
  box-sizing: border-box;
  text-align: justify;
  /* 两端对齐，学术感更强 */
}

.card-image-description-list {
  padding-left: 20px;
  margin-top: 5px;
}

/* 引用容器样式 */
.citation-container {
  padding: 10px 20px;
}

.citation-content {
  line-height: 1.6;
  font-size: 14px;
  color: v-bind('isDark ? "#ccc" : "#444"');
  margin-bottom: 8px;
}

.citation-index {
  display: inline-block;
  vertical-align: 2px;
  font-weight: bold;
  color: #409EFF;
  margin-right: 10px;
}

.citation-text a {
  color: #409EFF;
  text-decoration: none;
  transition: opacity 0.2s;
}

.citation-text a:hover {
  text-decoration: underline;
  opacity: 0.8;
}

/* 响应式断点：关键 */
@media screen and (max-width: 1200px) {

  .card-image-display,
  .card-image-description {
    width: 100%;
    /* 半屏或手机端时，填满 el-card */
  }

  .card-header {
    font-size: 18px;
    justify-content: flex-start;
    /* 移动端标题左对齐 */
  }
}

@media screen and (max-width: 768px) {
  .citation-container {
    padding: 5px;
  }
}
</style>