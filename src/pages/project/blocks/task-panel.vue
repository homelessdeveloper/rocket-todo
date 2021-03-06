<template>
  <div v-if="task" class="p-4 border w-full border-border rounded-3xl bg-white flex items-center">
    <v-input 
      type="checkbox" 
      :checked="task.completed" 
      @click="checkboxClick"
      class="mr-2"
    />
    <span 
      class="text-sm cursor-pointer"
      :class="{'line-through': task.completed}"
      @click="$router.push({name:routes.Home, params:{view:$route.params.view}, query:{task_id:id}})"
      @dblclick="$router.push({name:routes.ViewTask, params:{view:$route.params.view, group_id:task.group_id, task_id: id}})"
    > 
      {{task.name}}
    </span>
    <dropdown class="ml-3">
        <v-icon name="more" class="cursor-pointer"/>
        <template v-slot:hidden class="flex">
            <div class="bg-white p-3 shadow-popover-lg rounded-xl"> 
                <div class="flex items-center py-2 px-3 text-sm text-body-light hover:text-body-dark cursor-pointer whitespace-nowrap"> 
                    <router-link :to="`/${view}/groups/${task.group_id}/tasks/${id}/edit`">
                        <v-icon name="edit" class="mr-1.5" />
                        <span> Edit </span>
                    </router-link>
                </div>
                <div class="flex items-center py-2 px-3 text-body-light text-sm hover:text-body-dark cursor-pointer whitespace-nowrap"> 
                    <router-link :to="`/${view}/groups/${task.group_id}/tasks/${id}`">
                        <v-icon name="show" class="mr-1.5" />
                        <span> View </span>
                    </router-link>
                </div>
                <div class="flex items-center py-2 px-3 text-red text-sm hover:text-dark-red cursor-pointer whitespace-nowrap"> 
                    <v-icon name="delete" class="mr-1.5" />
                    <span @click="deleteTask(id)"> Delete </span>
                </div>
            </div>
        </template>
    </dropdown>
  </div>
</template>

<script lang="ts">
import VInput from "@/components/input";
import VIcon from "@/components/icon";
import { ProjectManagementStore } from "@/store";
import { Task } from "@/types/models";
import Vue from "vue";
import Component from "vue-class-component";
import Dropdown from "@/components/dropdown";
import { Prop } from "vue-property-decorator";
import { Routes } from "../routes";
@Component({
  components:{
    VInput,
    VIcon,
    Dropdown
  }
})
export default class extends Vue {
    @Prop()
    id!: string;

    get task(): Task | undefined {
       return ProjectManagementStore.task(this.id);
    }

    get routes() {
      return Routes;
    }

    get view() {
      return this.$route.params.view;
    }

    checkboxClick() {
      if(!this.task) {return}
      const task: Task = {...this.task} as Task;
      task.completed = !task.completed;
      ProjectManagementStore.UpdateTask({id:this.id,task});
    }


    deleteTask(id: string) {
      ProjectManagementStore.DeleteTask(id);
    }



}
</script>
