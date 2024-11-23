import axios from 'axios'

const url = "http://localhost:8080"

export const getCards = (searchText = '', sort = '', continents = '', price = '') => {
    return axios.get(`${url}/cards`, {
        params: {
            search: searchText,
            sort: sort,
            continents: continents,
            price: price
        }
    }).then(response => response.data)
}

export const deleteCard = (id) => {
    return axios.delete(`${url}/cards/${id}`)
}

export const createCard = (createObject) => {
    return axios.post(`${url}/cards`, createObject, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export const updateCard = (id, obj) => {
    return axios.put(`${url}/cards/${id}`, obj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export const getTotalCost = (searchText = '', continents = '', price = '') => {
    return axios.get(`${url}/cards/count`, {
        params: {
            search: searchText,
            continents: continents,
            price: price
        }
    }).then(response => response.data)
}