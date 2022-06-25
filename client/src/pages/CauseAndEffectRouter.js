import Input from "@C/causeAndEffect/Input/Input";
import Untitled from "@/containers/causeAndEffect/Delivery";
import MariahilferStrasse from "@C/causeAndEffect/MariahilferStrasse";
import LikeCommentSubscribeDrawing from "@C/causeAndEffect/LikeCommentSubscribe/Drawing";
import Reasoning from "@/containers/causeAndEffect/Reasoning";

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
    path: "/reasoning",
    component: Reasoning,
  },
  {
    path: "/like-comment-subscribe/drawing",
    component: LikeCommentSubscribeDrawing,
  },
];

const routes = [...Routes];

export default routes;
