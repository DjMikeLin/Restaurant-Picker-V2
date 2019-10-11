import axios from 'axios';

export async function getRandomRestaurant(){
    return await axios.get('/api/restaurants');
}
