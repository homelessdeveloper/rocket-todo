<template>
    <div class="flex">
        <main 
            class="h-full"         
            :class="{
                'w-8/12': $route.query.task_id,
                'w-full': !$route.query.task_id,
            }"
        >
            <header class="px-3.5 py-4 flex items-center justify-between border border-border">
                <span class="text-lg font-medium">To-Do app</span>
                <router-link :to="{name:routes.CreateGroup}">
                    <v-button>Add new list</v-button>
                </router-link>
            </header>
            <section class="p-6">
                <div 
                    class="mb-12"
                    v-for="(group , group_id) in groups" 
                    :key="group_id"
                >
                    <header class="flex items-center">
                            <h5 class="text-lg font-medium mr-1.5">
                                <router-link :to="{name:routes.ViewGroup, params:{view:route.params.view, id:group_id}}">
                                 {{group.name}}
                                </router-link>
                            </h5>
                            <span class="text-sm text-body-light">({{group.tasks.length}})</span>
                            <dropdown class="ml-3">
                                <v-icon name="more" class="cursor-pointer"/>
                                <template v-slot:hidden class="flex">
                                    <div class="bg-white p-3 shadow-popover-lg rounded-xl"> 
                                        <div class="flex items-center py-2 px-3 text-sm text-body-light hover:text-body-dark cursor-pointer whitespace-nowrap"> 
                                            <router-link :to="`/${view}/groups/${group_id}/edit`">
                                                <v-icon name="edit" class="mr-1.5" />
                                                <span> Edit </span>
                                            </router-link>
                                        </div>
                                        <div class="flex items-center py-2 px-3 text-body-light text-sm hover:text-body-dark cursor-pointer whitespace-nowrap"> 
                                            <router-link :to="`/${view}/groups/${group_id}`">
                                                <v-icon name="show" class="mr-1.5" />
                                                <span> View </span>
                                            </router-link>
                                        </div>
                                        <div class="flex items-center py-2 px-3 text-red text-sm hover:text-dark-red cursor-pointer whitespace-nowrap"> 
                                            <v-icon name="delete" class="mr-1.5" />
                                            <span @click="deleteGroup(group_id)"> Delete </span>
                                        </div>
                                    </div>
                                </template>
                            </dropdown>
                    </header>
                    <ul class="w-full">
                        <li v-for="task_id in group.tasks" class="my-2 w-full" :key="task_id"> 
                            <task-panel :id="task_id" />
                        </li>
                    </ul>
                    <router-link :to="{name:routes.CreateTask , params:{group_id, view:route.params.view}}">
                        <v-button class="mt-4">
                            Add new task
                        </v-button>
                    </router-link>
                </div>
            </section>
        </main>
        <aside 
            v-if="$route.query.task_id" 
            class="w-4/12 border h-screen border-border p-4"
            >
            <list-drawer :id="$route.query.task_id"/>
        </aside>
    </div>
</template>

<script lang="ts">
import  TaskPanel from "../blocks/task-panel.vue";
import Vue from "vue";
import Component from "vue-class-component";
import VButton from "@/components/button";
import { Dictionary, Group } from "@/types/models";
import {ProjectManagementStore} from "@/store";
import { Routes } from "../routes";
import ListDrawer from "../blocks/list-drawer.vue";
import Dropdown from "@/components/dropdown";
import VIcon from "@/components/icon";
@Component({
    components:{
        TaskPanel,
        VButton,
        ListDrawer,
        Dropdown,
        VIcon
    }
})
export default class extends Vue {
    get groups(): Dictionary<Group> {
        return ProjectManagementStore.groups;
    }

    get view(): string {
        return this.$route.params.view;
    }

    get routes() {
        return Routes;
    }

    get route() {
        return this.$route;
    }



    deleteGroup(id: string) {
        ProjectManagementStore.DeleteGroup(id);
    }
}

</script>

<style>

</style>