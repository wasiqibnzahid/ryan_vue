import { RouteRecordRaw } from "vue-router";
import HomeView from "../components/Home.vue";
import Layout from "../components/layout/Layout.vue";
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: HomeView,
      },
    ],
  },
];
