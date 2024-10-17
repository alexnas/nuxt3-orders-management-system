import { useQuery } from '@tanstack/vue-query';
import { DB } from '~/lib/appwrite';
const DB_ID = import.meta.env.VITE_DB_ID;
const COLLECTION_DEALS = import.meta.env.VITE_COLLECTION_DEALS;

export function useComments() {
  const dealSlideStore = useDealSlideStore();
  const cardId = dealSlideStore.card?.id || '';

  return useQuery({
    queryKey: ['deal', cardId],
    queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cardId),
  });
}
