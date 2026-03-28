import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import AppLayout from "@/components/layout/app-layout";
import HomePage from "@/app/home/page";
import WordPage from "@/app/word/page";
import WordUnitPage from "./app/word/[level]/[unit]/page";
import WordLevelPage from "@/app/word/[level]/page";
import { ROUTES } from "./constants/route";

const rootRoute = createRootRoute({
  component: AppLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.Home,
  component: HomePage,
});

const wordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.Word,
  component: WordPage,
});

const wordLevelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.WordLevel,
  component: WordLevelPage,
});

const wordUnitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.WordUnit,
  component: WordUnitPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  wordRoute,
  wordLevelRoute,
  wordUnitRoute,
]);

export const router = createRouter({
  routeTree,
});
