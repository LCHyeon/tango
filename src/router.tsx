import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import HomePage from "@/app/home/page";
import AppLayout from "./components/layout/app-layout";

const rootRoute = createRootRoute({
  component: AppLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree,
});
