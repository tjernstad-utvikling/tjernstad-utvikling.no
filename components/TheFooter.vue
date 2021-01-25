<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <logo />
        </div>

        <div
          v-for="section in footer.sections"
          :key="section._key"
          class="flex-1"
        >
          <p class="uppercase text-gray-500 md:mb-6">{{ section.heading }}</p>
          <ul class="list-reset mb-6">
            <li
              v-for="item in section.section"
              :key="item._key"
              class="mt-2 inline-block mr-2 md:block md:mr-0"
            >
              <a
                :href="item.url.href"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >{{ item.label }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo,
  },
  props: {
    footer: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
