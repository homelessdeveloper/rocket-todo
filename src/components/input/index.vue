<template>
  <div :is="component" v-bind="$attrs" v-on="$listeners" />
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import TextInput from "./types/text";
import Types from "./types";
@Component
export default class extends Vue{
    @Prop({default:"text"})
    type!: string

    get component(): VueConstructor<Vue> {
        return  Types[this.type] || TextInput;
    }
}
</script>
