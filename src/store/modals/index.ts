import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Dictionary } from "@/types/utils";
import { Modal } from "@/types/models";
import {v4 as uuid} from "uuid";
import Vue from "vue";
@Module({name:"modals"})
export default class Modals extends VuexModule {

    _modals: Dictionary<Modal> = {};

    
    get modals(): Dictionary<Modal> {
        return this._modals;
    }


    get modal(): (id: string) => Modal | undefined {
        return (id: string) => (this._modals[id]);
    }


    @Mutation
    RegisterModal(payload: {id: string ; modal: Modal}){
        const {id , modal} = payload;
        Vue.set(this._modals , id , modal);
    }

    @Mutation
    UnregisterModal(id: string) {
        Vue.delete(this._modals , id);
    }

    @Mutation
    OpenModal(payload: string | {id: string; modal: Partial<Modal>}) {
        if(typeof payload  === "object") {
            const {id,modal} = payload;
            Object.assign(this._modals[id] , modal, {isOpen:true})
        }

        if(typeof payload  === "string"){
            this._modals[payload].isOpen = true;
        }
        

    }

    @Mutation
    CloseModal(id: string) {
        this._modals[id].isOpen = false;
    }

    @Mutation
    UpdateModal(payload: {id: string ; modal: Partial<Modal>}){
        const {id,modal} = payload;
        Object.assign(this._modals[id] , modal);
    }


    @Action
    async CreateModal(modal: Modal): Promise<string>{   
        const id = uuid();
        this.RegisterModal({id,modal});
        return id;
    }








}