<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <the-header />
    <nuxt />
    <img src="~assets/img/wave-top.svg?inline" alt />
    <the-footer v-if="config" :footer="config.footer" />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import sanityClient from '@/sanityClient'

const query = `*[_type == "site-config"][0]`

export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter,
  },
  data: () => ({ config: '' }),
  async fetch() {
    this.config = await sanityClient.fetch(query)
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.gradient {
  background: linear-gradient(90deg, #dfdae1 0%, #8d7dbd 100%);
  /* background: linear-gradient(90deg, #d53369 0%, #daae51 100%); */
}
</style>
