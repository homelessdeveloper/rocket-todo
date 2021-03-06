<template>
  <div class="relative" @click.stop>
    <div @click="active = !active"> 
        <slot/>
    </div>
    <div v-if="active" class="absolute"> 
        <slot name="hidden" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class extends Vue {
    active = false;

    mounted() {
        window.addEventListener("click" , this.outsideClick);
    }

    beforeUnmount() {
        window.removeEventListener("click" , this.outsideClick)   ;
    }


    outsideClick(){
            this.active = false;
        
    }
}
</script>
