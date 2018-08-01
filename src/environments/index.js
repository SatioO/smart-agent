import { head } from "../commons";

const environments = {
    development: {
        BASE_URL: "http://localhost:3000"
    },
    production: {
        BASE_URL: "http://localhost:3000"
    }
};

export default environments[process.env.REACT_APP_ENV] ||
    environments[head(Object.keys(environments))];
