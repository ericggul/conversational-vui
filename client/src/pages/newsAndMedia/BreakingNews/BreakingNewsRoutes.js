import { lazy } from "react";

const BreakingNews = lazy(() => import("@/containers/newsAndMedia/BreakingNews/BreakingNews"));

const BreakingNewsRoutes = [
  {
    path: "/breaking-news/:id",
    component: BreakingNews,
  },
];

export default BreakingNewsRoutes;
