<template>
<div>
    <div :is="view"/>
</div>
</template>

<script lang="ts">


import VButton from "@/components/button";
import Vue from "vue";
import Component from "vue-class-component";
import {Dictionary} from "@/types/utils";

import GroupModalComponent from "./blocks/group-modal.vue";
import TaskModalComponent from "./blocks/task-modal.vue";
import {ModalsStore} from "@/store";
import {EditableModal} from "@/types/models";
import { Mode } from "@/types/constants";
import { Watch } from "vue-property-decorator";
import {Routes} from "./routes";
import { Route } from "vue-router";
import ViewsList from "./views";
import Dropdown from "@/components/dropdown";



@Component({
    components:{
        VButton,
        Dropdown,
    }
})

export default class extends Vue {
    
    modals: Dictionary<string> = {
        group_id: "",
        task_id: "",
    };

    created() {

        const group: EditableModal = {
            isOpen:false,
            component: GroupModalComponent,
            mode: Mode.View,
        }

        const task: EditableModal = {
            isOpen: false,
            component: TaskModalComponent,
            mode: Mode.View,
        }
        
        ModalsStore.CreateModal(group).then(id  => {
            this.modals.group_id = id;
        });

        ModalsStore.CreateModal(task).then(id  => {
            this.modals.task_id = id;
        });

    }




    @Watch("$route" , {immediate:true , deep:true}) 

    onRouteChange(route: Route) {
        

        if(!ViewsList[route.params.view] && Object.keys(ViewsList).length > 0) {
            this.$router.push({name:Routes.Home, params:{view:Object.keys(ViewsList)[0]}})
            return;
        }


        if(!this.modals.group_id || !this.modals.task_id) {
            return;
        }

        switch(route.name){
            case Routes.CreateGroup : {
                ModalsStore.OpenModal({
                    id:this.modals.group_id , 
                    modal:{mode: Mode.Create} as EditableModal
                });
            } break;

            case Routes.EditGroup : {
                ModalsStore.OpenModal({
                    id:this.modals.group_id , 
                    modal:{mode: Mode.Edit} as EditableModal
                });
            } break;

            case Routes.ViewGroup : {
                ModalsStore.OpenModal({
                    id:this.modals.group_id , 
                    modal:{mode: Mode.View} as EditableModal
                });
            } break;

            case Routes.CreateTask : {
                ModalsStore.OpenModal({
                    id:this.modals.task_id ,  
                    modal:{mode: Mode.Create} as EditableModal
                });
            } break;

            case Routes.EditTask : {
                ModalsStore.OpenModal({
                    id:this.modals.task_id , 
                    modal:{mode: Mode.Edit} as EditableModal
                });
            } break;

            case Routes.ViewTask : {
                ModalsStore.OpenModal({
                    id:this.modals.task_id , 
                    modal:{mode: Mode.View} as EditableModal
                });
            } break;

            default: {
                ModalsStore.CloseModal(this.modals.group_id);
                ModalsStore.CloseModal(this.modals.task_id);
            } break;
        }
    }

    beforeDestroy() {
        ModalsStore.UnregisterModal(this.modals.group_id);
        ModalsStore.UnregisterModal(this.modals.task_id);
    }
    
    get view(){
        return ViewsList[this.$route.params.view];
    }

   
}
</script>