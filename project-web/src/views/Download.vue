<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const screenWidth = ref(1200)
const updateScreenWidth = () => {
  screenWidth.value = document.body.clientWidth
}
onMounted(() => {
  updateScreenWidth()
  window.addEventListener('resize', updateScreenWidth)
})
onUnmounted(() => window.removeEventListener('resize', updateScreenWidth))

interface DatasetResource {
  name: string
  // Processed files retain their release-directory prefix.
  file: string
  category: string
  url: string
}

// Source: Manuscript/datafordownload.md (2026-09-15).
// Processed paths map to project-api/public/download via the existing /api proxy.
const rawDatasetTable: DatasetResource[] = [
  {
    name: 'Aurelia coerulea CycloneSEQ1 — CNR1458758',
    file: 'TB200022CF-202401031955000_read.fq.gz',
    category: 'Raw CycloneSEQ',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440932/CNX1281846/CNR1458758/TB200022CF-202401031955000_read.fq.gz'
  },
  {
    name: 'Aurelia coerulea CycloneSEQ2 — CNR1458759',
    file: 'TB200024E6-202401032003570_read.fq.gz',
    category: 'Raw CycloneSEQ',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440933/CNX1281847/CNR1458759/TB200024E6-202401032003570_read.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 01, oligo, R1 — CNR1459334',
    file: 'au.coerulea.202312batch.01.oligofastq1.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440996/CNX1281981/CNR1459334/au.coerulea.202312batch.01.oligofastq1.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 01, oligo, R2 — CNR1459334',
    file: 'au.coerulea.202312batch.01.oligofastq2.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440996/CNX1281981/CNR1459334/au.coerulea.202312batch.01.oligofastq2.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 01, cDNA, R1 — CNR1459335',
    file: 'au.coerulea.202312batch.01.cDNAfastq1.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440996/CNX1281982/CNR1459335/au.coerulea.202312batch.01.cDNAfastq1.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 01, cDNA, R2 — CNR1459335',
    file: 'au.coerulea.202312batch.01.cDNAfastq2.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440996/CNX1281982/CNR1459335/au.coerulea.202312batch.01.cDNAfastq2.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 02, oligo, R1 — CNR1459336',
    file: 'au.coerulea.202312batch.02.oligofastq1.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440997/CNX1281983/CNR1459336/au.coerulea.202312batch.02.oligofastq1.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 02, oligo, R2 — CNR1459336',
    file: 'au.coerulea.202312batch.02.oligofastq2.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440997/CNX1281983/CNR1459336/au.coerulea.202312batch.02.oligofastq2.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 02, cDNA, R1 — CNR1459337',
    file: 'au.coerulea.202312batch.02.cDNAfastq1.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440997/CNX1281984/CNR1459337/au.coerulea.202312batch.02.cDNAfastq1.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 02, cDNA, R2 — CNR1459337',
    file: 'au.coerulea.202312batch.02.cDNAfastq2.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440997/CNX1281984/CNR1459337/au.coerulea.202312batch.02.cDNAfastq2.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 03, oligo, R1 — CNR1459338',
    file: 'au.coerulea.202312batch.03.oligofastq1.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440998/CNX1281985/CNR1459338/au.coerulea.202312batch.03.oligofastq1.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 03, oligo, R2 — CNR1459338',
    file: 'au.coerulea.202312batch.03.oligofastq2.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440998/CNX1281985/CNR1459338/au.coerulea.202312batch.03.oligofastq2.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 03, cDNA, R1 — CNR1459339',
    file: 'au.coerulea.202312batch.03.cDNAfastq1.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440998/CNX1281986/CNR1459339/au.coerulea.202312batch.03.cDNAfastq1.fq.gz'
  },
  {
    name: 'Aurelia coerulea snRNA-seq — batch 03, cDNA, R2 — CNR1459339',
    file: 'au.coerulea.202312batch.03.cDNAfastq2.fq.gz',
    category: 'Raw snRNA-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1440998/CNX1281986/CNR1459339/au.coerulea.202312batch.03.cDNAfastq2.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 1, R1 — CNR1450160',
    file: 'FP270010139_L01_1_1.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273711/CNR1450160/FP270010139_L01_1_1.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 1, R2 — CNR1450160',
    file: 'FP270010139_L01_1_2.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273711/CNR1450160/FP270010139_L01_1_2.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 2, R1 — CNR1450161',
    file: 'FP270010139_L01_2_1.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273712/CNR1450161/FP270010139_L01_2_1.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 2, R2 — CNR1450161',
    file: 'FP270010139_L01_2_2.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273712/CNR1450161/FP270010139_L01_2_2.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 3, R1 — CNR1450162',
    file: 'FP270010139_L01_3_1.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273713/CNR1450162/FP270010139_L01_3_1.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 3, R2 — CNR1450162',
    file: 'FP270010139_L01_3_2.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273713/CNR1450162/FP270010139_L01_3_2.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 4, R1 — CNR1450163',
    file: 'FP270010139_L01_4_1.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273714/CNR1450163/FP270010139_L01_4_1.fq.gz'
  },
  {
    name: 'Aurelia coerulea Stereo-seq — D06050D2, file group 4, R2 — CNR1450163',
    file: 'FP270010139_L01_4_2.fq.gz',
    category: 'Raw Stereo-seq',
    url: 'https://ftp.cngb.org/pub/CNSA/data7/CNP0008642/CNS1429546/CNX1273714/CNR1450163/FP270010139_L01_4_2.fq.gz'
  }
]

