import axios from "axios";

const BASE_URL = "http://localhost";
const PORT = 8081;


class ApiService {
    getBaseUrl() {
        return `${BASE_URL}:${PORT}/`;
    }

    fetchUsers(userId) {
        return axios.get(`${this.getBaseUrl()}users?userId=${userId}&auth=true`)
            .then((resp) => {   
                return resp.data.data;    
            })
            .catch((err) => {
                console.log(err);
            })
    }

    saveUser(user) {
        return axios.post(`${this.getBaseUrl()}users`, {
            user: user
        }).then((resp) => {
            return resp.data.data;    
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default new ApiService();