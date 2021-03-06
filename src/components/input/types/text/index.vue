<template>
  <div :is="variant" v-bind="$attrs" v-on="$listeners"/>
</template>

<script lang="ts">
import Default from "./variants/default.vue";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";


@Component({
    components:{
        Default,
    }
})

export default class extends Vue {
    @Prop({default:"default"})
    variant!: string;

    mounted() {
        console.log(this.$listeners);
    }
}

</script>

<style>

</style>