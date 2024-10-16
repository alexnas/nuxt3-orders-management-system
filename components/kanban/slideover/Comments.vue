<script lang="ts" setup>
import { useDealSlideStore } from '~/store/deal-slide.store';

const dealSlideStore = useDealSlideStore();
const { card, isOpen } = storeToRefs(dealSlideStore);

const isLocalOpen = computed({
  get: () => isOpen.value,
  set: (value) => {
    isOpen.value = value;
  },
});
</script>

<template></template>

<style scoped></style>
