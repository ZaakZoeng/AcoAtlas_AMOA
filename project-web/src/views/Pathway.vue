<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useDark } from "@vueuse/core";
import axios from "axios";

import ImgNCECOGs from "./../assets/img/Pathway_01_NCE-COGs.png";
import ImgNCDEOGs from "./../assets/img/Pathway_02_NC-DEOGs.png";
import ImgNODNBGs from "./../assets/img/Pathway_03_NO-DNBGs.png";

const isDark = ref(useDark());
const screenWidth = ref(1200);

// 分页配置
const pageSize = ref(10);

// 表格状态管理
const tables = ref({
  nce: { data: [], columns: [], count: 0, loading: true, currentPage: 1 },
  ncde: { data: [], columns: [], count: 0, loading: true, currentPage: 1 },
  nodnb: { data: [], columns: [], count: 0, loading: true, currentPage: 1 }
});

// --- 核心逻辑：分页计算属性 ---
// 为每个表格创建一个计算属性，只返回当前页的 15 行数据
const pagedNceData = computed(() => {
  const start = (tables.value.nce.currentPage - 1) * pageSize.value;
  return tables.value.nce.data.slice(start, start + pageSize.value);
});

const pagedNcdeData = computed(() => {
  const start = (tables.value.ncde.currentPage - 1) * pageSize.value;
  return tables.value.ncde.data.slice(start, start + pageSize.value);
});

const pagedNodnbData = computed(() => {
  const start = (tables.value.nodnb.currentPage - 1) * pageSize.value;
  return tables.value.nodnb.data.slice(start, start + pageSize.value);
});

// 通用数据获取函数 (保持不变)
const fetchTableData = async (type: 'nce' | 'ncde' | 'nodnb', url: string) => {
  tables.value[type].loading = true;
  try {
    const res = await axios.get(url);
    if (res.data) {
      tables.value[type].data = res.data.data || [];
      tables.value[type].columns = res.data.columns || [];
      tables.value[type].count = res.data.count || 0;
    }
  } catch (error: any) {
    console.error(`Failed to load ${type} data:`, error.message);
  } finally {
    tables.value[type].loading = false;
  }
};

onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => { screenWidth.value = document.body.clientWidth; };
  fetchTableData('nce', '/api/json/pathway_nce_cogs.json');
  fetchTableData('ncde', '/api/json/pathway_nc_deogs.json');
  fetchTableData('nodnb', '/api/json/pathway_no_dnbgs.json');
});

</script>

