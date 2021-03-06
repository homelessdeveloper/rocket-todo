import { VueConstructor } from "vue/types/umd";
import ListView from "./list.vue";



const ViewsList: {[key: string]: VueConstructor<Vue>} = {
    "list": ListView,
}



export default ViewsList;