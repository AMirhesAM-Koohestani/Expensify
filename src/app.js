import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import store from './store/configureStore'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))