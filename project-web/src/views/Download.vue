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

const amoaDatasetTable: DatasetResource[] = [
  {
    name: 'Aurelia coerulea annotated snRNA-seq atlas (gene-level)',
    file: 'AucoData/Auco.sn.normalized.annotated.gzip.h5ad',
    category: 'Aurelia final atlases',
    url: '/api/download/AucoData/Auco.sn.normalized.annotated.gzip.h5ad'
  },
  {
    name: 'Aurelia coerulea annotated snRNA-seq atlas (OG-level)',
    file: 'AucoData/Auco.sn.normalized.annotated.OGs.gzip.h5ad',
    category: 'Aurelia final atlases',
    url: '/api/download/AucoData/Auco.sn.normalized.annotated.OGs.gzip.h5ad'
  },
  {
    name: 'Aurelia coerulea spatial transcriptome (bin50, gene-level)',
    file: 'AucoData/Auco.st.bin50.gzip.h5ad',
    category: 'Aurelia final atlases',
    url: '/api/download/AucoData/Auco.st.bin50.gzip.h5ad'
  },
  {
    name: 'Aurelia coerulea spatial transcriptome (bin50, normalized OG-level)',
    file: 'AucoData/Auco.st.bin50.normalized.OGs.gzip.h5ad',
    category: 'Aurelia final atlases',
    url: '/api/download/AucoData/Auco.st.bin50.normalized.OGs.gzip.h5ad'
  },
  {
    name: 'Integrated nine-taxon cell atlas (TAR.GZ archive)',
    file: 'BasalMetazoaDataset/sc_BasalMetazoaDataset.tar.gz',
    category: 'Integrated atlas',
    url: '/api/download/BasalMetazoaDataset/sc_BasalMetazoaDataset.tar.gz'
  },
  {
    name: 'Auco OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Auco.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/Auco.OG.normalized.gzip.h5ad'
  },
  {
    name: 'ClH23 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/ClH23.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/ClH23.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Clhe OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Clhe.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/Clhe.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Dare OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Dare.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/Dare.OG.normalized.gzip.h5ad'
  },
  {
    name: 'HoH13 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/HoH13.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/HoH13.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Neve OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Neve.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/Neve.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Spla OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/Spla.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/Spla.OG.normalized.gzip.h5ad'
  },
  {
    name: 'TrH1 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/TrH1.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/TrH1.OG.normalized.gzip.h5ad'
  },
  {
    name: 'TrH2 OG-level cell expression (AnnData)',
    file: 'scOrthoGeneH5ad/TrH2.OG.normalized.gzip.h5ad',
    category: 'OG expression · AnnData',
    url: '/api/download/scOrthoGeneH5ad/TrH2.OG.normalized.gzip.h5ad'
  },
  {
    name: 'Auco OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Auco.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/Auco.OG.normalized.rds'
  },
  {
    name: 'ClH23 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/ClH23.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/ClH23.OG.normalized.rds'
  },
  {
    name: 'Clhe OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Clhe.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/Clhe.OG.normalized.rds'
  },
  {
    name: 'Dare OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Dare.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/Dare.OG.normalized.rds'
  },
  {
    name: 'HoH13 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/HoH13.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/HoH13.OG.normalized.rds'
  },
  {
    name: 'Neve OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Neve.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/Neve.OG.normalized.rds'
  },
  {
    name: 'Spla OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/Spla.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/Spla.OG.normalized.rds'
  },
  {
    name: 'TrH1 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/TrH1.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/TrH1.OG.normalized.rds'
  },
  {
    name: 'TrH2 OG-level cell expression (RDS)',
    file: 'scOrthoGeneRDS/TrH2.OG.normalized.rds',
    category: 'OG expression · RDS',
    url: '/api/download/scOrthoGeneRDS/TrH2.OG.normalized.rds'
  },
  {
    name: 'Auco normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Auco.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/Auco.normalized.gzip.h5ad'
  },
  {
    name: 'ClH23 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/ClH23.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/ClH23.normalized.gzip.h5ad'
  },
  {
    name: 'Clhe normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Clhe.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/Clhe.normalized.gzip.h5ad'
  },
  {
    name: 'Dare normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Dare.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/Dare.normalized.gzip.h5ad'
  },
  {
    name: 'HoH13 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/HoH13.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/HoH13.normalized.gzip.h5ad'
  },
  {
    name: 'Neve normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Neve.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/Neve.normalized.gzip.h5ad'
  },
  {
    name: 'Spla normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/Spla.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/Spla.normalized.gzip.h5ad'
  },
  {
    name: 'TrH1 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/TrH1.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/TrH1.normalized.gzip.h5ad'
  },
  {
    name: 'TrH2 normalized gene-level cell expression (AnnData)',
    file: 'SingleCellDataH5ad/TrH2.normalized.gzip.h5ad',
    category: 'Gene expression · AnnData',
    url: '/api/download/SingleCellDataH5ad/TrH2.normalized.gzip.h5ad'
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

const selectedExternalCategory = ref('all')
const externalResourceCategories = [
  { label: 'All resources', value: 'all' },
  { label: 'Databases', value: 'Database' },
  { label: 'Software tools', value: 'Software' }
]
const filteredExternalLinks = computed(() =>
  selectedExternalCategory.value === 'all'
    ? externalLinks
    : externalLinks.filter((row) => row.category === selectedExternalCategory.value)
)

const selectedRawCategory = ref('all')
const rawDatasetCategories = [
  { label: 'All raw data', value: 'all' },
  { label: 'Long-read sequencing', value: 'Raw CycloneSEQ' },
  { label: 'Single-cell / single-nucleus RNA-seq', value: 'Raw snRNA-seq' },
  { label: 'Spatial transcriptomics', value: 'Raw Stereo-seq' }
]
const filteredRawDatasets = computed(() =>
  selectedRawCategory.value === 'all'
    ? rawDatasetTable
    : rawDatasetTable.filter((row) => row.category === selectedRawCategory.value)
)

const selectedCategory = ref('All datasets')
const datasetCategories = ['All datasets', ...new Set(amoaDatasetTable.map((row) => row.category))]
const filteredDatasets = computed(() =>
  selectedCategory.value === 'All datasets'
    ? amoaDatasetTable
    : amoaDatasetTable.filter((row) => row.category === selectedCategory.value)
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
          <a href="#multi-omics">Multi-Omics Datasets</a>
          <a href="#external-resources">External Resources</a>
        </nav>
        <el-card id="raw-data" class="data-card" shadow="hover">
          <template #header><div class="card-header">1. Raw Data</div></template>
          <p class="resource-note">
            {{ rawDatasetTable.length }} raw sequencing files for <i>Aurelia coerulea</i>:
            CycloneSEQ, snRNA-seq and Stereo-seq. Archived under
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
          <el-table :data="filteredRawDatasets" row-key="file" border stripe>
            <el-table-column prop="name" label="Resource Name" min-width="280">
              <template #default="scope">
                <i>{{ scientificNameParts(scope.row.name)[0] }}</i
                >{{ scientificNameParts(scope.row.name)[1] }}
              </template>
            </el-table-column>
            <el-table-column prop="category" label="Data Type" min-width="160" />
            <el-table-column prop="file" label="File Name" min-width="300"
              ><template #default="scope"
                ><span class="resource-path">{{ scope.row.file }}</span></template
              ></el-table-column
            >
            <el-table-column label="URL" width="150" align="center" fixed="right">
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
          <template #header><div class="card-header">2. Public Data</div></template>
          <p class="resource-note">
            Reference genomes and single-cell source publications for the nine study taxa.
            <i>Aurelia coerulea</i> data from this study are included for reference. Links open
            publications or database records.
          </p>
          <el-table :data="publicDataTable" row-key="species" border stripe>
            <el-table-column prop="species" label="Species Code" width="120" />
            <el-table-column prop="name" label="Species Name" min-width="250">
              <template #default="scope">
                <i>{{ scientificNameParts(scope.row.name)[0] }}</i
                >{{ scientificNameParts(scope.row.name)[1] }}
              </template>
            </el-table-column>
            <el-table-column label="Genome / Reference Sequences" min-width="250"
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
        <el-card id="multi-omics" class="data-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'download']" class="icon-margin" />
              <span>3. Multi-Omics Datasets</span>
            </div>
          </template>

          <p class="resource-note">
            {{ amoaDatasetTable.length }} processed files across five collections:
            <i>Aurelia</i> atlases, the integrated atlas archive, OG-level AnnData, OG-level RDS and
            gene-level AnnData. OG denotes orthogroup. Select a category to browse the collection.
          </p>
          <div class="dataset-filter">
            <label id="dataset-category-label" for="dataset-category">Dataset category</label>
            <el-select
              id="dataset-category"
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
          <el-table :data="filteredDatasets" row-key="file" border stripe style="width: 100%">
            <el-table-column prop="name" label="Resource Name" min-width="280">
              <template #default="scope">
                <i>{{ scientificNameParts(scope.row.name)[0] }}</i
                >{{ scientificNameParts(scope.row.name)[1] }}
              </template>
            </el-table-column>
            <el-table-column prop="category" label="Category" min-width="180" />
            <el-table-column prop="file" label="File Name / Path" min-width="340">
              <template #default="scope">
                <span class="resource-path">{{ scope.row.file }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Download" width="150" align="center" fixed="right">
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
              <span>4. External Resources</span>
            </div>
          </template>
          <p class="resource-note">
            Databases and official software repositories supporting sequence annotation, comparative
            genomics, single-cell and spatial analysis, and modeling in this project.
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
          <el-table :data="filteredExternalLinks" row-key="name" border stripe>
            <el-table-column prop="category" label="Type" width="120" />
            <el-table-column prop="name" label="Resource Name" min-width="230" />
            <el-table-column prop="resource" label="Purpose" min-width="200" />
            <el-table-column prop="url" label="URL" min-width="300">
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
.resource-path,
.resource-url {
  overflow-wrap: anywhere;
}
.resource-url {
  color: var(--el-color-primary);
}
.download-link {
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
