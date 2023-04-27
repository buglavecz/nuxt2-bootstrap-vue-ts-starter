<template>
  <b-container class="mt-3">
    <h3>Options API</h3>
    {{ message }}
  </b-container>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data () {
            // eslint-disable-next-line @typescript-eslint/no-inferrable-types
            const message: string = 'hello';

            return {
                message
            };
        }
    });
</script>
