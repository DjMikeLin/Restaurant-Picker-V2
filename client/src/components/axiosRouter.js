import axios from 'axios';

export async function getUser(userName){
    return await axios.get('api/users/' + userName);
}

export async function createUser(user){
    return await axios.post('api/users', user);
}

export async function updateUser(userName){
    return await axios.put('api/users/' + userName);
}
