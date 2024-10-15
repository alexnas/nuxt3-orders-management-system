<script lang="ts" setup>
import { useMutation } from '@tanstack/vue-query';
import dayjs from 'dayjs';
import type { ICard, IColumn } from '~/components/kanban/kanban.types';
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery';
import { convertCurrency } from '~/lib/convertCurrency';
import { DB } from '~/lib/appwrite';
import type { EnumStatus } from '~/types/deals.types';
const DB_ID = import.meta.env.VITE_DB_ID;
const COLLECTION_DEALS = import.meta.env.VITE_COLLECTION_DEALS;

useSeoMeta({
  title: 'Home | CRM System',
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>();
const { data, isLoading, refetch } = useKanbanQuery();

type TypeMutationVariables = {
  docId: string;
  status?: EnumStatus;
};

const { mutate } = useMutation({
  mutationKey: ['move card'],
  mutationFn: ({ docId, status }: TypeMutationVariables) =>
    DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
      status,
    }),
  onSuccess: () => {
    refetch();
  },
});

const handleDragStart = (card: ICard, column: IColumn) => {
  dragCardRef.value = card;
  sourceColumnRef.value = column;
};

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const handleDrop = (targetColumn: IColumn) => {
  if (dragCardRef.value && sourceColumnRef.value) {
    mutate({ docId: dragCardRef.value.id, status: targetColumn.id });
  }
};
</script>

<template>
  <div class="p-10 overflow-x-auto">
    <h1 class="font-bold text-2xl mb-10">Orders Management System</h1>
    <div v-if="isLoading">Loading...</div>

    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div
          v-for="(column, index) in data"
          :key="column.id"
          class="min-w-fit"
          @dragover="handleDragOver"
          @drop="() => handleDrop(column)"
        >
          <div
            class="rounded bg-slate-700 py-1 px-5 mb-2 text-center overflow-x-auto"
          >
            {{ column.name }}
          </div>
          <div>
            <KanbanCreateDeal :refetch="refetch" :status="column.id" />
            <UiCard
              v-for="card in column.items"
              :key="card.id"
              class="mb-5"
              draggable="true"
              @dragstart="() => handleDragStart(card, column)"
            >
              <UiCardHeader role="button"
                >{{ card.name }}
                <UiCardDescription class="mt-2 block">{{
                  convertCurrency(card.price)
                }}</UiCardDescription>
              </UiCardHeader>
              <UiCardContent class="text-xs">{{
                card.companyName
              }}</UiCardContent>
              <UiCardFooter>{{
                dayjs(card.$createdAt).format('DD MMMM YYYY')
              }}</UiCardFooter>
            </UiCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
