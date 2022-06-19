import ScreenMain from "@C/compositions/screen/ScreenMain";
import Underground from "@C/compositions/screen/underground/Underground";
import ScreenTesting from "@/containers/compositions/screen/screenTesting/ScreenTesting1";

const Routes = [
  {
    path: "/underground",
    component: Underground,
  },
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
