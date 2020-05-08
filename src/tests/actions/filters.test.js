import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'

test('should set start date correctly', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should set end date courrectly', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should set text filter with provided value', () => {
    const text = 'rent'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should set text filter with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})