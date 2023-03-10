import { URL_API_RESTAURANTS, HEADERS } from '../constants/http_constants.js';

export default class RestaurantService {

    static getRestaurants() {
        return fetch(URL_API_RESTAURANTS)
            .then(res => res.json())
            .catch(error => error);
    }

    //TODO filtro por precio y query
    static getRestaurantById(id) {
        return fetch(`${URL_API_RESTAURANTS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_RESTAURANTS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_RESTAURANTS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_RESTAURANTS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
