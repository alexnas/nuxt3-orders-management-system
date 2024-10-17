<script lang="ts" setup>
import dayjs from 'dayjs';
import { convertCurrency } from '~/lib/convertCurrency';
import { useDealSlideStore } from '~/store/deal-slide.store';

const dealSlideStore = useDealSlideStore();
const { card } = storeToRefs(dealSlideStore);
</script>

<template>
  <div class="border-border bg-black/20 rounded p-3">
    <div class="uppercase bold text-xl mb-4">About deal</div>

    <KanbanSlideoverLabel label-text="Name">
      {{ card?.name }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Price">
      {{ convertCurrency(card?.price || 0) }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Status">
      <UiBadge variant="outline">
        {{ card?.status }}
      </UiBadge>
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Client">
      {{ card?.companyName }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Created At">
      {{ dayjs(card?.$createdAt).format('DD MMMM YYYY') }}
    </KanbanSlideoverLabel>
  </div>
</template>
