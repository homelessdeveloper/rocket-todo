<template>
    <div v-if="task" class="p-4 border w-full border-border rounded-3xl bg-white flex items-center">
    <v-input 
      type="checkbox" 
      :checked="checked"
      @click="checkboxClick"
      class="mr-2"
    />
    <slot/>
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import Vue from "vue";

export default class extends Vue  {
    @Prop({default:false})
    checked!: boolean
}
</script>