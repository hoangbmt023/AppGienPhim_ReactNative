import axios from "axios";

const request = axios.create({
    baseURL: 'http://10.0.2.2:5039/api',
    withCredentials: true
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, data = {}, options = {}) => {
    const response = await request.post(path, data, options);
    return response.data;
};

export const put = async (path, data, options = {}) => {
    const response = await request.put(path, data, options);
    return response.data;
};

export const deleteRequest = async (path, options = {}) => {
    const response = await request.delete(path, options);
    return response.data;
};

export default request;
