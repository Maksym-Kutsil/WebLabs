const url = "http://localhost:8080/cards"

function getCardsData () {
    return fetch (url) 
    .then (res => {
        return res.json()
    })
    .then (data => {
        return data
    })
}