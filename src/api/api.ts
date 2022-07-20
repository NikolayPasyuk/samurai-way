import axios from 'axios';
import {ProfileType} from '../redux/profile-reducer';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd0317f6a-b584-4afe-8a81-d7b60d153a6b'
    }
})

type DataType = {
    id: number
    email: string
    login: string
}

export type ResponseType<D = {}> = {
    fieldsErrors: Array<string>
    resultCode: number
    messages: Array<string>
    data: D
}

export type UserType = {
    name: string,
    id: number,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null | string,
    followed: boolean
}

export type UsersType = {
    items: Array<UserType>
    totalCount: number,
    error: null | string
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getProfileSmallPhoto(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data.photos.small);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status})
    },
    savePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
            .then(response => response.data);
    },
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<DataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data);
    }
}