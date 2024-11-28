import { SET_DATA } from "../Actions/cardActions"
import { REMOVE_FROM_CART } from "../Actions/cardActions"

const initialState = {
    data: [],
    search: "",
    sort: "",
    continents: "",
    price: "",
    about: "",
    update: "",
    modal: false,
    cart: []
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload
            }
        case "SET_SORT":
            return {
                ...state,
                sort: action.payload
            }
        case "SET_CONTINENTS":
            return {
                ...state,
                continents: action.payload
            }
        case "SET_PRICE":
            return {
                ...state,
                price: action.payload
            }
        case "SET_ABOUT":
            return {
                ...state,
                about: action.payload
            }
        case "CREATE_CARD":
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case "UPDATE_CARD":
            return {
                ...state,
                data: state.data.map((item) =>
                    item.id === action.payload.id ? { ...item, ...action.payload.updatedCard } : item
                ),
            }
        case "SET_UPDATE":
            return {
                ...state,
                update: action.payload
            }
        case "SET_MODAL":
            return {
                ...state,
                modal: action.payload
            }
        case "SET_CART":
            const isItemInCart = state.cart.some((item) => item.id === action.payload.id && item.type === action.payload.type)
            return {
                ...state,
                cart: isItemInCart ? state.cart : [...state.cart, action.payload]
            }            
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) =>
                        !(item.id === action.payload.id && item.type === action.payload.type)
                ),
            }
        case "UPDATE_CART":
            return {
                ...state,
                cart: action.payload
            }   
        default:
            return state
    }
}

export default cardsReducer