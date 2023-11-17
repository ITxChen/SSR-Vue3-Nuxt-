import type { IHomeState } from "~/store/home";
import MyRequest from "./index";
export type HomeInfo = "oppo" | "onePlus" | "intelligent";
import type { IResultData } from "./index";
export const getHomeInfo = (type: HomeInfo) => {
  return MyRequest.get<IResultData<IHomeState>>("/home/info", {
    type: type || "oppo",
  });
};
