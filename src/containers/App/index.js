import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import AppRoutes from "../../routes";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    position: relative;
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    font: normal 1em/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

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
