export const initialState = {
    basket: []
}

const rootReducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Basket":
            return {
                ...state, basket: [...state.basket, action.item],
            }
        default:
            return { ...state }

    }

}

export default rootReducer;