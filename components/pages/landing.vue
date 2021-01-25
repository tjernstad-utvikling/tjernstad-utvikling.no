<template>
  <div>
    <template v-for="section in page.content">
      <component :is="section._type" :key="section._key" :section="section" />
    </template>
  </div>
</template>

<script>
import * as sections from '@/components/sections'

export default {
  name: 'LandingPage',
  components: { ...sections },
  props: {
    page: {
      type: Object,
      default: () => {
        return {}
      },
    },
  }
}
</script>
