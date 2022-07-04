import { IActionType } from "../../const/model";
import { GET_RANDOM_GIF, GET_GIFS, GET_GIF_DETAIL } from "../constants";

export const getRandomGif = (): IActionType => ({
  type: GET_RANDOM_GIF,
});

export const getGifs = (term: string): IActionType => ({
  type: GET_GIFS,
  payload: term,
});

export const getGifDetail = (id: any): IActionType => ({
  type: GET_GIF_DETAIL,
  payload: id,
});
