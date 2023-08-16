<template>
  <div>
    <h2>Pinia SSR teszt</h2>
    <br>
    serverInitStore.user: {{ serverInitStore.user }}
    <br>
    JSON.stringify: {{ JSON.stringify(serverInitStore.user) }}
    <br>
    <hr>
    <br>
    user: {{ user }}
    <br>
    JSON.stringify: {{ JSON.stringify(user) }}
  </div>
</template>

<script lang="ts">
    import { storeToRefs } from 'pinia';
    import { defineComponent, onMounted } from '@nuxtjs/composition-api';
    import { useServerInitStore } from '../stores';

    export default defineComponent({
        name: 'Pinia',
        setup () {
            const serverInitStore = useServerInitStore();
            const { user } = storeToRefs(serverInitStore);
            if (process.server) {
                console.log('SSR: ', serverInitStore.user);
            }
            onMounted(() => {
                console.log('CSR:', serverInitStore.user);
            });

            return { serverInitStore, user };
        }
    });
</script>

<style scoped>

</style>
