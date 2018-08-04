import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import AppRoutes from "routes";

export default class App extends Component {
    state = {
        mode: "light",
        size: "normal"
    };

    render() {
        return (
            <ThemeProvider
                theme={{ mode: this.state.mode, size: this.state.size }}
            >
                <AppRoutes />
            </ThemeProvider>
        );
    }
}