// File paths follow the latest server download directory supplied by the project owner.
const amoaDatasetTable: DatasetResource[] = [
  {
    name: 'Aurelia coerulea annotated snRNA-seq atlas (gene-level)',
    file: 'AucoData/Auco.sn.normalized.annotated.gzip.h5ad',
    category: 'Aurelia atlases',
    url: '/api/download/AucoData/Auco.sn.normalized.annotated.gzip.h5ad'
  },
  {
    name: 'Aurelia coerulea annotated snRNA-seq atlas (OG-level)',
    file: 'AucoData/Auco.sn.normalized.annotated.OGs.gzip.h5ad',
    category: 'Aurelia atlases',
    url: '/api/download/AucoData/Auco.sn.normalized.annotated.OGs.gzip.h5ad'
  },
  {
    name: 'Aurelia coerulea spatial transcriptome (bin50, gene-level)',
    file: 'AucoData/Auco.st.bin50.gzip.h5ad',
    category: 'Aurelia atlases',
    url: '/api/download/AucoData/Auco.st.bin50.gzip.h5ad'
  },
  {
    name: 'Aurelia coerulea spatial transcriptome (bin50, normalized OG-level)',
    file: 'AucoData/Auco.st.bin50.normalized.OGs.gzip.h5ad',
    category: 'Aurelia atlases',
    url: '/api/download/AucoData/Auco.st.bin50.normalized.OGs.gzip.h5ad'
  },
  {
    name: 'Aurelia coerulea QDv2 raw annotation (GFF)',
    file: 'AucoData/au.coerulea.QDv2.raw.gff',
    category: 'Aurelia genome annotations',
    url: '/api/download/AucoData/au.coerulea.QDv2.raw.gff'
  },
  {
    name: 'Aurelia coerulea QDv2 annotation optimized for dnbc4tools (GFF3)',
    file: 'AucoData/au.coerulea.QDv2.optimized_for_dnbc4tools.gff3',
    category: 'Aurelia genome annotations',
    url: '/api/download/AucoData/au.coerulea.QDv2.optimized_for_dnbc4tools.gff3'
  },
  {
    name: 'Aurelia coerulea QDv2 annotation optimized for SAW-ST-V8 (GFF)',
    file: 'AucoData/au.coerulea.QDv2.optimized_for_SAW-ST-V8.gff',
    category: 'Aurelia genome annotations',
    url: '/api/download/AucoData/au.coerulea.QDv2.optimized_for_SAW-ST-V8.gff'
  },
  {
    name: 'Integrated nine-taxon cell atlas (TAR.GZ archive)',
    file: 'BasalMetazoaDataset/sc_BasalMetazoaDataset.tar.gz',
    category: '9 species OG-level integrated atlas archive',
    url: '/api/download/BasalMetazoaDataset/sc_BasalMetazoaDataset.tar.gz'
  },
  {
    name: 'Auco OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Auco.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/Auco.OG.normalized.gzip.h5ad'
  },
  {
    name: 'ClH23 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/ClH23.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/ClH23.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Clhe OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Clhe.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/Clhe.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Dare OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Dare.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/Dare.OG.normalized.gzip.h5ad'
  },
  {
    name: 'HoH13 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/HoH13.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/HoH13.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Neve OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Neve.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/Neve.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Spla OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Spla.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/Spla.OG.normalized.gzip.h5ad'
  },
  {
    name: 'TrH1 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/TrH1.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/TrH1.OG.normalized.gzip.h5ad'
  },
  {
    name: 'TrH2 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/TrH2.OG.normalized.gzip.h5ad',
    category: '9 species OG-level AnnData',
    url: '/api/download/scOrthoGeneH5ad/TrH2.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Auco OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Auco.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/Auco.OG.normalized.rds'
  },
  {
    name: 'ClH23 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/ClH23.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/ClH23.OG.normalized.rds'
  },
  {
    name: 'Clhe OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Clhe.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/Clhe.OG.normalized.rds'
  },
  {
    name: 'Dare OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Dare.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/Dare.OG.normalized.rds'
  },
  {
    name: 'HoH13 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/HoH13.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/HoH13.OG.normalized.rds'
  },
  {
    name: 'Neve OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Neve.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/Neve.OG.normalized.rds'
  },
  {
    name: 'Spla OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Spla.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/Spla.OG.normalized.rds'
  },
  {
    name: 'TrH1 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/TrH1.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/TrH1.OG.normalized.rds'
  },
  {
    name: 'TrH2 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/TrH2.OG.normalized.rds',
    category: '9 species OG-level RDS',
    url: '/api/download/scOrthoGeneRDS/TrH2.OG.normalized.rds'
  },
  {
    name: 'Auco normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Auco.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/Auco.normalized.gzip.h5ad'
  },
  {
    name: 'ClH23 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/ClH23.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/ClH23.normalized.gzip.h5ad'
  },
  {
    name: 'Clhe normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Clhe.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/Clhe.normalized.gzip.h5ad'
  },
  {
    name: 'Dare normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Dare.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/Dare.normalized.gzip.h5ad'
  },
  {
    name: 'HoH13 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/HoH13.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/HoH13.normalized.gzip.h5ad'
  },
  {
    name: 'Neve normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Neve.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/Neve.normalized.gzip.h5ad'
  },
  {
    name: 'Spla normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Spla.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/Spla.normalized.gzip.h5ad'
  },
  {
    name: 'TrH1 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/TrH1.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/TrH1.normalized.gzip.h5ad'
  },
  {
    name: 'TrH2 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/TrH2.normalized.gzip.h5ad',
    category: '9 species gene-level AnnData',
    url: '/api/download/SingleCellDataH5ad/TrH2.normalized.gzip.h5ad'
  },
  {
    name: 'Auco protein sequences (FASTA)',
    file: 'ProteinSequence/Auco.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/Auco.protein.fasta'
  },
  {
    name: 'ClH23 protein sequences (FASTA)',
    file: 'ProteinSequence/ClH23.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/ClH23.protein.fasta'
  },
  {
    name: 'Clhe protein sequences (FASTA)',
    file: 'ProteinSequence/Clhe.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/Clhe.protein.fasta'
  },
  {
    name: 'Dare protein sequences (FASTA)',
    file: 'ProteinSequence/Dare.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/Dare.protein.fasta'
  },
  {
    name: 'HoH13 protein sequences (FASTA)',
    file: 'ProteinSequence/HoH13.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/HoH13.protein.fasta'
  },
  {
    name: 'Neve protein sequences (FASTA)',
    file: 'ProteinSequence/Neve.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/Neve.protein.fasta'
  },
  {
    name: 'Spla protein sequences (FASTA)',
    file: 'ProteinSequence/Spla.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/Spla.protein.fasta'
  },
  {
    name: 'TrH1 protein sequences (FASTA)',
    file: 'ProteinSequence/TrH1.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/TrH1.protein.fasta'
  },
  {
    name: 'TrH2 protein sequences (FASTA)',
    file: 'ProteinSequence/TrH2.protein.fasta',
    category: '9 species protein sequences',
    url: '/api/download/ProteinSequence/TrH2.protein.fasta'
  },
  {
    name: 'Auco protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/Auco.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/Auco.protein_to_orthogroup.csv'
  },
  {
    name: 'ClH23 protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/ClH23.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/ClH23.protein_to_orthogroup.csv'
  },
  {
    name: 'Clhe protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/Clhe.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/Clhe.protein_to_orthogroup.csv'
  },
  {
    name: 'Dare protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/Dare.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/Dare.protein_to_orthogroup.csv'
  },
  {
    name: 'HoH13 protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/HoH13.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/HoH13.protein_to_orthogroup.csv'
  },
  {
    name: 'Neve protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/Neve.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/Neve.protein_to_orthogroup.csv'
  },
  {
    name: 'Spla protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/Spla.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/Spla.protein_to_orthogroup.csv'
  },
  {
    name: 'TrH1 protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/TrH1.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/TrH1.protein_to_orthogroup.csv'
  },
  {
    name: 'TrH2 protein-to-orthogroup mapping (CSV)',
    file: 'SpeciesOrthogroup/TrH2.protein_to_orthogroup.csv',
    category: '9 species protein-to-orthogroup mappings',
    url: '/api/download/SpeciesOrthogroup/TrH2.protein_to_orthogroup.csv'
  },
  {
    name: 'Auco eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/Auco.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/Auco.emapper.annotations.tsv'
  },
  {
    name: 'ClH23 eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/ClH23.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/ClH23.emapper.annotations.tsv'
  },
  {
    name: 'Clhe eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/Clhe.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/Clhe.emapper.annotations.tsv'
  },
  {
    name: 'Dare eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/Dare.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/Dare.emapper.annotations.tsv'
  },
  {
    name: 'HoH13 eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/HoH13.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/HoH13.emapper.annotations.tsv'
  },
  {
    name: 'Neve eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/Neve.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/Neve.emapper.annotations.tsv'
  },
  {
    name: 'Spla eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/Spla.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/Spla.emapper.annotations.tsv'
  },
  {
    name: 'TrH1 eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/TrH1.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/TrH1.emapper.annotations.tsv'
  },
  {
    name: 'TrH2 eggNOG-mapper functional annotations (TSV)',
    file: 'EmapperAnnotations/TrH2.emapper.annotations.tsv',
    category: '9 species eggNOG functional annotations',
    url: '/api/download/EmapperAnnotations/TrH2.emapper.annotations.tsv'
  }
]

