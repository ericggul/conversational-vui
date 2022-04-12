import BreakingNewsRoutes from "@P/PoeticWeb/BreakingNews/BreakingNewsRoutes";
import TheMoreTheBetterIntro from "@/pages/PoeticWeb/TheMoreTheBetter/Intro";
import TheMoreTheBetterDetail from "@/pages/PoeticWeb/TheMoreTheBetter/Detail";

import SuggestionsIntro from "@/pages/PoeticWeb/Suggestions/Intro";
import SuggestionsDetail from "@/pages/PoeticWeb/Suggestions/Detail";

const poeticRoutes = [
  // {
  //   path: "/poetic-web-testing",
  //   component: TestingPage,
  // },
];

const theMoreTheBetterRoutes = [
  {
    path: "/the-more-the-better",
    component: TheMoreTheBetterIntro,
  },
  {
    path: "/the-more-the-better/detail",
    component: TheMoreTheBetterDetail,
  },
  {
    path: "/suggestions",
    component: SuggestionsIntro,
  },
  {
    path: "/suggestions/detail",
    component: SuggestionsDetail,
  },
];

const routes = [...poeticRoutes, ...BreakingNewsRoutes, ...theMoreTheBetterRoutes];

export default routes;
