import ScreenMain from "@C/compositions/screen/ScreenMain";
import ScreenTesting from "@C/compositions/screen/ScreenTesting";

const Routes = [
  {
    path: "/screen",
    component: ScreenMain,
  },
  {
    path: "/screen-testing",
    component: ScreenTesting,
  },
];

const routes = [...Routes];

export default routes;
