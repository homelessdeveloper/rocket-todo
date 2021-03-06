import Openable from "@/types/interfaces/Openable";
import {VueConstructor} from "vue";
export default interface Modal extends Openable{
    component?: VueConstructor<Vue>;
}