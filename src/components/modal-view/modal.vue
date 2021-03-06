<template>
  <div> 
    <div  v-for="(modal , id) in modals"  :key="id">
        <div v-if="modal.isOpen" :is="modal.component" :id="id" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Dictionary } from "@/types/utils";
import { Modal } from "@/types/models";

import {ModalsStore} from "@/store";

@Component
export default class extends Vue {

  get modals(): Dictionary<Modal> {
    return ModalsStore.modals;
  }
}
</script>

<style>

</style>