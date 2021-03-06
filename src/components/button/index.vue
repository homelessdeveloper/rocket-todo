<template>
  <div :is="variant" v-on="$listeners" v-bind="$attrs">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Primary from "./variants/primary.vue";
import IconButton from "./variants/icon-button.vue";

@Component({components:{
    Primary,
    IconButton,
}})
export default class extends Vue {
    @Prop({default: "primary" })
    variant!: string
}
</script>
