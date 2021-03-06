<template>
  <v-button>
      <v-icon 
        class="mr-2" 
        :name="icon"
        :tag="tag"
      />
     
      <slot/>
  </v-button>
</template>

<script lang="ts">
import Vue from "vue";
import VButton from './primary.vue'
import VIcon from '@/components/icon';
import { Component, Prop } from "vue-property-decorator";
@Component({
    components:{
        VButton,
        VIcon
    }
})
export default class extends Vue {
    @Prop({required:true})
    icon!: string;

    @Prop({default:"i"})
    tag!: string;

}
</script>

<style>

</style>