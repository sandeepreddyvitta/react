export const initialState = {
    basket: [],
};

export const getTotalAmount = (basket) => {
    return (basket?.reducer((amount, item) => item.price + amount, 0));
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_To_Basket":
            return {
                ...state, basket: [...state.basket, action.item],
            }
        default:
            return { ...state }
    }
}

export default reducer;