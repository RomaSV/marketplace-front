import {ACCESS_TOKEN, API_BASE_URL} from "./Constants";

const request = (options) => {
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append("Authorization", "Bearer " + localStorage.getItem(ACCESS_TOKEN));
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/api/users/auth",
        method: "POST",
        body: JSON.stringify(loginRequest)
    })
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/users/me",
        method: "GET"
    });
}

export function getRecommendations(userId, page, size) {
    page = page || 0;
    size = size || 20;

    return request({
        url: API_BASE_URL + "/api/recommendations?userId=" + userId + "&page=" + page + "&size=" + size,
        method: "GET"
    });
}

export function getProduct(productId) {

    return request({
        url: API_BASE_URL + "/api/products/" + productId,
        method: "GET"
    });
}