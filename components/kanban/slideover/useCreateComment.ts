import { useMutation } from '@tanstack/vue-query';
import { v4 as uuid } from 'uuid';
import { DB } from '~/lib/appwrite';
const DB_ID = import.meta.env.VITE_DB_ID;
const VITE_COLLECTION_COMMENTS = import.meta.env.VITE_COLLECTION_COMMENTS;

export function useCreateComment({ refetch }: { refetch: () => void }) {
  const dealSlideStore = useDealSlideStore();
  const commentRef = ref<string>();

  const { mutate } = useMutation({
    mutationKey: ['add comments', commentRef.value],
    mutationFn: () =>
      DB.createDocument(DB_ID, VITE_COLLECTION_COMMENTS, uuid(), {
        text: commentRef.value,
        deal: dealSlideStore.card?.id,
      }),
    onSuccess: () => {
      refetch();
      commentRef.value = '';
    },
  });

  const writeComment = () => {
    if (!commentRef.value) return;
    mutate();
  };

  return {
    writeComment,
    commentRef,
  };
}
