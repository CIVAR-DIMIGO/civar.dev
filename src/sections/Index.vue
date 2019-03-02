<script>
import info from '@/assets/info.json'

export default {
  name: 'Index',

  data () {
    return {
      intro: info.intro
    }
  }
}
</script>

<template>
  <div id="content">
    <div class="background"/>
    <div id="main">
      <div class="intro">
        <h1 class="intro__title">{{ intro.title }}</h1>
        <p class="intro__mission">{{ intro.mission }}</p>
      </div>
      <img class="float" src="@/assets/float.svg"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #434343 0%, black 100%);  
  z-index: -1;
  height: 100vh;
  width: 100%;
}
#main {
  height: 100vh;
  width: 100%;
}
.float {
  position: absolute;
  object-fit: contain;
  top: 0;
  left: 0;
  z-index: -1;
}
.intro {
  margin-left: 1em;
  padding: .5em;
  font-family: 'Noto Sans KR', serif;
  white-space: pre-line;
  cursor: default;
  z-index: 1;

  &__title {
    padding-right: .8em;
    margin-bottom: .3em;
    color: white;

    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: white;

    font-weight: 900;
    font-size: 6.2em;

    @media (max-width: 1000px) {
      font-size: 5em;
    }
    @media (max-width: 700px) {
      font-size: 3.3em;
    }
    @media (max-height: 600px) {
      -webkit-text-stroke-width: 0.8px;
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
