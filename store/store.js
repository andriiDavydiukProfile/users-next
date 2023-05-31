import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import { createLogger } from 'redux-logger';
import rootReducer from "@/store/reducers";

const initalState = {};


const logger = createLogger({ diff: false });
const middleWares = process.env.NODE_ENV !== 'development'
    ? applyMiddleware(...[thunk])
    : applyMiddleware(...[thunk, logger]);

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export const store = createStore(
    reducer,
    initalState,
    middleWares
);

if (module.hot) {
    module.hot.accept(() => {
        /* eslint-disable global-require */
        const nextRootReducer = require('./reducers').default;
        /* eslint-enable global-require */
        store.replaceReducer(nextRootReducer);
    });
}

if (typeof window !== 'undefined') {
    window.store = store;
}

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: true });