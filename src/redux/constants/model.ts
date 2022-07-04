import { EContentRating } from "../../const/enum";

export interface RootState {
  GifReducer: IGifReducer
}

interface IGifReducer {
  randomGif: IGif,
  gifs: IGif[],
  gifDetail: IGif
}

interface IGif {
  id: string;
  bitly_url: string;
  images: any;
  is_sticker: number | boolean;
  rating: EContentRating;
  slug: string;
  title: string;
  type: string;
  url: string;
  username: "animalkingdom"
}