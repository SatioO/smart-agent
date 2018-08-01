import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { injectClient } from "../middlewares";

export const configureStore = (client, preloadedState, reducers) => {
    const finalCreateStore = compose(
        applyMiddleware(injectClient(client), thunk),
        typeof window !== "undefined" && window.devToolsExtension
            ? window.devToolsExtension()
            : f => f
    )(createStore);
    return finalCreateStore(reducers, preloadedState);
};
