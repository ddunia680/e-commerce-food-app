import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://food-delivery-app-42557-default-rtdb.firebaseio.com/'
});
export default instance;