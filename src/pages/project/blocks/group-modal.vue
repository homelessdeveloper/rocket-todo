<template>
    <div  class="fixed inset-0">
        <div class="absolute inset-0 bg-black opacity-50 z-0" @click="close"></div>
        <div class="absolute w-1/3  bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl">
            <header class="w-full flex items-center justify-between mb-6"> 
                <div>
                    <v-button v-if="isEditing" size="sm" @click="save"> Save </v-button>
                    <h5 v-else class="font-semibold text-lg text-heading">{{group.name}}</h5>
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
                    <span class="text-xs uppercase font-medium mb-1 text-body-light">Group name</span>
                    <input v-model="group.name" class="font-semibold text-lg text-heading focus:outline-none"/>
                </div>
            </div>
            <div class="w-full">
                <div v-if="isEditing" class="flex flex-col">
                    <span class="text-xs uppercase text-body-light font-medium mb-1">Group description</span>
                    <textarea 
                        class="focus:outline-none text-heading"
                        v-model="group.description"
                    />
                </div>
                <div v-else class="flex flex-col">
                    <span class="text-xs uppercase font-medium mb-1">Group description</span>
                    <p class="text-heading">{{group.description}}</p>
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
import {EditableModal} from "@/types/models";
import { Mode } from "@/types/constants";
import { Group } from "@/types/models";
import VButton from "@/components/button";
import {Routes} from "../routes";
import VIcon from "@/components/icon";

@Component({
    components:{
        VButton,
        VIcon,
    }
})
export default class extends Vue
{
    _group!: Group | null;

    @Prop()
    id!: string;

    

    get group(): Group {

        if(!this._group) {
            this._group = {...ProjectManagementStore.group(this.$route.params.id) || {
                name: "Group name",
                "description" : "",
                tasks: [],
            } as Group};
        }

        return this._group;

    }


    set group(value) {
        this._group = value;
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
        ModalsStore.CloseModal(this.id);
        const route = this.$route;
        const router = this.$router;
        router.push({name:Routes.Home , params:route.params});
    }


    edit() {
        if(this.$route.name === Routes.ViewGroup) {
            this.$router.push({
                name:Routes.EditGroup , 
                params: this.$route.params,
            });
        }
    }


    save() {
        const router = this.$router;
        const route = this.$route;

        switch(this.mode) {
            case Mode.Create: 
                ProjectManagementStore.CreateGroup({...this.group}).then( () =>{
                    router.push({name:Routes.Home, params:route.params});
                });

            break;

            case Mode.Edit: {
                const id = this.$route.params.id;
                ProjectManagementStore.UpdateGroup({
                    id,
                    group: {...this.group},
                });

                router.push({name:Routes.ViewGroup, params:{view:route.params.view, id:id}});
            } break;
        }


        this._group = null;
        
    }

    



}
</script>