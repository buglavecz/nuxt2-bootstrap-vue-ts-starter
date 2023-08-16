import { defineStore } from 'pinia';

export const useServerInitStore = defineStore('serverInitStore', {
    state: () => ({
        user: {}
    }),
    actions: {
        async nuxtServerInit() {
            let json;
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
                json = await data.json();
            } catch (e) {
                console.log(e);
            }
            this.user = json;
            /*this.$patch({
                user: json
            });*/
        },
        changeName() {
            // @ts-ignore
            this.user.name = 'XXX';
        }
    }
});
