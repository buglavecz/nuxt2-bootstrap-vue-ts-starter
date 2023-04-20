<!-- Please remove this file from your project -->
<template>
  <div class="container text-left">
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>

    <div class="mt-4" v-for="data in result">
      <pre>
        {{ data }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
interface Product {
    id: Number,
    name: String
};

export default {
  name: "TsTest",
    data() {
        return {
            result: []
        }
    },
    mounted() {
      const apiResult:Product[] = [
          {
              id: 123,
              name: 'alma'
          },
          {
              id: 234,
              name: 'körte'
          }
      ];
      this.result = apiResult;
    }
}
</script>

<style lang="scss" module>
.text {
  color: black;
  background-color: $pink;
}

</style>
