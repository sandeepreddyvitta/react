export const initialState = {
    basket: [],
};

export const getTotalAmount = (basket) => {
    console.log(basket)
    return (basket?.reduce((amount, item) => item.price + amount, 0));
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_To_Basket":
            return {
                ...state, basket: [...state.basket, action.item],
            }
        case "Remove_To_Basket":
            const index = state.basket.findIndex(basketitem => basketitem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`can't remove product id ${action.id} `)
            }
            return {
                ...state, basket: newBasket,
            }
        default:
            return { ...state }
    }
}

export default reducer;