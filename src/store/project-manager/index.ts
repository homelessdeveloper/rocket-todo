import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Dictionary, Group, Task } from "@/types/models";
import Vue from "vue";
import {v4 as uuid} from "uuid";
@Module({name:"ProjectManagement"})
export default class ProjectManagement extends VuexModule {

    _groups: Dictionary<Group> = {};
    _tasks: Dictionary<Task> = {};

    // -- GROUPS -- //

    get groups(): Dictionary<Group> {
        return this._groups;
    }

    get group(): (id: string) => Group | undefined {
        return id => this._groups[id];
    }

    
    @Mutation
    RegisterGroup(payload: {id: string ; group: Group}){
        const {id, group} = payload;
        Vue.set(this._groups , id, group);
    }

    @Mutation
    UpdateGroup(payload: {id: string; group: Group}){
        const {id, group} = payload;
        Object.assign(this._groups[id] , group );
    }

    @Mutation
    DeleteGroup(id: string){
        
        this._groups[id].tasks.forEach(task_id => {
            Vue.delete(this._tasks , task_id);
        });

        Vue.delete(this._groups, id);
    }


    @Action
    async CreateGroup(payload: Group): Promise<string> {
        const group = payload;
        const id = uuid();
        this.RegisterGroup({id,group});
        return id;
    
    }

    // -- TASKS -- //

    get tasks(): Dictionary<Task> {
        return this._tasks;
    }

    get task(): (id: string) => Task {
        return id => this._tasks[id];
    }



    @Mutation
    RegisterTask(payload: {id: string; task: Task} ){
        const {id, task} = payload;
        console.log(task.group_id);
        this._groups[task.group_id].tasks.push(id);
        Vue.set(this._tasks, id , task);
    }

    @Mutation
    UpdateTask(payload: {id: string; task: Partial<Task>} ){
        const {id, task} = payload;
        console.log(task);
        Object.assign(this._tasks[id] , task);
    }

    @Mutation
    DeleteTask(id: string){
        const group = this._groups[this._tasks[id].group_id];
        group.tasks.splice(group.tasks.indexOf(id) , 1);
        Vue.delete(this._tasks , id);
    }


    @Action
    async CreateTask(task: Task): Promise<string> {
        const id = uuid();
        this.RegisterTask({id,task})
        return id;
    }
}