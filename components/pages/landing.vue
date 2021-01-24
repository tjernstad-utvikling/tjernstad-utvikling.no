<template>
  <div>
    <hero />
    <features />
    <teasers />
    <prices />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/sections/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    'call-to-action': CallToAction,
  },
  props: {
    page: {
      type: Object,
      default: () => {
        return { name: 'This event' }
      },
    },
  },
  created() {
    console.log(this.page);
  },
}
</script>
