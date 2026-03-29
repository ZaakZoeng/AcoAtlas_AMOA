<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core";
import ucasImage from "./../assets/img/UCAS.png";

const isDark = ref(useDark());

// 1. 自动获取当前年份
const currentYear = new Date().getFullYear();

// 2. 动态加载 Clustrmaps Globe 脚本
const globeContainer = ref<HTMLElement | null>(null);
const mobileGlobeContainer = ref<HTMLElement | null>(null);

const loadGlobeScript = (target: HTMLElement | null) => {
  if (!target) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.id = "clstr_globe";
  script.setAttribute("data-clstr-globe-link", "https://clustrmaps.com/site/1c9kq");
  script.src = "//clustrmaps.com/globe.js?d=DgbseS68tbhFmnePsrKjWwI4qLL6DWkohB75KvmvBLo";
  target.appendChild(script);
};

onMounted(() => {
  // 根据当前显示的容器加载脚本
  if (window.innerWidth >= 680) {
    loadGlobeScript(globeContainer.value);
  } else {
    loadGlobeScript(mobileGlobeContainer.value);
  }
});
</script>

<template>
  <el-row :style="{ 'background-color': !isDark ? '#f8f4ed' : '#0f1423' }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-menu
        class="footer-wrap"
        mode="horizontal"
        :ellipsis="false"
        :background-color="!isDark ? '#f8f4ed' : '#0f1423'"
      >
        <div>
          <a href="https://www.ucas.ac.cn/" target="_blank">
            <el-image class="footer-wrap-logo" :src="ucasImage">
              <template #placeholder>Loading<span class="dot">...</span></template>
            </el-image>
          </a>
        </div>
        <div class="footer-wrap-flex-grow"></div>
        
        <div ref="globeContainer" class="globe-box"></div>
        
        <div class="footer-wrap-flex-grow"></div>
        <div class="footer-wrap-text">
          <div>© {{ currentYear }}. Powered by <a href="https://zaakzoeng.github.io/" target="_blank">Ze Zhang</a></div>
        </div>
      </el-menu>

      <div class="mobile-footer-wrap">
        <div>
          <a href="https://www.ucas.ac.cn/" target="_blank">
            <el-image class="footer-wrap-logo" :src="ucasImage">
              <template #placeholder>Loading<span class="dot">...</span></template>
            </el-image>
          </a>
        </div>
        
        <div ref="mobileGlobeContainer" class="mobile-globe-box"></div>

        <div class="mobile-footer-wrap-text">
          <div>© {{ currentYear }}. Powered by <a href="https://zaakzoeng.github.io/" target="_blank">Ze Zhang</a></div>
        </div>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
/* 样式调整以适配 3D 地球仪 */
.globe-box {
  width: 150px; /* 根据需要调整地球仪大小 */
  display: flex;
  align-items: center;
}

.mobile-globe-box {
  margin: 20px auto;
  width: 120px;
}

.footer-wrap {
  width: 100%;
  padding: 50px 0;
  border: none;
  display: flex;
  align-items: center;
}

.footer-wrap-logo {
  height: 57px;
}

.footer-wrap-flex-grow {
  flex-grow: 1;
}

.footer-wrap-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.mobile-footer-wrap {
  padding: 50px 0;
  text-align: center;
}

.mobile-footer-wrap-text {
  margin: 25px 0 0 0;
}

@media screen and (max-width: 680px) {
  .footer-wrap { display: none; }
}

@media screen and (min-width: 680px) {
  .mobile-footer-wrap { display: none; }
}
</style>