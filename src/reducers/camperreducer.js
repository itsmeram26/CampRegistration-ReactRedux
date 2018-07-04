const camperInfoDefaultState = {
    cname:'',
    gender:'',
    address:'',
    city:'',
    state:'',
    zipcode:'',
    error:''
}

export default (state = camperInfoDefaultState, action) => {
    switch(action.type) {
        case 'CREATE':
            console.log(state);
            console.log(action);
            return {
                ...state,
                camper: {...action}
            }
        default:
            return state;
    }
}