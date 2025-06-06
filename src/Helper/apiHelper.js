import axios from "axios";

const AxiosApi = axios.create();

AxiosApi.defaults.baseURL = process.env.REACT_APP_BACKEND_URI

export const get = async (url, config) => {

    return await AxiosApi
        .get(url, { ...config })
        .then((response) => response.data)

        .catch(err => {

            return Promise.reject(err.response)
        });
}

export const put = async (url, config) => {

    return await AxiosApi
        .put(url, { ...config })
        .then((response) => response.data)

        .catch(err => {

            return Promise.reject(err.response)
        });
}

export const post = async (url, config) => {

    return await AxiosApi
        .post(url, { ...config })
        .then((response) => response.data)

        .catch(err => {

            return Promise.reject(err.response)
        });
}

export const del = async (url, config) => {

    return await AxiosApi
        .delete(url, { ...config })
        .then((response) => response.data)

        .catch(err => {
            return Promise.reject(err.response)
        });
}