import axios from 'axios'
import router from '../../router'

export async function login({state }) {
    try {
        const response = await axios.post('http://localhost:8000/api/login', state.auth)
        localStorage.setItem('token', response.data.token);
        router.push('/juego-de-memoria').then(() => {
            window.location.reload();
        })
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

export async function logout () {
    try {
        const response = await axios.post('http://localhost:8000/api/logout', {
            headers: {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        localStorage.removeItem('token');
        router.push('/');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}