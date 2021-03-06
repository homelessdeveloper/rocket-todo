<template>
    <div  class="fixed inset-0">
        <div class="absolute inset-0 bg-black opacity-50 z-0" @click="close"></div>
        <div class="absolute w-1/3  bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl">
            <header class="w-full flex items-center justify-between mb-6"> 
                <div>
                    <v-button v-if="isEditing" size="sm" @click="save"> Save </v-button>
                    <h5 v-else class="font-semibold text-lg text-heading">{{task.name}}</h5>
                </div>
                <div>
                    <button 
                        v-if="!isEditing" 
                        @click="edit"
                        class="text-lg mr-2.5 cursor-pointer hover:opacity-100 opacity-75 focus:outline-none"
                    >
                        <v-icon name="edit" />
                    </button>
                    <button @click="close" class="bg-bg w-8 h-8  text-heading rounded-md focus:outline-none hover:bg-red hover:text-white"> 
                        <v-icon name="cross" />
                    </button>
                </div>
            </header>
            <div class="mb-8 w-full">
                <div v-if="isEditing" class="flex flex-col">
                    <span class="text-xs uppercase font-medium mb-1 text-body-light">Task name</span>
                    <input v-model="task.name" class="font-semibold text-lg text-heading focus:outline-none"/>
                </div>
            </div>
            <div class="w-full">
                <div v-if="isEditing" class="flex flex-col">
                    <span class="text-xs uppercase text-body-light font-medium mb-1">Task description</span>
                    <textarea 
                        class="focus:outline-none text-heading"
                        v-model="task.description"
                    />
                </div>
                <div v-else class="flex flex-col">
                    <span class="text-xs uppercase font-medium mb-1">Group description</span>
                    <p class="text-heading">{{task.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {ModalsStore, ProjectManagementStore} from "@/store";
import { Prop } from "vue-property-decorator";
import {EditableModal, Task} from "@/types/models";
import { Mode } from "@/types/constants";
import VButton from "@/components/button";
import {Routes} from "../routes";
import VIcon from "@/components/icon";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";
@Component({
    components:{
        VButton,
        VIcon,
    }
})
export default class extends Vue
{

    @Prop()
    id!: string;

    _task: Task | null = null;

    get task(): Task {
        if(!this._task) {
            const task_id = this.$route.params.task_id;
            const group_id = this.$route.params.group_id;
            return {...ProjectManagementStore.task(task_id) || {
                name: "Task name",
                description: "",
                completed: false,
                group_id: group_id,
            }}
        }

        return this._task;
    }

    set task(value)  {
        this._task = value;
    }

    get modal(): EditableModal {
        return ModalsStore.modal(this.id) as EditableModal;
    }

    get isEditing(): boolean {
        return this.modal.mode === Mode.Edit || this.modal.mode === Mode.Create;
    }


    get mode() {
        return this.modal.mode;
    }


    close(){
        const router = this.$router;
        router.push({name:Routes.Home});
    }



    edit() {
        if(this.$route.name === Routes.ViewTask) {
            this.$router.push({
                name:Routes.EditTask , 
                params: this.$route.params,
            });
        }
    }

    save() {
        switch(this.$route.name) {
            case Routes.CreateTask: {
                ProjectManagementStore.CreateTask(this.task).then(()=>{
                    this.$router.push({name:Routes.Home});
                });

            } break;

            case Routes.EditTask: {
                const id = this.$route.params.task_id;
                const task = this.task;
                console.log(task);
                ProjectManagementStore.UpdateTask({id,task});
                this.$router.push({name:Routes.ViewTask, params:{group_id:this.$route.params.groupd_id , task_id: this.$route.params.task_id}});
            } break;
        }

        this._task = null;
    }

}
</script>