// Reference publications and data accessions from Manuscript/datafordownload.md.
const publicDataTable = [
  {
    species: 'Dare',
    name: 'Danio rerio',
    genomeUrl: 'https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000002035.6/',
    cellUrl: 'https://www.science.org/doi/10.1126/science.aar4362',
    cellLabel: 'Single-cell atlas publication'
  },
  {
    species: 'Neve',
    name: 'Nematostella vectensis',
    genomeUrl: 'https://www.nature.com/articles/s41467-023-44080-7',
    cellUrl: 'https://doi.org/10.1186/s12983-024-00529-z',
    cellLabel: 'Single-cell atlas publication'
  },
  {
    species: 'Auco',
    name: 'Aurelia coerulea',
    genomeUrl: 'https://www.nature.com/articles/s41597-026-07102-9',
    cellUrl: 'https://db.cngb.org/data_resources/project/CNP0008642/',
    cellLabel: 'This study · CNP0008642'
  },
  {
    species: 'Clhe',
    name: 'Clytia hemisphaerica',
    genomeUrl: 'https://www.nature.com/articles/s41559-019-0833-2',
    cellUrl: 'https://www.science.org/doi/10.1126/sciadv.abh1683',
    cellLabel: 'Single-cell atlas publication'
  },
  {
    species: 'TrH1',
    name: 'Trichoplax adhaerens H1',
    genomeUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellLabel: 'Single-cell atlas publication'
  },
  {
    species: 'TrH2',
    name: 'Trichoplax sp. H2',
    genomeUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellLabel: 'Single-cell atlas publication'
  },
  {
    species: 'HoH13',
    name: 'Hoilungia hongkongensis H13',
    genomeUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellLabel: 'Single-cell atlas publication'
  },
  {
    species: 'ClH23',
    name: 'Cladtertia collaboinventa H23',
    genomeUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellUrl: 'https://www.cell.com/cell/abstract/S0092-8674(23)00917-0',
    cellLabel: 'Single-cell atlas publication'
  },
  {
    species: 'Spla',
    name: 'Spongilla lacustris',
    genomeUrl: 'https://www.science.org/doi/10.1126/science.abj2949',
    cellUrl: 'https://www.science.org/doi/10.1126/science.abj2949',
    cellLabel: 'Single-cell atlas publication'
  }
]

