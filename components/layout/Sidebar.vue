<script lang="ts" setup>
import { account } from '~/lib/appwrite';
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';

const isLoadingStore = useIsLoadingStore();
const store = useAuthStore();
const router = useRouter();

const logout = async () => {
  isLoadingStore.set(true);
  account.deleteSession('current');
  store.clear();
  await router.push('/login');
  isLoadingStore.set(false);
};
</script>

<template>
  <aside class="px-5 py-8 bg-sidbar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 flex justify-center">
      <Icon name="logos:nuxt-icon" size="60" class="mx-auto" />
    </NuxtLink>

    <button
      @click="logout"
      class="absolute top-2 right-3 transition-colors hover:text-primary"
    >
      <Icon name="line-md:logout" size="20" />
    </button>

    <LayoutMenu />
  </aside>
</template>

<style scoped></style>
