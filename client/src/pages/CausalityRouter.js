import Input from "@/containers/causality/Input";
import Reception from "@/containers/causality/Reception";
import MariahilferStrasse from "@/containers/causality/MariahilferStrasse";
import Reasoning from "@/containers/causality/Reasoning";
import Delivery from "@/containers/causality/Delivery";
import SubscriptionDrawing from "@/containers/causality/Subscription/Drawing";
import SubscriptionSubscribe from "@/containers/causality/Subscription/Subscribe";

const Routes = [
  {
    path: "/",
    component: Input,
  },
  {
    path: "/reception",
    component: Reception,
  },
  {
    path: "/delivery",
    component: Delivery,
  },
  {
    path: "/mariahilferstrasse",
    component: MariahilferStrasse,
  },
  {
    path: "/reasoning",
    component: Reasoning,
  },
  {
    path: "/subscription/drawing",
    component: SubscriptionDrawing,
  },
  {
    path: "/subscription/subscribe",
    component: SubscriptionSubscribe,
  },
];

const routes = [...Routes];

export default routes;
