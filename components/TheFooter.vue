<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <logo />
        </div>

        <div class="flex-1">
          <p class="text-gray-500 md:mb-6">Tjernstad Utvikling</p>
          <ul class="text-gray-900 list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              Sandervegen 590
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">2116 Sander</li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="text-gray-500 md:mb-6">Tlf: 48 31 32 83</p>
          <ul class="text-gray-900 list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              Org. nr. 924 359 595
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
}
</script>
