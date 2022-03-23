import TestingPage from "@P/PoeticWeb/Testing";
import BreakingNewsRoutes from "@P/PoeticWeb/BreakingNews/BreakingNewsRoutes";
import TheMoreTheBetterIntro from "@/pages/PoeticWeb/TheMoreTheBetter/Intro";
import TheMoreTheBetterDetail from "@/pages/PoeticWeb/TheMoreTheBetter/Detail";

const poeticRoutes = [
  {
    path: "/poetic-web-testing",
    component: TestingPage,
  },
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
];

const routes = [...poeticRoutes, ...BreakingNewsRoutes, ...theMoreTheBetterRoutes];

export default routes;
