import Detail from "../views/Detail";
import Home from "../views/Home";
import { IAppRoute } from "./model";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = process.env.REACT_APP_BASE_URL;


export const routes:Array<IAppRoute> = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: 'detail/:id',
    Component: Detail,
  }
]