const camperInfoDefaultState = {
    camper: {},
    camperList: []
}

export default (state = camperInfoDefaultState, action) => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                camper: {
                    ...action,
                    'message': 'Success',
                    'error' : ''
                }
            }
        case 'POPULATE':
            return {
                ...state,
                campersList: action.campers
            }
        default:
            return state;
    }
}