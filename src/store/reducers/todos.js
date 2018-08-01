const INITIAL_STATE = {
    Loading: false,
    Loaded: false,
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};
