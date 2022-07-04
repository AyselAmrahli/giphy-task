import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { API_KEY, BASE_URL } from '../../const/constant';
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
    const { data } = yield call(axios.get, `${BASE_URL}/gifs/random`, {
      params: {api_key: API_KEY}
    })
    yield put({ type: RECEIVE_RANDOM_GIF, payload: { gif: data.data } })
  } catch (e) {
    console.log(e)
  }
}

function* watchFetchRandomGif() {
  yield takeLatest(GET_RANDOM_GIF, fetchRandomGif)
}


// get gifs
export function* fetchGifs({payload: term}: any) {
  try {
    const { data } = yield call(axios.get, `${BASE_URL}/gifs/search`, {
      params: {api_key: API_KEY, q: term}
    } )
    yield put({ type: RECEIVE_GIFS, payload: { gifs: data.data } })
  } catch (e) {
    console.log(e)
  }
}

function* watchFetchGifs() {
  yield takeLatest(GET_GIFS, fetchGifs)
}


// get gif detail
export function* fetchGifDetail({payload: id}: any) {
  try {
    const { data } = yield call(axios.get, `${BASE_URL}/gifs/${id}`, {
      params: {api_key: API_KEY}
    })
    yield put({ type: RECEIVE_GIF_DETAIL, payload: { gif: data.data } })
  } catch (e) {
    console.log(e)
  }
}

function* watchFetchGifDetail() {
     yield takeLatest(GET_GIF_DETAIL, fetchGifDetail)
}


export default function* rootSaga() {
   yield all([
    watchFetchRandomGif(),
    watchFetchGifs(),
    watchFetchGifDetail(),
   ]);
}