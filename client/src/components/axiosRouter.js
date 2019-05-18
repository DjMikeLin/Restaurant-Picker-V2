import axios from 'axios';

export async function getUser(userName){
    return await axios.get('/api/users/' + userName);
}

export async function createUser(user){
    return await axios.post('/api/users', user);
}

export async function updateUser(user){
    return await axios.put('/api/users/' + user.name, user);
}

export async function deleteUser(userName){
    return await axios.delete('/api/users/' + userName);
}

export async function getRestaurants(){
    return await axios.get('/api/restaurants');
}
