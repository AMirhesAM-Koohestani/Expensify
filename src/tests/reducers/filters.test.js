import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup redux with default values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'EASE'
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('EASE')
})

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: 0
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(0)
})

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: 0
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(0)
})