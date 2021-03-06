<template>  
      <div class="w-4 h-4 bg-white relative  border-2 border-border rounded-full cursor-pointer"  
        @click="$emit('click' , $event)"
        :class="{'border border-accent ':checked, 'border-border': !checked}">
            <v-icon 
                v-if="checked" 
                class="text-accent absolute" 
                name="check" 
                tag="i"
            />
      </div>
</template>

<script lang="ts">
import VIcon from '@/components/icon';
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
@Component({
    components:{
        VIcon,
    }
})
export default class extends Vue {
    @Prop({default:false})
    checked!: boolean;
}   
</script>

<style>

</style>