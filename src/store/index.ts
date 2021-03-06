import Vue from 'vue'
import Vuex from 'vuex'
import {v4 as uuid} from "uuid";
import {getModule} from "vuex-module-decorators";
import VuexPersistence from "vuex-persist";
import {State as ProjectManagementState} from "./project-manager/types";

Vue.use(Vuex);

import modal from "./modals";
import management from "./project-manager";



const vuexLocal = new VuexPersistence<ProjectManagementState>({
  storage: window.localStorage
})


const store =  new Vuex.Store({
  modules: {
    modal,
    management
  },
  plugins:[vuexLocal.plugin]
})





const ModalsStore = getModule(modal,store);
const ProjectManagementStore = getModule(management, store);

export {
  ModalsStore,
  ProjectManagementStore,
}

export default store;