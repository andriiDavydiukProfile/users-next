import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import { createLogger } from 'redux-logger';

const initalState = {};


const logger = createLogger({ diff: false });
const middleWares = process.env.NODE_ENV !== 'development'
    ? applyMiddleware(...[thunk])
    : applyMiddleware(...[thunk, logger]);
export const store = createStore(
    rootReducer,
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

export const wrapper = createWrapper(makeStore);