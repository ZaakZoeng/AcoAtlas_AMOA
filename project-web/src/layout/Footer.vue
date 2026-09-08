<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core";
import ucasImage from "./../assets/img/UCAS.png";

const isDark = ref(useDark());

// 1. 自动获取当前年份
const currentYear = new Date().getFullYear();

// 2. 动态加载 MapMyVisitors Globe 脚本
const globeContainer = ref<HTMLElement | null>(null);
const mobileGlobeContainer = ref<HTMLElement | null>(null);
const flagMapContainer = ref<HTMLElement | null>(null);
const mobileFlagMapContainer = ref<HTMLElement | null>(null);
const visitorMapContainer = ref<HTMLElement | null>(null);
const mobileVisitorMapContainer = ref<HTMLElement | null>(null);

const loadGlobeScript = (target: HTMLElement | null) => {
  if (!target) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.id = "mmvst_globe";
  script.src = "//mapmyvisitors.com/globe.js?d=FdVXsCmOYvwrlq2ENFLx5kuTGd8aqUlIqEzGVTT7dt0";
  target.appendChild(script);
};

const loadFlagCounterMap = (target: HTMLElement | null) => {
  if (!target) return;

  const link = document.createElement("a");
  link.href = "https://info.flagcounter.com/iDsR";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const image = document.createElement("img");
  image.src =
    "https://s01.flagcounter.com/map/iDsR/size_s/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/";
  image.alt = "Flag Counter";
  image.style.border = "0";
  image.style.display = "block";
  image.style.maxWidth = "100%";
  image.style.height = "auto";

  link.appendChild(image);
  target.appendChild(link);
};

const loadMapMyVisitorsMap = (target: HTMLElement | null) => {
  if (!target) return;

  const link = document.createElement("a");
  link.href = "https://mapmyvisitors.com/web/1c837";
  link.title = "Visit tracker";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const image = document.createElement("img");
  image.src =
    "https://mapmyvisitors.com/map.png?d=geToSe3DhPtbxgita3aSIsk66NN6ki0gXzkwoK8BuTw&cl=ffffff";
  image.alt = "Visit tracker";

  link.appendChild(image);
  target.appendChild(link);
};

onMounted(() => {
  // 根据当前显示的容器加载脚本
  if (window.innerWidth >= 680) {
    loadGlobeScript(globeContainer.value);
    loadFlagCounterMap(flagMapContainer.value);
    loadMapMyVisitorsMap(visitorMapContainer.value);
  } else {
    loadGlobeScript(mobileGlobeContainer.value);
    loadFlagCounterMap(mobileFlagMapContainer.value);
    loadMapMyVisitorsMap(mobileVisitorMapContainer.value);
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
        
        <div ref="globeContainer" class="globe-box" hidden aria-hidden="true"></div>
        <div ref="visitorMapContainer" class="visitor-map-box" hidden aria-hidden="true"></div>
        <div ref="flagMapContainer" class="flag-map-box"></div>
        
        <div class="footer-wrap-flex-grow"></div>
        <div class="footer-wrap-text">
          <div>© 2024 - {{ currentYear }}. Powered by <a href="https://zaakzoeng.github.io/" target="_blank">Ze Zhang</a></div>
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
        
        <div
          ref="mobileGlobeContainer"
          class="mobile-globe-box"
          hidden
          aria-hidden="true"
        ></div>
        <div
          ref="mobileVisitorMapContainer"
          class="mobile-visitor-map-box"
          hidden
          aria-hidden="true"
        ></div>
        <div ref="mobileFlagMapContainer" class="mobile-flag-map-box"></div>

        <div class="mobile-footer-wrap-text">
          <div>© 2024 - {{ currentYear }}. Powered by <a href="https://zaakzoeng.github.io/" target="_blank">Ze Zhang</a></div>
        </div>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
.globe-box,
.mobile-globe-box,
.visitor-map-box,
.mobile-visitor-map-box {
  display: none;
}

.flag-map-box {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-flag-map-box {
  width: 200px;
  margin: 20px auto;
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
.footer-wrap-text a {
  color: #409EFF;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-wrap-text a:hover {
  text-decoration: underline;
  opacity: 0.8;
}


.mobile-footer-wrap {
  padding: 50px 0;
  text-align: center;
}

.mobile-footer-wrap-text {
  margin: 25px 0 0 0;
}

.mobile-footer-wrap-text a {
  color: #409EFF;
  text-decoration: none;
  transition: opacity 0.2s;
}

.mobile-footer-wrap-text a:hover {
  text-decoration: underline;
  opacity: 0.8;
}

@media screen and (max-width: 680px) {
  .footer-wrap { display: none; }
}

@media screen and (min-width: 680px) {
  .mobile-footer-wrap { display: none; }
}
</style>
