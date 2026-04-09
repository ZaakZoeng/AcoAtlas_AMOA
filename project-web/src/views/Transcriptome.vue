<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useDark } from "@vueuse/core";
// Import image assets
import ImgRoadmap from "./../assets/img/Transcriptome_01_roadmap.png";
import ImgCCCcell from "./../assets/img/Transcriptome_02_ccc_cell.png";
import ImgCCCspot from "./../assets/img/Transcriptome_03_ccc_spot.png";

const transcriptome = reactive({
  sn: "/api/html/Aco_snRNA-seq.html",
  st: "/api/html/Aco_Stereo-seq.html",
  ccc_cell: "/api/html/CCC_cell_chord.html",
  ccc_spot: "/api/html/CCC_spot_chord.html"
})

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
            <div class="wrapper-sketch-text-title">Transcriptome</div>
            <div class="wrapper-sketch-text-subtitle">Single-nucleus & Spatial Atlas</div>
            <h1 class="wrapper-sketch-text-content">
              Mapping the Cellular Diversity and Spatial Organization of the <i>A. coerulea</i> Umbrella Margin.
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
              <font-awesome-icon :icon="['fas', 'book']" class="icon-m" />
              <span>Transcriptome sequencing roadmap</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgRoadmap" :preview-src-list="[ImgRoadmap]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Sequencing and transcriptome atlas construction process of moon jellyfish <i>A. coerulea</i> tissues.
                </strong>
              </p>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'book']" class="icon-m" />
              <span><i>A. coerulea</i> snRNA-seq atlas</span>
            </h1>
            <div class="iframe-wrapper">
              <iframe :src="`${transcriptome.sn}?theme=${isDark ? 'dark' : 'light'}`" class="iframe" allowfullscreen
                frameborder="0">
              </iframe>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'book']" class="icon-m" />
              <span><i>A. coerulea</i> Stereo-seq atlas (bin50)</span>
            </h1>
            <div class="iframe-wrapper">
              <iframe :src="`${transcriptome.st}?theme=${isDark ? 'dark' : 'light'}`" class="iframe" allowfullscreen
                frameborder="0">
              </iframe>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'book']" class="icon-m" />
              <span><i>A. coerulea</i> cells/spots communication</span>
            </h1>
            <el-row :gutter="20">
              <!-- 12→24 -->
              <el-col :span="screenWidth > 1200 ? 4 : 0"></el-col>
              <el-col :span="screenWidth > 1200 ? 8 : 24">
                <div style="background-color: #fff; border-radius: 8px;">
                  <el-image :src="ImgCCCcell" :preview-src-list="[ImgCCCcell]" :initial-index="0" fit="contain"
                    style="width: 100%; height: 400px; border: none;" preview-teleported />
                </div>
              </el-col>
              <el-col :span="screenWidth > 1200 ? 8 : 24">
                <div style="background-color: #fff; border-radius: 8px;">
                  <el-image :src="ImgCCCspot" :preview-src-list="[ImgCCCspot]" :initial-index="0" fit="contain"
                    style="width: 100%; height: 400px; border: none;" preview-teleported />
                </div>
              </el-col>
              <el-col :span="screenWidth > 1200 ? 4 : 0"></el-col>
              <!-- 12→24 -->
              <el-col :span="screenWidth > 1200 ? 4 : 0"></el-col>
              <el-col :span="screenWidth > 1200 ? 8 : 24">
                <div class="iframe-wrapper" style="width: 100%; height: 400px;">
                  <iframe :src="`${transcriptome.ccc_cell}?theme=${isDark ? 'dark' : 'light'}`" class="iframe"
                    allowfullscreen frameborder="0">
                  </iframe>
                </div>
              </el-col>
              <el-col :span="screenWidth > 1200 ? 8 : 24">
                <div class="iframe-wrapper" style="width: 100%; height: 400px;">
                  <iframe :src="`${transcriptome.ccc_spot}?theme=${isDark ? 'dark' : 'light'}`" class="iframe"
                    allowfullscreen frameborder="0">
                  </iframe>
                </div>
              </el-col>
              <el-col :span="screenWidth > 1200 ? 4 : 0"></el-col>
            </el-row>
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
                  Github: AcoAtlas_AMOA.
                  <a href="https://github.com/ZaakZoeng/AcoAtlas_AMOA"
                    target="_blank">https://github.com/ZaakZoeng/AcoAtlas_AMOA</a>.
                </span>
              </div>
            </div>
            <div>
              <div class="citation-content">
                <span class="citation-index">[2]</span>
                <span class="citation-text">
                  Moon Jellyfish snRNA-seq dataset.
                  <a href="https://github.com/ZaakZoeng/AcoAtlas_AMOA" target="_blank">单细胞核转录组数据集</a>.
                </span>
              </div>
            </div>
            <div>
              <div class="citation-content">
                <span class="citation-index">[3]</span>
                <span class="citation-text">
                  Moon Jellyfish Stereo-seq dataset.
                  <a href="https://github.com/ZaakZoeng/AcoAtlas_AMOA" target="_blank">空间转录组数据集</a>.
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
  height: 720px;
  width: 55%;
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