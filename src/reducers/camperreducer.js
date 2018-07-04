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
            return {
                ...state,
                action
            }
        default:
            return state;
    }
}