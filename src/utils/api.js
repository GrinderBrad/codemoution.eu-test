import { apiEndpoint } from '../settings';
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: apiEndpoint
});

const onResponseValid = (payload) => {
    return Promise.resolve(parsePayload(payload))
};

const onResponseInvalid = (payload) => {
    if(payload.responce && payload.response.status === 401){
        localStorage.setItem('user', undefined);
        window.location.href = '/login';
    }
    return Promise.reject(parsePayload(payload.response));
};


const parsePayload = (payload) => {
    try {
        return JSON.parse(payload);
    } catch (err) {
        return payload;
    }
};

const makeRequest = (method, url, data = {}, isJson) => {
    let requestParams = {
        method,
        url,
        data,
        headers: {
            'Accept': 'application/json',
        }
    };
    requestParams.data.userId = localStorage.getItem('userId');
    if (method === 'GET') {
        requestParams.params = data;
    }
    if (isJson) {
        requestParams.data = JSON.stringify(data);
    }
    return axiosInstance.request(requestParams)
        .then(onResponseValid)
        .catch(onResponseInvalid)

};

export const get = (url, params) => makeRequest('GET', url, params);

export const post = (url, data, isJson) => makeRequest('POST', url, data, isJson);

export const update = (url, data) => makeRequest('PUT', url, data);

export const patch = (url, data) => makeRequest('PATCH', url, data);

export const remove = (url, data = null) => makeRequest('DELETE', url, data);

export function getImageUrl(data, token) {
    return post('file-upload', data, token);
}