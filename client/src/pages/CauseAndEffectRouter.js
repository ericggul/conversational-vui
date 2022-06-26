import Input from "@C/causeAndEffect/Input";
import Reception from "@C/causeAndEffect/Reception";
import MariahilferStrasse from "@C/causeAndEffect/MariahilferStrasse";
import Reasoning from "@C/causeAndEffect/Reasoning";
import Delivery from "@C/causeAndEffect/Delivery";
import SubscriptionDrawing from "@/containers/causeAndEffect/Subscription/Drawing";
import SubscriptionSubscribe from "@/containers/causeAndEffect/Subscription/Subscribe";

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
