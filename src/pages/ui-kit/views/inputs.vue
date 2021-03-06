<template>
    <div>
        <div class="mb-4">
            <h2>Checkboxes</h2>
            <div class="flex flex-wrap py-2.5">
                <div class="mr-2.5"> 
                    <v-input type="checkbox" :checked="checked" @click="checked=!checked"/>
                </div>
                <div class="mr-2.5"> 
                    <v-input type="checkbox" :checked="true"/>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <h2>Text inputs </h2>
            <div class="flex flex-wrap py-2.5">
                {{check}}
                <div class="mr-2.5"> 
                    <v-input type="text" :value="check" @input="check=$event.target.value"/>
                </div>
                <div class="mr-2.5"> 
                    <v-input type="text" :checked="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VInput from "@/components/input";
export default {
    components:{VInput},
    data(){
        return {
            checked: false,
            check: "Value..."
        }
    },
    methods:{
        clickHandler() {
            window.alert("click on input");
        }
    }
}
</script>
