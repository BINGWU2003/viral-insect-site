<template>
  <div class="home">
    <div class="home-top-content">
      <div class="home-top-content-item" v-for="(item, index) in topNav" :key="index">
        <div class="home-top-content-item-top"
          :style="{ backgroundColor: item.backgroundColor, borderColor: item.borderColor }">
          {{ item.content1 }}
        </div>
        <div class="home-top-content-item-bottom" v-if="item.content2 && item.content3">
          <div :style="{ backgroundColor: item.backgroundColor, borderColor: item.borderColor }" v-if="item.content2">
            {{ item.content2 }}
          </div>
          <div :style="{ backgroundColor: item.backgroundColor, borderColor: item.borderColor }" v-if="item.content2">
            {{ item.content3 }}
          </div>
        </div>
      </div>
    </div>
    <div class="home-center-content">
      <div class="article">
        <h1>Welcome to Virus- Plant –Insect DB !</h1>
        <p>
          This virus-plant-insect database provides information about plant viruses,insects that spread the virus, and
          plant hosts infected by the virus.It also provides the function of predicting virus transmission patterns.
          This virus-plant-insect database provides information about plant viruses,insects that spread the virus, and
          plant hosts infected by the virus.It also provides the function of predicting virus transmission patterns.This
          virus-plant-insect database provides information about plant viruses,insects that spread the virus, and
          plant hosts infected by the virus.It also provides the function of predicting virus transmission patterns.This
          virus-plant-insect database provides information about plant viruses,insects that spread the virus, and
          plant hosts infected by the virus.It also provides the function of predicting virus transmission patterns.
        </p>
      </div>
      <div class="news">
        <h1 class="title-border">News</h1>
        <p>2023-12-29</p>
        <p class="content">Li Yi | The "behind-the-scenes pioneer" in fighting plant virusesLi Yi | The
          "behind-the-scenes pioneer" in fighting plant viruses Li Yi | The "behind-the-scenes pioneer" in fighting
          plant viruses Li Yi | The "behind-the-scenes pioneer" in fighting plant viruses Li Yi | The "behind-the-scenes
          pioneer" in fighting plant viruses Li Yi | The "behind-the-scenes pioneer" in fighting plant viruses Li Yi |
          The "behind-the-scenes pioneer" in fighting plant viruses </p>
      </div>
    </div>
    <div class="home-bottom-content">
      <div class="home-bottom-content-left">
        <div style="width: 45%;">
          <div class="news">
            <h1>Selected vector index</h1>
            <p class="content">Li Yi | The "behind-the-scenes pioneer" in fighting plant virusesLi Yi | The
              "behind-the-scenes pioneer" in fighting plant viruses Li Yi | The "behind-the-scenes pioneer" in fighting
              plant viruses Li Yi | The "behind-the-scenes pioneer" in fighting plant viruses Li Yi | The
              "behind-the-scenes
              pioneer" in fighting plant viruses Li Yi | The "behind-the-scenes pioneer" in fighting plant viruses Li Yi
              |
              The "behind-the-scenes pioneer" in fighting plant viruses </p>
          </div>
        </div>
      </div>
      <div class="home-bottom-content-right">
        <h1 class="news title-border">
          Related links
        </h1>
        <div>
          <div v-for="(item) in relatedLinks" :href="url" :key="item.url" style="cursor: pointer;"
            @click="navigateTo(item.url)">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const topNav = [
  {
    content1: 'Non-Persistent Transmission',
    content2: 'Non-Circulative, Semi-Persistent Transmission',
    content3: 'Circulative, Non-Propagative Transmission',
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
}

.title-border {
  border-bottom: 3px solid #70ad47;
  padding-bottom: 4px;
}
</style>
