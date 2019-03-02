<script>
import info from '@/assets/info.json'

export default {
  name: 'Info',

  data () {
    return {
      info: info
    }
  }
}
</script>

<template>
  <div id="content">
    <div id="main">
      <div class="intro">
        <h1 class="intro__title">우리는 시바</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main {
  margin-bottom: 1em;
}
.intro {
  margin-left: 1em;
  padding: .5em;
  font-family: 'Noto Sans KR', serif;
  white-space: pre-line;
  cursor: default;
  height: 100vh;

  &__title {
    padding-right: .8em;
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
    @media (max-height: 600px) {
      -webkit-text-stroke-width: 0.8px;
      font-size: 2em;
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
