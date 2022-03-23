import TestingPage from "@P/PoeticWeb/Testing";

import TheMoreTheBetterIntro from "@P/PoeticWeb/theMoreTheBetter/Intro";
import TheMoreTheBetterDetail from "@P/PoeticWeb/theMoreTheBetter/Detail";

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

const routes = [...poeticRoutes, ...theMoreTheBetterRoutes];

export default routes;
