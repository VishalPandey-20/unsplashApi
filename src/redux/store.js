import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";
// import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
}
store.runSagaTask()
export default store;