<template>
  <div>
    <landing :page="page" />
  </div>
</template>

<script>
import Landing from '@/components/pages/landing'
import sanityClient from '@/sanityClient'

const query = `
  {
    "page": *[_id == "fa241220-23b0-467f-885f-0975bf4f467e"][0]
  }
`

export default {
  name: 'LandingPage',
  components: {
    landing: Landing,
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
}
</script>
