<template>
  <div :is="tag" :class="classname" v-on="$listeners" v-bind:attrs="$attrs"/>
</template>

<script>
import list from "./icons-list";
export default {
    props:{
        name: {
            type:String,
            required: true,
            default: '',
        },
        tag: {
            type:String,
            required:false,
            default:'span',
        },
    },

    computed:{
        classname(){
            return list[this.name] || list[Object.keys(list)[0]];
        },
    }
}
</script>