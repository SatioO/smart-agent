import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { configureStore, reducers } from "./store";
import registerServiceWorker from "./registerServiceWorker";

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
            <AppRoutes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
