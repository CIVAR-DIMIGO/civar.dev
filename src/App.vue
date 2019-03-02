<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import Index from '@/sections/Index'
// import Info from '@/sections/Info'
// import Members from '@/sections/Members'

export default {
  name: 'app',
  components: {
    Header,
    Index,
    // Info,
    // Members,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <Index />
    <!-- <Info /> -->
    <!-- <Members /> -->
    <Footer />
  </div>
</template>
