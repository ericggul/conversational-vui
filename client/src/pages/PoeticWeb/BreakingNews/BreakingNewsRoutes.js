import { lazy } from "react";

const BreakingNews1 = lazy(() => import("@C/poeticWeb/BreakingNews/BreakingNews1"));

const BreakingNewsRoutes = [
  {
    path: "/breaking-news-1",
    component: BreakingNews1,
  },
];

export default BreakingNewsRoutes;
