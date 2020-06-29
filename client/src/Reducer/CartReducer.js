import { v4 as uuid } from 'uuid'
import { ADD_TO_CART, REMOVE_ITEM, ADD_SHIPPING, SUB_SHIPPING, ADD_QUANTITY, SUB_QUANTITY, ADD_FAV } from '../Actions/types';
const initState = {
    items: [
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Men%27s+Noah+Black+Leather+Biker+Jacket1-4-1557058576770',
            title: 'Noah Black Leather Biker Jacket',
            description: '',
            gender: 'Men',
            price: 230
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Men%27s+Lavendard+Brown+Leather+Biker+Jacket7846-4-1577528725717.jpg',
            title: 'Lavendard Brown Leather Biker Jacket',
            description: '',
            gender: 'Men',
            price: 230
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Men%27s+Bomia+Ma-1+Brown+Leather+Bomber+Jacket7819-4-1579778569432.jpg',
            title: 'Bomia Ma-1 Brown Leather Bomber Jacket',
            description: '',
            gender: 'Men',
            price: 265
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Men%27s+Allaric+Alley+Black+Leather+Biker+Jacket4700-4-1557196886965',
            title: 'Allaric Alley Black Leather Biker Jacket',
            description: '',
            gender: 'Men',
            price: 250
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Men%27s+Coffmen+Olive+Brown+Leather+Bomber+Jacket6377-4-1569240433064',
            title: 'Coffmen Olive Brown Leather Bomber Jacket',
            description: '',
            gender: 'Men',
            price: 240
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Kelsee%20Maroon%20Leather%20Biker%20Jacket%20For%20Women%202-1551972620189.jpg',
            title: 'Kelsee Maroon Leather Biker Jacket',
            description: '',
            gender: 'Woman',
            price: 265
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Kelsee%20Black%20Leather%20Biker%20Jacket%20For%20Women%202-1551972242949.jpg',
            title: 'Kelsee Black Leather Biker Jacket',
            description: '',
            gender: 'Womam',
            price: 265
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Flashback%20Black%20Leather%20Biker%20Jacket%20For%20Women%202-1551973175537.jpg',
            title: 'Flashback Black Leather Biker Jacket',
            description: '',
            gender: 'Woman',
            price: 265
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Flashback%20Red%20Leather%20Biker%20Jacket%20For%20Women%202-1551973625745.jpg',
            title: 'Flashback Red-Leather Biker Jacket',
            description: '',
            gender: 'Woman',
            price: 265
        },
        {
            id: uuid(),
            img: 'https://images.thejacketmaker.com/Flashback%20Blue%20Leather%20Biker%20Jacket%20For%20Women%202-1551973668171.jpg',
            title: 'Flashback Blue Leather Biker Jacket',
            description: '',
            gender: 'Woman',
            price: 265
        },
    ],
    addedItems: [],
    total: 0,
    favourites: []
}

const CartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
        }
        let newTotal = state.total + addedItem.price

        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    }
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }
    if (action.type === SUB_SHIPPING) {
        return {
            ...state,
            total: state.total - 6
        }
    }
    if (action.type === ADD_FAV){
        return {
            ...state,
            favourites: [...state.favourites, action.payload]
        }
    }
    else {
        return state;
    }
}





export default CartReducer