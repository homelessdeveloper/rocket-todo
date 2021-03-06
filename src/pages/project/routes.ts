import { RouteConfig } from "vue-router";
import Page from "./index.vue";


export enum Routes {
    Home="/",
    // -- views -- //
    List = "/list",
    // -- groups -- //
    CreateTask = "tasks/create",
    ViewTask = "tasks/view",
    EditTask = "tasks/update",
    // -- groups -- //
    CreateGroup = "groups/create",
    ViewGroup = "groups/view",
    EditGroup = "groups/update",

}


const routes: Array<RouteConfig> = [
    {
        name: Routes.Home,
        path:  '/:view',
        component:  Page,
    },

    {
        name: Routes.CreateTask,
        path: "/:view/groups/:group_id/tasks/create",
        component: Page,
    },
    
    {
        name: Routes.ViewTask,
        path: "/:view/groups/:group_id/tasks/:task_id",
        component: Page,
    },


    {
        name: Routes.EditTask,
        path: "/:view/groups/:group_id/tasks/:task_id/edit",
        component: Page,
    },


    {
        name: Routes.CreateGroup,
        path: "/:view/groups/create",
        component: Page,
    },

    {
        name: Routes.ViewGroup,
        path: "/:view/groups/:id",
        component: Page,
    },

    {
        name: Routes.EditGroup,
        path: "/:view/groups/:id/edit",
        component: Page,
    },
]


export default routes;