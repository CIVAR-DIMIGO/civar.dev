<script>
import info from '@/assets/info.json'

export default {
  name: 'Footer',
  components: {

  },

  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      footer: info.footer
    }
  },

  computed: {
    getComputedStyle: function () {
      return {
        position: (this.absolute) ? 'absolute' : 'relative'
      }
    }
  }
}
</script>

<template>
  <div class="footer" :style="getComputedStyle">
    <div class="footer__icons">
      <a href="https://www.facebook.com/CIVAR18/" target="_blank">
        <i class="fab fa-facebook-square fa-2x"></i>
      </a>
      <a href="https://github.com/CIVAR-DIMIGO" target="_blank">
        <i class="fab fa-github-square fa-2x"></i>
      </a>
    </div>
    <div class="footer__info">
      <p>{{ footer.message }}</p>
      <p>Copyright 2019 CIVAR All rights reserved</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  left: 0;
  bottom: 20px;
  width: 100%;
  text-align: center;
  
  &__icons {
    i {
      color: white;
      margin: 3px;
    }
    i:hover {
      color: #ffca12;
    }
  }

  &__info {
    font-family: 'Noto Sans KR', serif;
    font-size: .5rem;

    p {
      margin: 0;
      color: white;
    }
  }
}
</style>
