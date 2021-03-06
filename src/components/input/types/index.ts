import Vue from "vue";
import { VueConstructor } from "vue/types/umd";
import Checkbox from "./checkbox";
import Text from "./text";

const Types = {
    "checkbox": Checkbox,
    "text": Text,
} as {[key: string]: VueConstructor<Vue>};


export default Types;