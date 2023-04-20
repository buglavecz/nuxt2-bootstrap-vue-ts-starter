<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <div class="test-class mb-3">Lorem ipsum 1</div>
    <div :class="$style.text">Lorem ipsum 2</div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>

<style lang="scss" module>
.text {
  color: black;
  background-color: $pink;
}

</style>
