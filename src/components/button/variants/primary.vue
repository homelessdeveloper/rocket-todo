<template>
  <button class=" text-white  bg-accent  rounded-2xl focus:outline-none shadow-button-passive hover:shadow-button-active transition-shadow" 
  :class="classes"
  v-on="$listeners">
 
      <slot/>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Dictionary } from "vue-router/types/router";
import Size from "../size";



@Component
export default class extends Vue {
    @Prop({default: Size.md})
    size!: Size;

    get classes(): Dictionary<boolean> {
        return {
            'py-1.5 px-6 text-sm':this.size === Size.sm,
            'py-2 px-6 text-base':this.size === Size.md
        }
    }
}
</script>

<style>

</style>