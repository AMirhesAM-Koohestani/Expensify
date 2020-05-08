import React from 'react'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocus: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocus) => {
        this.setState(() => ({ calendarFocus }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onFilterChange = (e) => {
        e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate()
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="Filter"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onFilterChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="thisissomeuniquestartdateID"
                    endDate={this.props.filters.endDate}
                    endDateId="thisissomeuniqueenddateID"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocus}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)), 
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)