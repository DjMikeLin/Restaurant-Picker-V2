import axios from 'axios';

export async function getRandomRestaurant(location){
    return await axios.get('/api/restaurants/' + location);
}
