<script lang="ts" setup></script>

<template>
  <aside class="px-5 py-8 bg-sidbar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 flex justify-center">
      <Icon name="logos:nuxt-icon" size="60" class="mx-auto" />
    </NuxtLink>

    <button class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20" />
    </button>

    <LayoutMenu />
  </aside>
</template>

<style scoped></style>
