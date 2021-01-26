<template>
  <div class="pt-32">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">{{ section.heading }}</p>
        <h1 class="my-4 text-4xl font-bold leading-tight">
          <SanityContent :blocks="section.tagline" />
        </h1>

        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Subscribe
        </button>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center">
        <img
          :src="$urlFor(section.backgroundImage)"
          class="w-full md:w-4/5 z-50"
          loading="lazy"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'

export default {
  name: 'HeroContent',
  components: { SanityContent },
  props: {
    section: {
      type: Object,
      default: () => {
        return {}
      },
    },
  }
}
</script>
