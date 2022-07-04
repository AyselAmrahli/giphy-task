import { put, takeLatest, all, call } from 'redux-saga/effects';
import Axios from '../service/axios';

import { 
  GET_RANDOM_GIF,
  RECEIVE_RANDOM_GIF,
  GET_GIFS,
  RECEIVE_GIFS, 
  GET_GIF_DETAIL,
  RECEIVE_GIF_DETAIL, 
} from '../constants';


// get random gif
export function* fetchRandomGif() {
  try {
    const { data } = yield call(Axios.get, "/gifs/random");
    yield put({ type: RECEIVE_RANDOM_GIF, payload: { gif: data.data } });
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchRandomGif() {
  yield takeLatest(GET_RANDOM_GIF, fetchRandomGif);
}

// get gifs
export function* fetchGifs({ payload: term }: any) {
  try {
    const { data } = yield call(Axios.get, "/gifs/search", {
      params: { q: term },
    });

    yield put({ type: RECEIVE_GIFS, payload: { gifs: data.data } });
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchGifs() {
  yield takeLatest(GET_GIFS, fetchGifs);
}

// get gif detail
export function* fetchGifDetail({ payload: id }: any) {
  try {
    const { data } = yield call(Axios.get, `/gifs/${id}`);
    yield put({ type: RECEIVE_GIF_DETAIL, payload: { gif: data.data } });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchGifDetail() {
  yield takeLatest(GET_GIF_DETAIL, fetchGifDetail);
}

export default function* rootSaga() {
  yield all([watchFetchRandomGif(), watchFetchGifs(), watchFetchGifDetail()]);
}