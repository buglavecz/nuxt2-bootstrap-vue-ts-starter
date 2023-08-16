import { Context } from '@nuxt/types';
import { useServerInitStore } from '../stores';

export default async function ({ $pinia }: Context) {
    const store = useServerInitStore($pinia);
    await store.nuxtServerInit();
}
