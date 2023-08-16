const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoyaltyCard.vue") },
      { path: "/help", component: () => import("pages/Help.vue") },
      {
        path: "/createloyaltycard",
        component: () => import("pages/CreateLoyaltyCard.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
