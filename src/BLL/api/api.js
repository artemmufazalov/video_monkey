import * as axios from "axios";

import configs from "../../configs/configs";

const axiosInstance = axios.create({
        baseURL: configs.BASE_URL,
        headers: {
            [window.localStorage.token && "token"]: window.localStorage.token
        }
    }
);

//TODO: finish API methods, so they will work with all possible status codes, returning data

export const UserAPI = {
    authMe() {
        return axiosInstance.get("user/me");
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
        });
    },

    logout() {
        return axiosInstance.delete("user/logout");
    },

    deleteUser() {
        return axiosInstance.delete("user");
    },

    verifyUser(hash) {
        return axiosInstance.get(`user/verify?hash=${hash}`);
    },

    cancelRegistration(hash) {
        return axiosInstance.delete(`user/verify?hash=${hash}`);
    },

    resendConfirmationEmail(email) {
        return axiosInstance.post(`user/verify/email`, {
            email
        });
    }

}

