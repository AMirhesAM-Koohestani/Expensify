

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', note: 'hala koo ta nowrooz!', amount: 100, createdAt: 0 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', note: 'vin diesel is my fav', amount: 300, createdAt: 5 }))
store.dispatch(addExpense({ description: 'A', note: 'vin diesel is my fav', amount: 450, createdAt: 6 }))
store.dispatch(addExpense({ description: 'B', note: 'vin diesel is my fav', amount: 50, createdAt: 7 }))
store.dispatch(addExpense({ description: 'C', note: 'vin diesel is my fav', amount: 3000, createdAt: 1 }))
store.dispatch(addExpense({ description: 'D', note: 'vin diesel is my fav', amount: 300, createdAt: 3 }))
store.dispatch(addExpense({ description: 'D', note: 'vin diesel is my fav', amount: 300, createdAt: 4 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'Tea', note: 'some bullshit', amount: 85 }))

// store.dispatch(setTextFilter('coffee'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(-999))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(5))

const demoState = {
    expenses: [{
        id: 'jldkfj21o3j213h4o31',
        description: 'Feb rent',
        note: 'Sister paid it!',
        amount: 32000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
}