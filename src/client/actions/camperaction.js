import xhr from '../utils/xhr'


/* JSON.stringify({
        method: 'POST',
        data : { 'camper' : camperInfo},
        headers: {
         'Content-Type': 'application/json'
       }})*/
const camperInfo = (camperInfo) => {
    console.log(camperInfo);
    return (dispatch)=> {
       xhr.post('camper',JSON.stringify({ 'camper' : camperInfo})).
       then(
            (response)=>{
                console.log('RESP :: ',response.data);
                return {
                    type: 'CREATE',
                    camperInfo
                }
            } 
        ).catch((error)=>{
            console.log('Error');
        });
    }
}
export default populateCampers;

function populateCampers() {
    return (dispatch)=> {
        xhr.get('campers').then((response)=> { 
            let campers = response.data.camper;
            return {
                type: 'POPULATE',
                campers
            }
        });
    }    
}
