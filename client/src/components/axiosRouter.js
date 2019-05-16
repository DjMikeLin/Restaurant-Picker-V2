import axios from 'axios';

export async function getUser(userName){
    return await axios.get('api/users/' + userName);
}
