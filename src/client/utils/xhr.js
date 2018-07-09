import axios from 'axios';
var headers = {
    'headers': {
        'Content-Type': 'application/json'
    }
}
const requests = {
    get: (url, body) => axios.get(`http://localhost:8888/${url}`).then((response) => {
        console.log(response);
        return response;
    }),
    post: (url, body) => axios.post(`http://localhost:8888/${url}`, body).then((response) => {
        console.log(response);
        return response;
    })
  };

export default requests;
