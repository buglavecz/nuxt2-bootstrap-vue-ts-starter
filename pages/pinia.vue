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
    <br><br>
    <button @click="changeStore()">Do it</button><br><br>
    <button @click="loadStore()">Load Store</button>
  </div>
</template>

<script lang="ts">
    import { storeToRefs } from 'pinia';
    import {defineComponent, onMounted, set, ref} from '@nuxtjs/composition-api';
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

            const changeStore = () => {
                // @ts-ignore
                serverInitStore.user.username = 'YYYY';
                serverInitStore.changeName();

                setTimeout(() => {
                    // const r = ref({ alma: 'prios'});
                    // set(serverInitStore.$state, 'user', r);

                    serverInitStore.user = { alma: 'prios'};
                }, 3000);
            };

            const loadStore = async () => {
              await serverInitStore.nuxtServerInit();
            };
            return { serverInitStore, user, changeStore, loadStore };
        }
    });
</script>

<style scoped>

</style>
