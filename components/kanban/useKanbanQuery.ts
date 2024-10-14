import { useQuery } from '@tanstack/vue-query';
import { DB } from '~/lib/appwrite';
import { KANBAN_DATA } from './kanban.data';
import type { ICard, IColumn } from './kanban.types';
import type { IDeal } from '~/types/deals.types';
const DB_ID = import.meta.env.VITE_DB_ID;
const COLLECTION_DEALS = import.meta.env.VITE_COLLECTION_DEALS;

export function useKanbanQuery() {
  return useQuery({
    queryKey: ['deals'],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard: IColumn[] = KANBAN_DATA.map((column) => ({
        ...column,
        items: [] as ICard[],
      }));

      const deals = data.documents as unknown as IDeal[];

      return newBoard;
    },
  });
}