// Keep strain identifiers and the taxonomic qualifier "sp." in roman type.
const scientificNames = publicDataTable.map((row) => row.name.replace(/ sp\..*$| H\d+$/g, ''))
const scientificNameParts = (text: string) => {
  const name = scientificNames.find((name) => text === name || text.startsWith(`${name} `))
  return name ? [name, text.slice(name.length)] : ['', text]
}

// Official databases and repositories for the project workflows.
const externalLinks = [
  {
    name: 'CNGBdb / CNSA',
    category: 'Database',
    resource: 'Raw sequencing archive and project accession',
    url: 'https://db.cngb.org/data_resources/project/CNP0008642/'
  },
  {
    name: 'NCBI Taxonomy',
    category: 'Database',
    resource: 'Taxonomic names and identifiers',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy'
  },
  {
    name: 'UniProt',
    category: 'Database',
    resource: 'Protein sequences and functional annotations',
    url: 'https://www.uniprot.org/'
  },
  {
    name: 'Gene Ontology',
    category: 'Database',
    resource: 'Gene function ontology and annotations',
    url: 'https://geneontology.org/'
  },
  {
    name: 'Stereo-seq Cloud',
    category: 'Database',
    resource: 'Spatial transcriptomics resources',
    url: 'https://db.cngb.org/stomics/'
  },
  {
    name: 'OrthoFinder',
    category: 'Software',
    resource: 'Orthogroup and phylogenetic orthology inference',
    url: 'https://github.com/OrthoFinder/OrthoFinder'
  },
  {
    name: 'CAFE5',
    category: 'Software',
    resource: 'Gene family expansion and contraction analysis',
    url: 'https://github.com/hahnlab/CAFE5'
  },
  {
    name: 'eggNOG-mapper',
    category: 'Software',
    resource: 'Orthology-based functional annotation',
    url: 'https://github.com/eggnogdb/eggnog-mapper'
  },
  {
    name: 'DIAMOND',
    category: 'Software',
    resource: 'Protein sequence alignment',
    url: 'https://github.com/bbuchfink/diamond'
  },
  {
    name: 'IsoQuant',
    category: 'Software',
    resource: 'Long-read transcript reconstruction and quantification',
    url: 'https://github.com/ablab/IsoQuant'
  },
  {
    name: 'GffCompare',
    category: 'Software',
    resource: 'Transcript annotation comparison',
    url: 'https://github.com/gpertea/gffcompare'
  },
  {
    name: 'CD-HIT',
    category: 'Software',
    resource: 'Sequence clustering and redundancy reduction',
    url: 'https://github.com/weizhongli/cdhit'
  },
  {
    name: 'TransDecoder',
    category: 'Software',
    resource: 'Candidate coding sequence prediction',
    url: 'https://github.com/TransDecoder/TransDecoder'
  },
  {
    name: 'dnbc4tools',
    category: 'Software',
    resource: 'DNBelab single-cell sequencing processing',
    url: 'https://github.com/MGI-tech-bioinformatics/DNBelab_C_Series_HT_scRNA-analysis-software'
  },
  {
    name: 'SAW',
    category: 'Software',
    resource: 'Stereo-seq sequencing processing',
    url: 'https://github.com/STOmics/SAW'
  },
  {
    name: 'Seurat',
    category: 'Software',
    resource: 'Single-cell analysis in R',
    url: 'https://github.com/satijalab/seurat'
  },
  {
    name: 'Scanpy',
    category: 'Software',
    resource: 'Single-cell analysis in Python',
    url: 'https://github.com/scverse/scanpy'
  },
  {
    name: 'SAMap',
    category: 'Software',
    resource: 'Cross-species single-cell atlas mapping',
    url: 'https://github.com/atarashansky/SAMap'
  },
  {
    name: 'TACCO',
    category: 'Software',
    resource: 'Annotation transfer and spatial cell-type mapping',
    url: 'https://github.com/simonwm/tacco'
  },
  {
    name: 'clusterProfiler',
    category: 'Software',
    resource: 'Functional enrichment analysis',
    url: 'https://github.com/YuLab-SMU/clusterProfiler'
  },
  {
    name: 'Arboreto / GRNBoost2',
    category: 'Software',
    resource: 'Gene regulatory network inference',
    url: 'https://github.com/aertslab/arboreto'
  },
  {
    name: 'MDIC3',
    category: 'Software',
    resource: 'Cell-cell communication inference',
    url: 'https://github.com/LYxiaotai/MDIC3'
  },
  {
    name: 'ESM-2',
    category: 'Software',
    resource: 'Protein language model embeddings',
    url: 'https://github.com/facebookresearch/esm'
  },
  {
    name: 'TranscriptFormer',
    category: 'Software',
    resource: 'Cross-species transcriptomic modeling',
    url: 'https://github.com/czi-ai/transcriptformer'
  },
  {
    name: 'JBrowse 2',
    category: 'Software',
    resource: 'Genome browser',
    url: 'https://github.com/GMOD/jbrowse-components'
  }
]

