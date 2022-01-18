import { takeEvery, put, select } from 'redux-saga/effects'
import { fetchData, searchApi } from "../../api";
import { getDataFromApi, getDataFromSearchApi } from "../actions/action";
import {stopLoader} from '../../lib/global'
function* apiData() {
    const increment_number = yield select((state) => state.reducerFunData.number);
    const input = yield select((state) => state.reducerFunData.inputSearch);
    const data = yield fetchData(increment_number);
    yield put(getDataFromApi(data));
}

function* searchApiData() {
    const input = yield select((state) => state.reducerFunData.inputSearch)
    // console.log("input>>>", input);
    const increment_number = yield select((state) => state.reducerFunData.number);
    const data = yield searchApi(increment_number, input);
    yield put(getDataFromSearchApi(data));
    yield put(getDataFromApi(data));
}
function* mainSaga() {
    return [
        yield takeEvery('api_call', apiData),
        yield takeEvery('search_api_call', searchApiData)
    ]
}

export default mainSaga;