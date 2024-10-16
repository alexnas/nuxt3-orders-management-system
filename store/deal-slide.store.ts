import type { ICard } from '~/components/kanban/kanban.types';

const defaultValue: { card: ICard | null; isOpen: boolean } = {
  card: null,
  isOpen: false,
};

export const useDealSlideStore = defineStore('deal-slide', {
  state: () => defaultValue,
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
    set(data: ICard) {
      this.$patch({ card: { ...data }, isOpen: true });
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
