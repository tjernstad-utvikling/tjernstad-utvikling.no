<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ section.title }}
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <template v-for="projectSection in section.section">
        <project-right
          v-if="projectSection._type == 'project-right'"
          :key="projectSection._key"
          :headline="projectSection.headline"
        >
          <SanityContent slot="content" :blocks="projectSection.text" />
          <img
            v-if="projectSection.image !== undefined"
            slot="img"
            :src="$urlFor(projectSection.image)"
            loading="lazy"
            :alt="projectSection.image.alt"
          />
        </project-right>
        <project-left
          v-if="projectSection._type == 'project-left'"
          :key="projectSection._key"
          :headline="projectSection.headline"
        >
          <SanityContent slot="content" :blocks="projectSection.text" />
          <img
            v-if="projectSection.image !== undefined"
            slot="img"
            :src="$urlFor(projectSection.image)"
            loading="lazy"
            :alt="projectSection.image.alt"
          />
        </project-left>
      </template>
    </div>
  </section>
</template>

<script>
import ProjectRight from '@/components/sections/ProjectRight'
import ProjectLeft from '@/components/sections/ProjectLeft'
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'

export default {
  name: 'Projects',
  components: {
    'project-right': ProjectRight,
    'project-left': ProjectLeft,
    SanityContent,
  },
  props: {
    section: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
