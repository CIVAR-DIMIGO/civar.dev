<script>
import menu from '@/assets/menu.json'

export default {
  data () {
    return {
      nav: menu
    }
  }
}
</script>

<template>
  <div>
    <nav class="nav">
      <router-link v-for="(menu, idx) in nav" :key="idx"
        class="nav__menu" :to="{ name: menu.route }">
        <i v-bind:class="menu.icon"/> {{ menu.name }}
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  text-align: center;
  margin-bottom: 3rem;

  &__menu {
    cursor: pointer;
    color: white;
    display: inline-block;
    border: 2px solid white;
    border-radius: 5px;
    padding: .6rem 1rem;
    margin: 5px;
  }

  &__menu:hover {
    color: black;
    background-color: white;
  }

  @media (max-width: 440px) {
    &__menu {
      color: white;
      display: block;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
}
</style>
