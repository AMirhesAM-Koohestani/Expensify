// We split up the state of the store into two reducers:
// 1. expenses reducer
// 2. filters reducer
// then we combine them with combineReducers from 'redux'

// Expenses reducer
const expensesDefaultState = []

const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id)
        default:
            return state
    }
}

export default expensesReducer