<template>
  <div class="wrapper-background"></div>

  <div class="wrapper-sketch">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-row>
          <el-col class="wrapper-sketch-text" :span="screenWidth > 1200 ? 16 : 24">
            <div class="wrapper-sketch-text-title">Pathway</div>
            <div class="wrapper-sketch-text-subtitle">Multi-level function enrichment</div>
            <h1 class="wrapper-sketch-text-content">
              Lineage Specificity, Differential Expression, and Dynamic Critical Signals of Candidate
              Orthogroups.
            </h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>

  <el-row style="{ 'background-color': (!isDark ? '#f8f9fa' : '#131124') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="main-content">

        <el-card class="content-card">
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'wave-square']" class="icon-m" />
              <span>Neural Clade Evolution–associated Candidate OrthoGroups (NCE-COGs)</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgNCECOGs" :preview-src-list="[ImgNCECOGs]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Cross-species comparative genomics analysis of orthogroups lineage specificity.
                </strong>
              </p>
              <ul class="card-image-description-list">
                <li>(A) Expansion and contraction events in 9 basal metazoans orthogroups.</li>
                <li>(B) Schematic diagram of candidate target orthogroups screening for enrichment analysis. The
                  intersection of orthogroups showing significant expansion at node 12 and significant contraction at node
                  15 yielded 109 NCE-COGs.</li>
                <li>(C) Schematic diagram of the background orthogroups set for nodes, defining the background orthogroups
                  used for GO enrichment analysis.</li>
                <li>(D) GO enrichment results of 109 NCE-COGs.</li>
              </ul>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div class="table-section">
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'wave-square']" class="icon-m" />
              <span>Biological pathways of 109 NCE-COGs</span>
            </h1>
            <el-table :data="pagedNceData" v-loading="tables.nce.loading" stripe border style="width: 100%">
              <el-table-column prop="GO_ID" label="GO ID" width="130" fixed />
              <el-table-column prop="Description" label="Description" width="400" resizable show-overflow-tooltip>
                <template #default="scope">
                  <code class="gene-code">{{ scope.row.Description }}</code>
                </template>
              </el-table-column>
              <el-table-column prop="pvalue" label="P-value" width="120" align="center" sortable resizable>
                <template #default="scope">
                  <span class="pvalue-text">{{ scope.row.pvalue }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="p.adjust" label="P.adjust" width="120" align="center" sortable resizable>
                <template #default="scope">
                  <span class="pvalue-text">{{ scope.row['p.adjust']
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="geneID" label="Gene_IDs or Protein_IDs corresponding to Orthogroups" min-width="200"
                resizable show-overflow-tooltip>
                <template #default="scope">
                  <span>
                    {{ scope.row.geneID ? scope.row.geneID.split('/').join(', ') : '-' }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="Count" label="Count" width="120" align="center" sortable resizable />
            </el-table>

            <div class="pagination-wrapper">
              <el-pagination v-model:current-page="tables.nce.currentPage" :page-size="pageSize" :total="tables.nce.count"
                layout="prev, pager, next, jumper, ->, total" background small />
            </div>
          </div>
        </el-card>

        <el-card class="content-card">
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'wave-square']" class="icon-m" />
              <span>Neural Cell–associated Differential Expression OrthoGroups (NC-DEOGs)</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgNCDEOGs" :preview-src-list="[ImgNCDEOGs]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Cross-species comparative single-cell transcriptome differential expression analysis.
                </strong>
              </p>
              <ul class="card-image-description-list">
                <li>(A) Schematic diagram of cross-species mapping process for Dare NC-DEOGs.</li>
                <li>(B) Statistical analysis of the mapping ratio of Dare NC-DEOGs in neural-related cells of various
                  species.</li>
                <li>(C) Statistical analysis of the mapping ratio of Dare NC-DEOGs in neural-related cells of three
                  metazoan phyla.</li>
                <li>(D) GO enrichment results of genes matched to Dare 154 NC-DEOGs in moon jellyfish.</li>
                <li>(E) Comparison of cross-species GO terms enrichment signals in Dare NC-DEOGs.</li>
              </ul>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div class="table-section">
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'wave-square']" class="icon-m" />
              <span>Biological pathways of 154 NC-DEOGs</span>
            </h1>
            <el-table :data="pagedNcdeData" v-loading="tables.ncde.loading" stripe border style="width: 100%">
              <el-table-column prop="GO_ID" label="GO ID" width="130" fixed />
              <el-table-column prop="Description" label="Description" width="400" resizable show-overflow-tooltip>
                <template #default="scope">
                  <code class="gene-code">{{ scope.row.Description }}</code>
                </template>
              </el-table-column>
              <el-table-column prop="pvalue" label="P-value" width="120" align="center" sortable resizable>
                <template #default="scope">
                  <span class="pvalue-text">{{ scope.row.pvalue }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="p.adjust" label="P.adjust" width="120" align="center" sortable resizable>
                <template #default="scope">
                  <span class="pvalue-text">{{ scope.row['p.adjust']
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="geneID" label="Gene_IDs or Protein_IDs corresponding to Orthogroups" min-width="200"
                resizable show-overflow-tooltip>
                <template #default="scope">
                  <span>
                    {{ scope.row.geneID ? scope.row.geneID.split('/').join(', ') : '-' }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="Count" label="Count" width="120" align="center" sortable resizable />
            </el-table>

            <div class="pagination-wrapper">
              <el-pagination v-model:current-page="tables.ncde.currentPage" :page-size="pageSize"
                :total="tables.ncde.count" layout="prev, pager, next, jumper, ->, total" background small />
            </div>
          </div>
        </el-card>

        <el-card class="content-card">
          <div>
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'wave-square']" class="icon-m" />
              <span>Neural Origin–associated Dynamic Network Biomarker orthoGroups (NO-DNBGs)</span>
            </h1>
            <div class="card-image-container">
              <el-image :src="ImgNODNBGs" :preview-src-list="[ImgNODNBGs]" :initial-index="0" fit="contain"
                class="card-image-display" preview-teleported />
            </div>
            <div class="card-image-description">
              <p>
                <strong>
                  Cross-species dynamic network biomarker critical prediction analysis.
                </strong>
              </p>
              <ul class="card-image-description-list">
                <li>(A-D) Functional diagram of different biomarkers in neural origin and evolution analysis.</li>
                <li>(E) GO enrichment results of 165 NO-DNBGs.</li>
              </ul>
            </div>
          </div>
          <div>
            <el-divider></el-divider>
          </div>
          <div class="table-section">
            <h1 class="card-header">
              <font-awesome-icon :icon="['fas', 'wave-square']" class="icon-m" />
              <span>Biological pathways of 165 NO-DNBGs</span>
            </h1>
            <el-table :data="pagedNodnbData" v-loading="tables.nodnb.loading" stripe border style="width: 100%">
              <el-table-column prop="GO_ID" label="GO ID" width="130" fixed />
              <el-table-column prop="Description" label="Description" width="400" resizable show-overflow-tooltip>
                <template #default="scope">
                  <code class="gene-code">{{ scope.row.Description }}</code>
                </template>
              </el-table-column>
              <el-table-column prop="pvalue" label="P-value" width="120" align="center" sortable resizable>
                <template #default="scope">
                  <span class="pvalue-text">{{ scope.row.pvalue }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="p.adjust" label="P.adjust" width="120" align="center" sortable resizable>
                <template #default="scope">
                  <span class="pvalue-text">{{ scope.row['p.adjust']
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="geneID" label="Gene_IDs or Protein_IDs corresponding to Orthogroups" min-width="200"
                resizable show-overflow-tooltip>
                <template #default="scope">
                  <span>
                    {{ scope.row.geneID ? scope.row.geneID.split('/').join(', ') : '-' }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="Count" label="Count" width="120" align="center" sortable resizable />
            </el-table>

            <div class="pagination-wrapper">
              <el-pagination v-model:current-page="tables.nodnb.currentPage" :page-size="pageSize"
                :total="tables.nodnb.count" layout="prev, pager, next, jumper, ->, total" background small />
            </div>
          </div>
        </el-card>

        <el-card hidden class="content-card">
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
  width: 70%;
  border-radius: 8px;
  overflow: hidden;
}

.iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.table-section {
  padding: 10px 0;
}

/* 分页器外层容器 */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  background-color: v-bind('isDark ? "transparent" : "#fcfcfc"');
  border-radius: 0 0 8px 8px;
}

/* 科学计数法字体 */
.pvalue-text {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
}

/* 基因 ID 代码样式 */
.gene-code {
  background-color: v-bind('isDark ? "#2a2a3a" : "#f0f9eb"');
  color: #67C23A;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

/* 表格 Header 定制 */
:deep(.el-table th.el-table__cell) {
  background-color: v-bind('isDark ? "#1d1b2e" : "#f5f7fa"') !important;
  color: #409EFF;
  font-weight: bold;
}

/* 分页器暗色模式适配 */
:deep(.el-pagination.is-background .el-pager li:not(.is-active)) {
  background-color: v-bind('isDark ? "#2a2a3a" : "#f4f4f5"');
  color: v-bind('isDark ? "#ccc" : "#606266"');
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