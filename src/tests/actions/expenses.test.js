import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should remove expense work', () => {
    const action = removeExpense('123abc')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('editExpense testing...', () => {
    const action = editExpense('abc', {
        note: 'some note'
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: {
            note: 'some note'
        }
    })
})

test('should add expense works for provided info', () => {
    const expense = {
        description: 'Coffee',
        note: 'V Coffee',
        amount: 25000,
        createdAt: 1000
    }

    const action = addExpense(expense)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    })
})

test('should add expense works with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})