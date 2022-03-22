import IntroPage from "@P/PoeticWeb/Intro";
import DetailPage from "@P/PoeticWeb/Detail";

const poeticRoutes = [
  {
    path: "/",
    component: IntroPage,
  },
  {
    path: "/detail",
    component: DetailPage,
  },
];

export default poeticRoutes;
