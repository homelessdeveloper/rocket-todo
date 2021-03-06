<template>
  <div id="app">
    <router-view/>
    <modal-view />
  </div>
</template>

<script>
import ModalView from "@/components/modal-view";

export default {
  components:{
    ModalView,
  }
}
</script>
