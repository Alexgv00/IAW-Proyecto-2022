import { URL_API_USERS, HEADERS, URL_API_LOGIN} from '../constants/http_constants.js';

export default class UserService {

    static getUsers() {
        return fetch(URL_API_USERS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getUserById(id) {
        return fetch(`${URL_API_USERS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_USERS/"register", options)
            .then(response => response.json())
            .catch(error => error);
    }

    //TODO loginService
    static login(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_LOGIN, options)
            .then(response => response.json())
            .catch(error => error)
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_USERS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_USERS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
