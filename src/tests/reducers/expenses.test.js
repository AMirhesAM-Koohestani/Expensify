import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Coffee',
        note: '',
        amount: 500,
        createdAt: 1000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const updates = {
        description: 'Master Card'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toBe('Master Card')
})

test('should not edit expense if expense not found', () => {
    const updates = {
        note: 'this is some note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})