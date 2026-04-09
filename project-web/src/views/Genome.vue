<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core";
// Import image assets
import ImgWorkflow from "./../assets/img/Genome_01_workflow.png";
import ImgCharacteristics from "./../assets/img/Genome_02_characteristics.png";

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
            <div class="wrapper-sketch-text-title">Genome</div>
            <div class="wrapper-sketch-text-subtitle">Chromosome-level Assembly</div>
            <h1 class="wrapper-sketch-text-content">
              A High-quality <i>De Novo</i> Genome Reference for the Moon Jellyfish <i>Aurelia coerulea</i>.
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
              <font-awesome-icon :icon="['fas', 'dna']" class="icon-m" />
              <span>Genome assembly and annotation optimization</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgWorkflow" :preview-src-list="[ImgWorkflow]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Chromosome-level genome assembly and CycloneSeq-optimized annotation of the moon jellyfish <i>A.
                    coerulea</i>.
                </strong>
              </p>
              <ul class="card-image-description-list">
                <li>(A) Flowchart of chromosome-level genome assembly in the moon jellyfish.</li>
                <li>(B) Flowchart for optimizing genome annotation information based on CycloneSEQ long-read sequencing.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'dna']" class="icon-m" />
              <span>Genomic characteristics</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgCharacteristics" :preview-src-list="[ImgCharacteristics]" :initial-index="0"
                fit="contain" class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Genomic characteristics of moon jellyfish <i>A. coerulea</i>.
                </strong>
              </p>
              <ul class="card-image-description-list">
                <li>(A) Image of adult <i>A. coerulea</i>.</li>
                <li>(B) Genome size estimation using GenomeScope version 1.0 with 17-mer.</li>
                <li>(C) Genome-wide all-by-all Hi-C matrix. The marked region on Chromosome 3 indicates a potential
                  assembly discontinuity. Users should exercise caution when performing fine-scale downstream analyses in
                  this specific genomic interval.</li>
                <li>(D) Circos view of the assembled chromosomes showing marker distributions at 2-Mb sliding windows from
                  outer to inner circle: gene density, GC content, tandem repeat density, transposable element density.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'dna']" class="icon-m" />
              <span>Genomic JBrowse</span>
            </h1>
            <div class="iframe-wrapper">
              <iframe src="api/jbrowse/index.html?config=config.json" class="iframe" allowfullscreen frameborder="0"></iframe>
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
                  Hu X, Guo Y, Zhang Z, Wang L, Chen D, Zhuang Z, Wang M, Liu S, Feng S. Chromosome-level genome
                  assembly and annotation of the moon jellyfish Aurelia coerulea. Sci Data. 2025.
                  <a href="https://doi.org/10.1038/s41597-026-07102-9"
                    target="_blank">https://doi.org/10.1038/s41597-026-07102-9</a>.
                </span>
              </div>
              <div class="citation-content">
                <span class="citation-index">[2]</span>
                <span class="citation-text">
                  NCBI GenBank.
                  <a href="https://identifiers.org/ncbi/insdc.gca:GCA_051233565.1"
                    target="_blank">https://identifiers.org/ncbi/insdc.gca:GCA_051233565.1</a> (2025).
                </span>
              </div>
              <div class="citation-content">
                <span class="citation-index">[3]</span>
                <span class="citation-text">
                  NCBI Sequence Read Archive.
                  <a href="https://identifiers.org/ncbi/insdc.sra:SRP596850"
                    target="_blank">https://identifiers.org/ncbi/insdc.sra:SRP596850</a> (2025).
                </span>
              </div>
              <div class="citation-content">
                <span class="citation-index">[4]</span>
                <span class="citation-text">
                  Hu, Xinyue; Guo; Zhang, Ze; Wang, Liyuan; Chen, Duoyuan; Zhuang, Zhenkun; et al. (2025).
                  Chromosome-level genome assembly and annotation of the moon jellyfish Aurelia coerulea. figshare.
                  Dataset.
                  <a href="https://doi.org/10.6084/m9.figshare.29465030.v2"
                    target="_blank">https://doi.org/10.6084/m9.figshare.29465030.v2</a>
                </span>
              </div>
              <div hidden class="citation-content">
                <span class="citation-index">[5]</span>
                <span class="citation-text">
                  Optimized annotations
                  <a href="https://doi.org/10.6084/m9.figshare.29465030.v2"
                    target="_blank">优化后的注释信息链接</a>
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

.iframe-wrapper {
  margin: 0 auto 0 auto;
  /* auto实现水平居中 */
  height: 700px;
  /* JBrowse 2 建议高度不低于 600px 以便显示完整的 Track 列表 */
  width: 100%;
  border: 1px solid v-bind('isDark ? "#333" : "#ebeef5"');
  border-radius: 8px;
  overflow: hidden;
}

.iframe {
  width: 100%;
  height: 100%;
  border: none;
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