<template>
  <div class="home">
    <div class="home-top-content">
      <div class="home-top-content-item" v-for="(item, index) in topNav" :key="index">
        <div class="home-top-content-item-top" @click="handleClickFilterContent(item.content1)"
          :style="{ backgroundColor: item.backgroundColor, borderColor: item.borderColor }">
          {{ item.content1 }}
        </div>
        <div class="home-top-content-item-bottom" v-if="item.content2 && item.content3">
          <div :style="{ backgroundColor: item.backgroundColor, borderColor: item.borderColor }" v-if="item.content2"
            @click="handleClickFilterContent(item.content2)">
            {{ item.content2 }}
          </div>
          <div :style="{ backgroundColor: item.backgroundColor, borderColor: item.borderColor }" v-if="item.content2"
            @click="handleClickFilterContent(item.content3)">
            {{ item.content3 }}
          </div>
        </div>
      </div>
    </div>
    <div class="home-center-content">
      <div class="article">
        <h1 style="font-family: 'Microsoft YaHei';">Welcome to Virus-Plant-Insect DB</h1>
        <p>
          VPI-DB integrates data on the relationships among viruses, plant hosts, and vector insects, represented in the
          form of NCBI taxonomy IDs for these viruses, plant hosts, and insects. The database encompasses 457 plant
          viruses, 394 plant hosts, and 108 insect vectors, and also provides functionality for predicting virus
          transmission patterns.
        </p>
      </div>
      <div class="news">
        <h1 class="title-border">News</h1>
        <div class="content" style="display: block;">
          <p>2023-8-22:</p>
          <p>
            Retrieved plant virus-related literature and collected relevant data.
          </p>
          <p>
            2023-12-2：
          </p>
          <p>
            Supplemented the dataset with virus entries from the GPI-base database.
          </p>
          <p>2024-2-26：</p>
          <p>
            Downloaded viral protein and genome sequences from the NCBI database and used these sequences to train
            predictive models.
          </p>
          <p>2025-3-10：</p>
          <p>
            Successfully launched the website, integrating all compiled data and analytical tools.
          </p>
        </div>
      </div>
    </div>
    <div class="home-bottom-content">
      <div class="home-bottom-content-left">
        <div style="width: 70%;">
          <div class="news">
            <h1>Selected vector families</h1>
            <div class="content">
              <template v-for="(item, indexInsect) in insectFamilies" :key="indexInsect">
                <SelectItem :name="item.name" imageType="virus" @select="handleClickInsect"></SelectItem>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="home-bottom-content-right">
        <h1 class="news title-border">
          Related links
        </h1>
        <div style="margin-top: 10px;font-size: 20px;">
          <div v-for="(item) in relatedLinks" :href="url" :key="item.url" style="cursor: pointer;"
            @click="navigateTo(item.url)">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="home-bottom-content">
      <div class="home-bottom-content-left">
        <div style="width: 70%;">
          <div class="news">
            <h1>Selected viral families</h1>
            <p class="content">
              <template v-for="(item, indexVirus) in virusFamilies" :key="indexVirus">
                <SelectItem :name="item.name" imageType="vector" @select="handleSelectViral"></SelectItem>
              </template>
            </p>
          </div>
        </div>
      </div>
      <div class="home-bottom-content-right" style="opacity: 0;">
        <h1 class="news">
          Virus family distribution
        </h1>
        <div>
          <img src="../assets/图片1.png" alt="" style="height: 200px;object-fit: contain;">
        </div>
      </div>
    </div>
    <div class="author-info">
      <p>For follow-up questions, please contact Dr. Zhang Zheng</p>
      <p>Email: zhang2022@hunau.edu.cn</p>
      <p>google scholar:https://scholar.google.com.hk/citations?user=wLLSZQcAAAAJ&hl=zh-CN</p>
      <p>Hunan Agricultural University,Changsha, China</p>
      <p>Cite us:Tao Deng,Hongyan Zhang,Zheng Zhang.Virus-Plant-Insect DB</p>
    </div>
  </div>
</template>

<script setup>
import SelectItem from '@/components/select-item/index.vue'
import { useRouter } from 'vue-router'
import { useTableStore } from '@/stores/table'
const tableStore = useTableStore()
const router = useRouter()
const topNav = [
  {
    content1: 'Non-Persistent Transmission',
    content2: 'Non-Persistent Transmission',
    content3: 'Non-Circulative, Semi-Persistent Transmission',
    backgroundColor: '#f9f2fe',
    borderColor: '#d786ff',
  },
  {
    content1: 'Persistent, circulative',
    content2: 'Circulative, Persistent-Propagative Transmission',
    content3: 'Circulative, Persistent Non-Propagative Transmission',
    backgroundColor: '#ccffcc',
    borderColor: '#548235',
  },
  {
    content1: 'Unknow',
    content2: '',
    content3: '',
    backgroundColor: '#e2f0ff',
    borderColor: '#bfd9f2',
  },
]
const relatedLinks = [
  {
    name: 'Pubmed',
    url: 'https://pubmed.ncbi.nlm.nih.gov/',
  }, {
    name: 'GPI',
    url: 'http://geminiviridae.com/',
  }, {
    name: 'Virus-host DB',
    url: 'https://www.genome.jp/virushostdb/',
  }, {
    name: 'NCBI',
    url: 'https://ftp.ncbi.nih.gov',
  }
]
const navigateTo = (url) => {
  window.location.href = url
}

