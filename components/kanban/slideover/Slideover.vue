<script lang="ts" setup>
import { useDealSlideStore } from '~/store/deal-slide.store';

const dealSlideStore = useDealSlideStore();
const { isOpen } = storeToRefs(dealSlideStore);

const isLocalOpen = computed({
  get: () => isOpen.value,
  set: (value) => {
    isOpen.value = value;
  },
});
</script>

<template>
  <div>
    <USlideover v-model="isLocalOpen">
      <UCard
        class="flex flex-col flex-1 overflow-y-auto"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-border',
        }"
      >
        <template #header>
          <KanbanSlideoverTop />
        </template>

        <KanbanSlideoverComments />
      </UCard>
    </USlideover>
  </div>
</template>
