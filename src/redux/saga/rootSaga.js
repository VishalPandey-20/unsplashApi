import mainSaga from "./indexSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga(){
    yield all([
        ...mainSaga()
    ])
}