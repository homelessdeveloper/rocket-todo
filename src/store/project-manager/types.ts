import { Dictionary, Group, Task } from "@/types/models";


export interface State {
    tasks: Dictionary<Task>;
    groups: Dictionary<Group>;
}