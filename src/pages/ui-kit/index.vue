<template>
  <div class="p-6"> 
      <div class="mb-12">
          <h2 class="text-3xl font-medium">Icons</h2>
          <icons-view/>
      </div>
      <div class="mb-12">
          <h2 class="text-3xl font-medium">Buttons</h2>
          <buttons-view/>
      </div>
      <div class="mb-12">
          <h2 class="text-3xl font-medium">Inputs</h2>
          <inputs-view/>
      </div>
  </div>
</template>

<script lang="ts">
import IconsView from "./views/icons.vue";
import ButtonsView from "./views/buttons.vue";
import InputsView from "./views/inputs.vue";
export default {
  components:{IconsView , ButtonsView , InputsView},
}
</script>

<style>

</style>