import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/foo",
    name: "Foo",
    component: () => import(/* webpackChunkName: "foo" */ "../views/Foo.vue"),
  },
  {
    path: "/bar",
    name: "Bar",
    component: () => import(/* webpackChunkName: "bar" */ "../views/Bar.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
