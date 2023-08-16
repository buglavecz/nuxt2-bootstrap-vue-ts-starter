import { defineStore } from 'pinia';

export const useServerInitStore = defineStore('serverInitStore', {
    state: () => ({
        user: {}
    }),
    actions: {
        async nuxtServerInit () {
            let json;
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                json = await data.json();
            } catch (e) {
                console.log(e);
            }

            this.$patch({
                user: json
            });
        }
    }
});
