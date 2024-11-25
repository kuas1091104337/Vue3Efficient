import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/index.vue";
import MenuEx from "../pages/menuEx.vue";
import VforEx from "../pages/vforEx.vue";
import Test1Ex from "../pages/test1Ex.vue";
// import WatchEx from "../pages/watchEx.vue";
// import WatchComputedEx from "../pages/watchComputedEx.vue";
// import ComputedEx from "../pages/computedEx.vue";
import From from "../pages/from.vue";
// import Courses from "../pages/courses/index.vue";
// import Courses_Id from "../pages/courses/[id].vue";
import Member from "../pages/member.vue";
// import MemberHome from "../pages/member/index.vue";
// import MemberLowLevel from "../pages/member/lowLevel.vue";
// import MemberMedium from "../pages/member/medium.vue";
// import MemberHigher from "../pages/member/higher.vue";
import NotFound from "../pages/notFound.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/menuEx", component: MenuEx },
    { path: "/vforEx", component: VforEx },
    { path: "/test1Ex", component: Test1Ex },
    {
      path: "/watchEx",
      component: () => import("../pages/watchEx.vue"),
    },

    {
      path: "/watchComputedEx",
      component: () => import("../pages/watchComputedEx.vue"),
    },
    {
      path: "/computedEx",
      component: () => import("../pages/computedEx.vue"),
    },
    { path: "/from", component: From },
    {
      path: "/courses",
      component: () => import("../pages/courses/index.vue"),
    },
    {
      path: "/courses/:id",
      component: () => import("../pages/courses/[id].vue"),
    },
    {
      path: "/slot",
      component: () => import("../pages/slot.vue"),
    },
    {
      name: "member",
      path: "/member",
      component: Member,
      // children: [
      //   { name: "member", path: "", component: MemberHome },
      //   { name: "lowLevel", path: "lowLevel", component: MemberLowLevel },
      //   { name: "medium", path: "medium", component: MemberMedium },
      //   { name: "higher", path: "higher", component: MemberHigher },
      // ],
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
    // { path: "/:notFound", component: NotFound },
    // { path: "/:notFound/:next1", component: NotFound },
    // { path: "/:notFound/:next1/:next2", component: NotFound },
  ],
});

export default router;
