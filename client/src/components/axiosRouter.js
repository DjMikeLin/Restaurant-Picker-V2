import axios from 'axios';

export async function getRestaurants(){
    return await axios.get('/api/restaurants');
}

export async function deleteRestaurant(id){
    return await axios.delete('/api/restaurants/' + id);
}

export async function createRestaurant(restaurant){
    return await axios.post('/api/restaurants', restaurant);
}
