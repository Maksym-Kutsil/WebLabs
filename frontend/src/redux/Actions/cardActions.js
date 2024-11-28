export const SET_SEARCH = 'SET_SEARCH'
export const SET_SORT = 'SET_SORT'
export const SET_CONTINENTS = 'SET_CONTINENTS'
export const SET_PRICE = 'SET_PRICE'
export const SET_DATA = 'SET_DATA'
export const SET_ABOUT = 'SET_ABOUT'
export const CREATE_CARD = "CREATE_CARD"
export const UPDATE_CARD = "UPDATE_CARD"
export const SET_UPDATE = "SET_UPDATE"
export const SET_MODAL = "SET_MODAL"
export const SET_CART = "SET_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const UPDATE_CART = "UPDATE_CART"

export const setSearch = (query) => ({
    type: "SET_SEARCH",
    payload: query
})

export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
})

export const setContinents = (continents) => ({
    type: SET_CONTINENTS,
    payload: continents,
})

export const setPrice = (price) => ({
    type: SET_PRICE,
    payload: price,
})

export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
})

export const setAbout = (about) => ({
    type: SET_ABOUT,
    payload: about,
})

export const createCard = (newCard) => ({
    type: CREATE_CARD,
    payload: newCard,
})

export const updateCard = (id, updatedCard) => ({
    type: UPDATE_CARD,
    payload: { id, updatedCard },
})

export const setUpdate = (id) => ({
    type: SET_UPDATE,
    payload: id,
})

export const setModal = (bool) => ({
    type: SET_MODAL,
    payload: bool,
})

export const setCart = (item) => ({
    type: SET_CART,
    payload: item,
})

export const removeFromCart = (id,type) => ({
    type: REMOVE_FROM_CART,
    payload: {id, type},
})

export const updateCart = (cart) => ({
    type: UPDATE_CART,
    payload: cart,
})