const selectedExternalCategory = ref('Database')
const externalResourceCategories = [
  { label: 'Databases', value: 'Database' },
  { label: 'Software tools', value: 'Software' }
]
const filteredExternalLinks = computed(() =>
  externalLinks.filter((row) => row.category === selectedExternalCategory.value)
)

const selectedRawCategory = ref('Raw CycloneSEQ')
const rawDatasetCategories = [
  { label: 'Long-read sequencing', value: 'Raw CycloneSEQ' },
  { label: 'Single-cell / single-nucleus RNA-seq', value: 'Raw snRNA-seq' },
  { label: 'Spatial transcriptomics', value: 'Raw Stereo-seq' }
]
const filteredRawDatasets = computed(() =>
  rawDatasetTable.filter((row) => row.category === selectedRawCategory.value)
)

const datasetCategories = [
  'Aurelia atlases',
  'Aurelia genome annotations',
  '9 species gene-level AnnData',
  '9 species protein sequences',
  '9 species eggNOG functional annotations',
  '9 species protein-to-orthogroup mappings',
  '9 species OG-level AnnData',
  '9 species OG-level RDS',
  '9 species OG-level integrated atlas archive'
]
const selectedCategory = ref(datasetCategories[0])
const filteredDatasets = computed(() =>
  amoaDatasetTable.filter((row) => row.category === selectedCategory.value)
)
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
              Access Comprehensive Datasets and Bioinformatics Resources for this study
            </h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>

  <el-row :style="{ 'background-color': !isDark ? '#f5f7fa' : '#131124', 'min-height': '600px' }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="download-section">
        <nav class="section-nav" aria-label="Download sections">
          <a href="#raw-data">Raw Data</a>
          <a href="#public-data">Public Data</a>
          <!-- <a href="#multi-omics">Multi-Omics Datasets</a> -->
          <a href="#external-resources">External Resources</a>
        </nav>
        <el-card id="raw-data" class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'download']" class="icon-margin" />
              <span>Raw Data</span>
            </div>
          </template>
          <p class="resource-note">
            {{ rawDatasetTable.length }} gzip-compressed FASTQ files for <i>Aurelia coerulea</i>,
            covering long-read sequencing (CycloneSEQ), single-nucleus RNA-seq (DNBeLab C4
            snRNA-seq) and spatial transcriptomics (Stereo-seq). Select a data type to download
            files from
            <a
              href="https://db.cngb.org/data_resources/project/CNP0008642/"
              target="_blank"
              rel="noopener noreferrer"
              class="resource-url"
              >CNP0008642 (CNGBdb)</a
            >.
          </p>
          <div class="dataset-filter">
            <label id="raw-category-label" for="raw-category">Raw data category</label>
            <el-select
              id="raw-category"
              v-model="selectedRawCategory"
              aria-labelledby="raw-category-label"
            >
              <el-option
                v-for="category in rawDatasetCategories"
                :key="category.value"
                :label="category.label"
                :value="category.value"
              />
            </el-select>
          </div>
          <el-table class="resource-table" :data="filteredRawDatasets" row-key="file" border stripe>
            <el-table-column prop="name" label="Resource Name" min-width="360">
              <template #default="scope">
                <i>{{ scientificNameParts(scope.row.name)[0] }}</i
                >{{ scientificNameParts(scope.row.name)[1] }}
              </template>
            </el-table-column>
            <el-table-column prop="category" label="Data Type" width="150" />
            <el-table-column prop="file" label="File Name" min-width="360"
              ><template #default="scope"
                ><span class="resource-path">{{ scope.row.file }}</span></template
              ></el-table-column
            >
            <el-table-column label="URL" width="140" align="center" fixed="right">
              <template #default="scope"
                ><a
                  :href="scope.row.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="download-link"
                  :aria-label="`Download ${scope.row.file} from CNGBdb`"
                  >Download</a
                ></template
              >
            </el-table-column>
          </el-table>
        </el-card>
        <el-card id="public-data" class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'link']" class="icon-margin" />
              <span>Public Data</span>
            </div>
          </template>
          <p class="resource-note">
            Genome and reference-sequence resources, plus single-cell data sources, for nine study
            taxa. Links lead to source publications or database records; the
            <i>Aurelia coerulea</i> snRNA-seq entry links to this study's data deposit.
          </p>
          <el-table class="resource-table" :data="publicDataTable" row-key="species" border stripe>
            <el-table-column prop="species" label="Species Code" width="110" />
            <el-table-column prop="name" label="Species Name" min-width="300">
              <template #default="scope">
                <i>{{ scientificNameParts(scope.row.name)[0] }}</i
                >{{ scientificNameParts(scope.row.name)[1] }}
              </template>
            </el-table-column>
            <el-table-column label="Genome / Reference Sequences" min-width="280"
              ><template #default="scope"
                ><a
                  :href="scope.row.genomeUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="resource-url"
                  :aria-label="`${scope.row.name} genome or reference sequences`"
                  >Genome / reference resource</a
                ></template
              ></el-table-column
            >
            <el-table-column label="Single-Cell Data" min-width="250"
              ><template #default="scope"
                ><a
                  :href="scope.row.cellUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="resource-url"
                  :aria-label="`${scope.row.name}: ${scope.row.cellLabel}`"
                  >{{ scope.row.cellLabel }}</a
                ></template
              ></el-table-column
            >
          </el-table>
        </el-card>
        <el-card hidden id="multi-omics" class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'download']" class="icon-margin" />
              <span>Multi-Omics Datasets</span>
            </div>
          </template>

          <p class="resource-note">
            {{ amoaDatasetTable.length }} project files: <i>Aurelia</i> single-nucleus and spatial
            atlases, genome annotations (GFF/GFF3), and nine-taxon expression datasets (H5AD/RDS),
            protein sequences (FASTA), functional annotations (TSV), orthogroup mappings (CSV) and
            an integrated atlas (TAR.GZ). OG denotes orthogroup. Select a category to view and
            download individual files.
          </p>
          <div class="dataset-filter">
            <label id="dataset-category-label" for="dataset-category">Dataset category</label>
            <el-select
              id="dataset-category"
              class="multi-omics-select"
              v-model="selectedCategory"
              aria-labelledby="dataset-category-label"
            >
              <el-option
                v-for="category in datasetCategories"
                :key="category"
                :label="category"
                :value="category"
              />
            </el-select>
          </div>
          <el-table
            class="resource-table"
            :data="filteredDatasets"
            row-key="file"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="name" label="Resource Name" min-width="340">
              <template #default="scope">
                <i>{{ scientificNameParts(scope.row.name)[0] }}</i
                >{{ scientificNameParts(scope.row.name)[1] }}
              </template>
            </el-table-column>
            <el-table-column prop="category" label="Category" min-width="240" />
            <el-table-column prop="file" label="File Name / Path" min-width="420">
              <template #default="scope">
                <span class="resource-path">{{ scope.row.file }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Download" width="140" align="center" fixed="right">
              <template #default="scope">
                <a
                  :download="scope.row.file.split('/').pop()"
                  :href="scope.row.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="download-link"
                  :aria-label="`Download ${scope.row.file}`"
                >
                  <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
                  Download
                </a>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <el-card id="external-resources" class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'link']" class="icon-margin" />
              <span>External Resources</span>
            </div>
          </template>
          <p class="resource-note">
            Databases and analysis tools used in this project, with a brief description of each
            resource. Select Databases or Software tools to visit official resource pages and GitHub
            repositories.
          </p>
          <div class="dataset-filter">
            <label id="external-category-label" for="external-category">Resource category</label>
            <el-select
              id="external-category"
              v-model="selectedExternalCategory"
              aria-labelledby="external-category-label"
            >
              <el-option
                v-for="category in externalResourceCategories"
                :key="category.value"
                :label="category.label"
                :value="category.value"
              />
            </el-select>
          </div>
          <el-table
            class="resource-table"
            :data="filteredExternalLinks"
            row-key="name"
            border
            stripe
          >
            <el-table-column prop="category" label="Type" width="110" />
            <el-table-column prop="name" label="Resource Name" min-width="200" />
            <el-table-column prop="resource" label="Purpose" min-width="320" />
            <el-table-column prop="url" label="URL" min-width="420">
              <template #default="scope">
                <a
                  :href="scope.row.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="resource-url"
                  >{{ scope.row.url }}</a
                >
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
/* Flexible text columns expand on wide screens and scroll within the table on narrow screens. */
.resource-table {
  width: 100%;
}
.resource-table :deep(.cell) {
  padding: 0 12px;
  line-height: 1.6;
  word-break: normal;
  overflow-wrap: anywhere;
}
.resource-table :deep(.el-table__cell) {
  padding-top: 12px;
  padding-bottom: 12px;
}

