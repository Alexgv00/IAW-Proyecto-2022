import { URL_API_DISHES, HEADERS } from '../constants/http_constants.js';

export default class CommentService {

    static getDishes() {
        return fetch(URL_API_DISHES)
            .then(res => res.json())
            .catch(error => error);
    }

    static getDishesById(id) {
        return fetch(`${URL_API_DISHES}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_DISHES, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_DISHES, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_DISHES}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
