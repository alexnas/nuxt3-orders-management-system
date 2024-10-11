<script lang="ts" setup>
console.log('loaded');
</script>

<template>
  <section class="grid">
    <aside class="sidebar">
      <LayoutSidebar />
    </aside>
    <div class="">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
.sidebar {
  min-height: 100vh;
  min-width: 200px;
}
</style>