/* Download controls remain usable for long file names and narrow screens. */
.resource-note {
  margin: 0 0 20px;
  color: var(--el-text-color-regular);
  line-height: 1.6;
}
.dataset-filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}
.dataset-filter .el-select {
  width: 260px;
  max-width: 100%;
}
.dataset-filter .multi-omics-select {
  width: 380px;
}
.resource-path,
.resource-url {
  overflow-wrap: anywhere;
}
.resource-url {
  color: var(--el-color-primary);
}
.download-link {
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 20px;
  color: var(--el-color-white);
  background: var(--el-color-primary);
  text-decoration: none;
}
.download-link:hover {
  background: var(--el-color-primary-dark-2);
}
.download-link:focus-visible {
  outline: 2px solid var(--el-text-color-primary);
  outline-offset: 3px;
}
.data-card + .data-card {
  margin-top: 40px;
}
.data-card {
  scroll-margin-top: 90px;
}
.section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}
.section-nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  box-sizing: border-box;
  padding: 10px 22px;
  border: 1px solid var(--el-color-primary-light-7);
  border-radius: 24px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
}
.section-nav a:hover,
.section-nav a:active {
  border-color: var(--el-color-primary);
  background: var(--el-color-primary);
  color: var(--el-color-white);
}
.section-nav a:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 3px;
}
@media (max-width: 600px) {
  .section-nav a {
    flex: 1 1 calc(50% - 12px);
    padding: 10px 14px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .section-nav a {
    transition: none;
  }
}

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
  color: var(--el-text-color-primary);
  display: flex;
  align-items: center;
}

.icon-margin {
  margin-right: 12px;
  color: #409eff;
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
