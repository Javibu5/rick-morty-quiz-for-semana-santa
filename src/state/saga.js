import createSagaMiddleware from "redux-saga";
import { getCharacter } from "rickmortyapi";
import { fork, takeEvery, call, put } from "redux-saga/effects";
import { FETCH_CHARACTER, fetchCharacterSuccess } from "../actions";

export const sagaMiddleware = createSagaMiddleware();

function getRandome(max) {
  return Math.floor(Math.random() * max);
}

function* fetchCharacterProcess() {
  const { results } = yield call(getCharacter, { page: getRandome(6) });
  yield put(fetchCharacterSuccess(results[getRandome(results.length - 1)]));
}

function* takeFetchCharacter() {
  yield takeEvery(FETCH_CHARACTER, fetchCharacterProcess);
}

export function* saga() {
  yield fork(takeFetchCharacter);
}
