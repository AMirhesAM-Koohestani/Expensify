import moment from 'moment'

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment) : true
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment) : true
        const textMatch = 
                expense.description.toLowerCase().includes(text.toLowerCase()) ||
                expense.note.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((anExpense, anotherExpense) => {
        if (sortBy === 'date') {
            return anotherExpense.createdAt - anExpense.createdAt
        }
        if (sortBy === 'amount') {
            return anotherExpense.amount - anExpense.amount
        }
    })
}

export default getVisibleExpenses