const insectFamilies = [
  { id: 1, name: 'Aleyrodidae' },
  { id: 2, name: 'Cicadellidae' },
  { id: 3, name: 'Aphididae' },
  { id: 4, name: 'Chrysomelidae' },
  { id: 5, name: 'Scarabaeidae' },
  { id: 6, name: 'Apidae' },
  { id: 7, name: 'Coccinellidae' },
  { id: 8, name: 'Delphacidae' },
  { id: 9, name: 'Thripidae' },
  { id: 10, name: 'Cerambycidae' },
  { id: 11, name: 'Tenuipalpidae' },
  { id: 12, name: 'Tetranychidae' },
  { id: 13, name: 'Culicidae' },
  { id: 14, name: 'Pseudococcidae' },
  { id: 15, name: 'Eriophyidae' },
  { id: 16, name: 'Noctuidae' },
  { id: 17, name: 'Sciaridae' },
  { id: 18, name: 'Bombycidae' },
  { id: 19, name: 'Sphingidae' },
]

const virusFamilies = [
  { id: 1, name: 'Solemoviridae' },
  { id: 2, name: 'Nanoviridae' },
  { id: 3, name: 'Tombusviridae' },
  { id: 4, name: 'Geminiviridae' },
  { id: 5, name: 'Secoviridae' },
  { id: 6, name: 'Tymoviridae' },
  { id: 7, name: 'Tospoviridae' },
  { id: 8, name: 'Rhabdoviridae' },
  { id: 9, name: 'Sedoreoviridae' },
  { id: 10, name: 'Spinareoviridae' },
  { id: 11, name: 'Phenuiviridae' },
  { id: 12, name: 'Caulimoviridae' },
  { id: 13, name: 'Closteroviridae' },
  { id: 14, name: 'Betaflexiviridae' },
  { id: 15, name: 'unkown' },
  { id: 16, name: 'Potyviridae' },
  { id: 17, name: 'Bromoviridae' },
  { id: 18, name: 'Alphaflexiviridae' },
  { id: 19, name: 'Virgaviridae' },
  { id: 20, name: 'Pospiviroidae' },
  { id: 21, name: 'Partitiviridae' },
  { id: 22, name: 'Dicistroviridae' },
  { id: 23, name: 'Tolecusatellitidae' },
  { id: 24, name: 'Totiviridae' },
  { id: 25, name: 'Baculoviridae' },
  { id: 26, name: 'Parvoviridae' },
  { id: 27, name: 'Benyviridae' },
  { id: 28, name: 'Nodaviridae' },
  { id: 29, name: 'Iflaviridae' },
  { id: 30, name: 'Mesoniviridae' },
  { id: 31, name: 'Fimoviridae' },
  { id: 32, name: 'Chuviridae' },
]
const handleClickFilterContent = (name) => {
  tableStore.setTableType(1)
  router.push({
    name: 'browse',
    query: {
      mode: name
    }
  })
}

const handleSelectViral = (name) => {
  tableStore.setTableType(1)
  router.push({
    name: 'browse',
    query: {
      virusFamily: name
    }
  })
}

const handleClickInsect = (name) => {
  tableStore.setTableType(1)
  router.push({
    name: 'browse',
    query: {
      vectorFamily: name
    }
  })
}
</script>

<style lang="scss" scoped>
.home {
  font-weight: 700;

  .home-top-content {
    display: flex;
    justify-content: space-between;

    .home-top-content-item {
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .home-top-content-item-top {
        height: 30px;
        width: 100%;
        padding: 2px;
        background-color: #f9f2fe;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        border: 1px solid #d786ff;
        cursor: pointer;
      }

      .home-top-content-item-bottom {
        width: 100%;
        display: flex;
        gap: 10px;

        div {
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f9f2fe;
          flex: 1;
          min-height: 100px;
          border-radius: 6px;
          border: 1px solid #d786ff;
          cursor: pointer;
        }
      }
    }
  }

  .home-center-content {
    margin: 20px 0;
    display: flex;
    gap: 40px;

    .article {
      flex: 2;
      padding: 20px;
      border-radius: 6px;
      border: 3px solid #70ad47;
      padding-bottom: 0;

      h1 {
        color: #385723;
      }

      p {
        height: 100px;
        overflow: auto;
      }
    }

    .news {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
      color: #385723;
      border-radius: 6px;

      .content {
        height: 100px;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }

    }
  }

  .home-bottom-content {
    display: flex;
    justify-content: space-between;
    color: #385723;
    gap: 40px;

    .home-bottom-content-left {
      flex: 2;
      padding: 20px;

      div {
        .news {
          border-radius: 6px;

          .content {
            height: 100px;
            overflow: auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

        }
      }
    }

    .home-bottom-content-right {
      display: flex;
      flex-direction: column;
      flex: 1;

      .news {
        .content {
          height: 100px;
          overflow: auto;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        color: #1565bd;
      }
    }
  }

  .author-info {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: black;
    margin-top: 20px;
    align-items: center;
    border-top: 3px solid #70ad47;
  }
}

.title-border {
  border-bottom: 3px solid #70ad47;
  padding-bottom: 4px;
}
</style>
