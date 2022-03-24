import { lazy } from "react";

const BreakingNews = lazy(() => import("@C/poeticWeb/BreakingNews/BreakingNews"));

const BreakingNewsRoutes = [
  {
    path: "/breaking-news/:id",
    component: BreakingNews,
  },
];

export default BreakingNewsRoutes;
