import IntroPage from "@P/PoeticWeb/Intro";
import DetailPage from "@P/PoeticWeb/Detail";
import TheMoreTheBetterIntro from "@P/PoeticWeb/theMoreTheBetter/Intro";
import TheMoreTheBetterDetail from "@P/PoeticWeb/theMoreTheBetter/Detail";

const poeticRoutes = [
  {
    path: "/poetic-web",
    component: IntroPage,
  },
  {
    path: "/poetic-web/detail",
    component: DetailPage,
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
