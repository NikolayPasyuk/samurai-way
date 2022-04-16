import axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd0317f6a-b584-4afe-8a81-d7b60d153a6b'
    }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}
