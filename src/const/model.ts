import { FC} from "react";

export interface IAppRoute {
  path: string;
  Component: FC;
}

export interface IActionType {
  type: string;
  payload?: any;
}