<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import info from '@/assets/info.json'

export default {
  name: 'Index',
  components: {
    Header,
    Footer
  },

  data () {
    return {
      intro: info.intro
    }
  }
}
</script>

<template>
  <div id="content">
    <Header/>
    <div id="main">
      <div class="intro">
        <h1 class="intro__title">{{ intro.title }}</h1>
        <p class="intro__mission">{{ intro.mission }}</p>
      </div>
    </div>
    <Footer :absolute="true" />
  </div>
</template>

<style lang="scss" scoped>
.intro {
  margin-left: 1em;
  padding: .5em;
  font-family: 'Noto Sans KR', serif;
  white-space: pre-line;

  &__title {
    margin-bottom: .3em;
    color: white;

    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: white;

    font-weight: 900;
    font-size: 5em;

    @media (max-width: 1000px) {
      font-size: 4em;
    }
    @media (max-width: 700px) {
      font-size: 3em;
    }

    img {
      width: 5em; 
      height: 5em;
    }
  }

  &__mission {
    color: white;
    font-size: 1.5em;
  }
}
</style>
