<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useDark } from "@vueuse/core";
import { ElMessage } from 'element-plus'; // 引入提示组件

const isDark = ref(useDark());

// 响应式屏幕宽度
const screenWidth = ref(1200);
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  };
});

// 数据下载表格定义
const amoaDatasetTable = [
  {
    name: 'sc_BasalMetazoaDataset Integrated Dataset',
    file: 'sc_BasalMetazoaDataset.tar.gz',
    size: '7.2 GB',
    version: 'v1.0',
    description: 'sc_BasalMetazoaDataset.tar.gz'
  }
];

// 外部链接表格定义
const externalLinks = [
  { name: 'NCBI Taxonomy', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy' },
  { name: 'JBrowse 2 Official', url: 'https://jbrowse.org/jb2/' },
  { name: 'Stereo-seq Cloud', url: 'https://db.cngb.org/stomics/' }
];

/**
 * 执行下载
 * 路径指向后端配置的静态目录：/download/文件名
 */
const handleDownload = async (fileName: string) => {
  try {
    // 根据您的项目配置，API 基础路径可能为 /api 或 /FACdb-api
    const downloadUrl = `/api/download/${fileName}`;
    
    // 使用 fetch 获取流，能更好地处理大文件并支持 Loading 效果
    const response = await fetch(downloadUrl);
    
    if (!response.ok) throw new Error('File not found or server error');

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    ElMessage.success(`${fileName} download started.`);
  } catch (error) {
    console.error("Download failed:", error);
    ElMessage.error("Failed to download file. Please check server connection.");
  }
};

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="wrapper-background"></div>
  <div class="wrapper-sketch">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-row>
          <el-col class="wrapper-sketch-text" :span="screenWidth > 1200 ? 14 : 24">
            <div class="wrapper-sketch-text-title">Download</div>
            <div class="wrapper-sketch-text-subtitle">Data Resource Center</div>
            <h1 class="wrapper-sketch-text-content">
              Access chromosome-level genome, single-cell, and spatial transcriptomics datasets.
            </h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>

  <el-row :style="{ 'background-color': (!isDark ? '#f5f7fa' : '#131124'), 'min-height': '600px' }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="download-section">
        
        <el-card class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'download']" class="icon-margin" />
              <span>Multi-Omics Datasets</span>
            </div>
          </template>

          <el-table :data="amoaDatasetTable" border stripe style="width: 100%">
            <el-table-column prop="name" label="Dataset Name" min-width="150">
              <template #default="scope">
                <strong>{{ scope.row.name }}</strong>
              </template>
            </el-table-column>
            <el-table-column prop="version" label="Version" width="100" align="center" />
            <el-table-column prop="size" label="Size" width="120" align="center" />
            <el-table-column prop="description" label="Description" min-width="250" />
            <el-table-column label="Action" width="150" align="center" fixed="right">
              <template #default="scope">
                <el-button type="primary" size="default" @click="handleDownload(scope.row.file)" round>
                  <font-awesome-icon :icon="['fas', 'file-arrow-down']" style="margin-right: 5px;" />
                  Download
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>

        <el-card class="data-card" shadow="hover" style="margin-top: 40px; margin-bottom: 80px;">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'link']" class="icon-margin" />
              <span>External Resources</span>
            </div>
          </template>
          <el-table :data="externalLinks" border stripe>
            <el-table-column prop="name" label="Resource Name" width="250" />
            <el-table-column prop="url" label="URL" />
            <el-table-column label="Action" width="120" align="center">
              <template #default="scope">
                <el-button type="info" size="small" @click="openLink(scope.row.url)" plain>
                  Visit
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>

      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
/* 保持与 About 页一致的布局间距 */
.download-section {
  padding: 60px 0 80px 0;
}

.data-card {
  border-radius: 12px;
  overflow: hidden;
}

.card-header {
  font-size: 20px;
  font-weight: bold;
  color: #18338e;
  display: flex;
  align-items: center;
}

.icon-margin {
  margin-right: 12px;
  color: #409EFF;
}

/* 适配暗黑模式的文字颜色 */
:deep(.el-card__header) {
  background-color: v-bind('isDark ? "#1d1b31" : "#fafafa"');
}

/* 响应式调整 */
@media screen and (max-width: 1200px) {
  .download-section {
    padding: 30px 0;
  }
}
</style>