import MyRequest from "./index";
import type { IResultData } from "./index";
export type IDetailProductType = "oppo" | "air" | "watch" | "tablet";
export interface IDetailInfo {
  id?: string;
  title?: string;
  productDetailss?: any[];
}
export const getDetails = (type: IDetailProductType) => {
  return MyRequest.get<IResultData<IDetailInfo[]>>("/oppoDetail", { type });
};
