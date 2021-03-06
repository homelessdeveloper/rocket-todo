<template>
    <div v-if="task">
        <div class="mb-4">
            <v-button variant="icon-button" icon="check" size="sm"> Complete </v-button>
        </div>
        <div class="mb-4">
            <h5 class="font-semibold text-lg text-heading">{{task.name}}</h5>
        </div>
        <div class="mb-4">
            <div  class="flex flex-col">
                <span class="text-xs uppercase font-medium mb-1">Group description</span>
                <p class="text-heading">{{task.description}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import VButton from "@/components/button";
import { ProjectManagementStore } from "@/store";
import { Task } from "@/types/models";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
    components:{
        VButton,
    }
})
export default class extends Vue {
    @Prop({required:true})
    id!: string;
    get task(): Task | undefined {
        return ProjectManagementStore.task(this.id)
    }
}
</script>
