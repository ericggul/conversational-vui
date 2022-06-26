import Input from "@C/causeAndEffect/Input";
import Reception from "@C/causeAndEffect/Reception";
import MariahilferStrasse from "@C/causeAndEffect/MariahilferStrasse";
import Reasoning from "@C/causeAndEffect/Reasoning";
import Delivery from "@C/causeAndEffect/Delivery";
import LikeCommentSubscribeDrawing from "@C/causeAndEffect/LikeCommentSubscribe/Drawing";
import LikeCommentSubscribePrint from "@C/causeAndEffect/LikeCommentSubscribe/Print";

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
    path: "/like-comment-subscribe/drawing",
    component: LikeCommentSubscribeDrawing,
  },
  {
    path: "/like-comment-subscribe/print",
    component: LikeCommentSubscribePrint,
  },
];

const routes = [...Routes];

export default routes;
