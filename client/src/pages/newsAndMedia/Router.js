import BreakingNewsRoutes from "@/pages/newsAndMedia/BreakingNews/BreakingNewsRoutes";

import SuggestionsIntro from "@/pages/newsAndMedia/Suggestions/Intro";
import SuggestionsDetail from "@/pages/newsAndMedia/Suggestions/Detail";

const poeticRoutes = [
  // {
  //   path: "/poetic-web-testing",
  //   component: TestingPage,
  // },
];

const theMoreTheBetterRoutes = [
  {
    path: "/recommendations",
    component: SuggestionsIntro,
  },
  {
    path: "/recommendations/detail",
    component: SuggestionsDetail,
  },
];

const routes = [...poeticRoutes, ...BreakingNewsRoutes, ...theMoreTheBetterRoutes];

export default routes;
