const url = "http://localhost:8080"

export const getCards = () => {
    return fetch(url + "/cards").then(res => {
        return new Promise(async (resolve) => {
            const jsonObj = await res.json()
            resolve(jsonObj)
        })
    
    })
}

export const addCard = (card) => {
    return new Promise((resolve) => {
        cards.push(card)
        resolve(cards)
    })
}

export const deleteCard = (id) => {
    return fetch(url + `/cards/${id}`, {method: "DELETE"})
}

export const createCard = (createObject) => {
    return fetch(url + `/cards`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(createObject)})
}

export const updateCard = (id, obj) => {
    return fetch(url + `/cards/${id}` , {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(obj)
    })
}