import * as axios from "axios";

import configs from "../../configs/configs";

const axiosInstance = axios.create({
        baseURL: configs.BASE_URL,
        headers: {
            [window.localStorage.token && "token"]: window.localStorage.token
        }
    }
);

export const UserAPI = {
    authMe() {
        return axiosInstance.get("user/me")
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            });
    },

    register(email, name, password) {
        return axiosInstance.post("user/register", {
            email, name, password
        })
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            })
    },

    login(email, password) {
        return axiosInstance.post("user/login", {
            email, password
        })
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            });
    },

    logout() {
        return axiosInstance.delete("user/logout")
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            });
    },

    deleteUser() {
        return axiosInstance.delete("user")
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            });
    },

    verifyUser(hash) {
        return axiosInstance.get(`user/verify?hash=${hash}`)
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            });
    },

    cancelRegistration(hash) {
        return axiosInstance.delete(`user/verify?hash=${hash}`)
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            });
    },

    resendConfirmationEmail(email) {
        return axiosInstance.post(`user/verify/email`, {
            email
        })
            .then((response) => {
                return {
                    data: response.data,
                    status: response.status
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status
                }
            });
    }

}

