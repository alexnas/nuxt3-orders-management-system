<script lang="ts" setup>
import { account } from '~/lib/appwrite';
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';

const isLoadingStore = useIsLoadingStore();
const store = useAuthStore();
const router = useRouter();

onMounted(async () => {
  try {
    isLoadingStore.set(true);
    const user = await account.get();
    if (user) store.set(user);
  } catch (error) {
    router.push('/login');
  } finally {
    isLoadingStore.set(false);
  }
});
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.isLoading" />
  <section v-else :class="{ grid: store.isAuth }">
    <aside v-if="store.isAuth" class="sidebar">
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
