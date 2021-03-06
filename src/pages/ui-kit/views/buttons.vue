<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-wrap">
            <v-button>Button (default primary) </v-button>
            <v-button variant="primary">Primary button</v-button>
            <v-button variant="icon-button" icon="alert">Icon button</v-button>
        </div>
    </div>
</template>

<script lang="ts">
import VButton from "@/components/button";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    components:{
        VButton,
    },
})
export default class extends Vue {
    
}
</script>

<style>

</style>