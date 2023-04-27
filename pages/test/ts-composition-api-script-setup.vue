<template>
  <b-container class="mt-3">
    <h3>Composition API</h3>
    {{ fruit }}
  </b-container>
</template>

<script setup lang="ts">
    interface Apple {
        id: number,
        name: string,
        weight?: number
    }

    const fruit:Apple[] = [
        {
            id: '10',
            name: 'jonatan'
        },
        {
            id: 20,
            name: 'golden'
        }
    ];
</script>
