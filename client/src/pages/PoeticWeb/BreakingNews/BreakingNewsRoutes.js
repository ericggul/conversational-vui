import { lazy } from "react";

const BreakingNews0 = lazy(() => import("@C/poeticWeb/BreakingNews/BreakingNews0"));
const BreakingNews1 = lazy(() => import("@C/poeticWeb/BreakingNews/BreakingNews1"));
const BreakingNews2 = lazy(() => import("@/containers/poeticWeb/BreakingNews/BreakingNews2"));
const BreakingNews3 = lazy(() => import("@/containers/poeticWeb/BreakingNews/BreakingNews3"));
const BreakingNewsTesting = lazy(() => import("@C/poeticWeb/BreakingNews/BreakingNewsTesting"));

const BreakingNewsRoutes = [
  {
    path: "/breaking-news-0",
    component: BreakingNews0,
  },
  {
    path: "/breaking-news-1",
    component: BreakingNews1,
  },
  {
    path: "/breaking-news-2",
    component: BreakingNews2,
  },
  {
    path: "/breaking-news-3",
    component: BreakingNews3,
  },
  {
    path: "/breaking-news/:id",
    component: BreakingNewsTesting,
  },
];

export default BreakingNewsRoutes;
