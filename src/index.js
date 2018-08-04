import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore, reducers } from "./store";
import { App } from "./containers";
import registerServiceWorker from "./registerServiceWorker";

import "./commons/sass/style.scss";
import "../node_modules/font-awesome/scss/font-awesome.scss";

axios.interceptors.request.use(axiosConfig => {
    if (axiosConfig.url[0] === "/") {
        axiosConfig.url = axiosConfig.url; // eslint-disable-line no-param-reassign
    }
    return axiosConfig;
});

const store = configureStore(axios, {}, reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
