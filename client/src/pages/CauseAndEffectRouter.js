import Input from "@C/causeAndEffect/Input/Input";
import Untitled from "@/containers/causeAndEffect/Delivery";
import MariahilferStrasse from "@C/causeAndEffect/MariahilferStrasse";
import LikeCommentSubscribeDrawing from "@C/causeAndEffect/LikeCommentSubscribe/Drawing";
import GiantStep from "@C/causeAndEffect/GiantStep";

const Routes = [
  {
    path: "/",
    component: Input,
  },
  {
    path: "/untitled",
    component: Untitled,
  },
  {
    path: "/mariahilferstrasse",
    component: MariahilferStrasse,
  },
  {
    path: "/giantstep",
    component: GiantStep,
  },
  {
    path: "/like-comment-subscribe/drawing",
    component: LikeCommentSubscribeDrawing,
  },
];

const routes = [...Routes];

export default routes;
