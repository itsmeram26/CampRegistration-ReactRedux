const camperInfoDefaultState = {
    camper: {},
    camperList: []
}

export default (state = camperInfoDefaultState, action) => {
    switch (action.type) {
        case 'CREATE':
            console.log(state);
            console.log(action);
            return {
                ...state,
                camper: { ...action
                }
            }
        case 'POPULATE':
            console.log('Populate');
            console.log(state);
            console.log(action);
            return {
                ...state,
                campersList: action.campers
            }
        default:
            return state;
    }
}