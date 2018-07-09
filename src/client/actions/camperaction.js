import xhr from '../utils/xhr'

const camperInfoAction = (camperInfo) => {
    return (dispatch)=> {
       xhr.post('camper',JSON.stringify({ 'camper' : camperInfo})).
       then(
            (response)=>{
                dispatch({
                    type: 'CREATE',
                    camperInfo
                });
            } 
        ).catch((error)=>{
            console.log('Error');
        });
    }
}

export default camperInfoAction;

export const populate = function() {
    return (dispatch)=> {
        xhr.get('campers').then((response)=> { 
            let campers = response.data.camper;
            console.log(`CamperInfoAction ${campers}`)
            dispatch({
                type: 'POPULATE',
                campers
            });
        });
    }    
}



//export default { camperInfoAction, populate }

