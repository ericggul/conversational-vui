import Input from "@C/causeAndEffect/Input/Input";
import Untitled from "@C/causeAndEffect/Untitled";
import MariahilferStrasse from "@C/causeAndEffect/MariahilferStrasse";
import LikeCommentSubscribeDrawing from "@C/causeAndEffect/LikeCommentSubscribe/Drawing";

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
    path: "/like-comment-subscribe/drawing",
    component: LikeCommentSubscribeDrawing,
  },
];

const routes = [...Routes];

export default routes;
