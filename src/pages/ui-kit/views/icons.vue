<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-wrap">
            <div 
                class="w-24 h-24 flex flex-col items-center justify-center"
                v-for="icon in list" 
                :key="icon"
            >
                <v-icon :name="icon" tag="span"/>
                <span class="mt-2.5 text-xs">{{icon}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import VIcon , {IconsList} from "@/components/icon";
import Vue from "vue";
import Component from "vue-class-component";
import { Dictionary } from "vue-router/types/router";

@Component({
    components:{VIcon},
})
export default class extends Vue {
    get list(): Array<string> {
        const list: Array<string> = Object.keys(IconsList).map(name => name);
        return list;
    }
}
</script>

<style>

</style>