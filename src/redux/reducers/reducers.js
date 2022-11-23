
import {combineReducers} from 'redux'

import appDataReducer from './appDataReducer/appDataReducer'
import authReducer from './authReducer/authReducer'
import categoriesReducer from './categoriesReducer/categoriesReducer'


const reducersContainer={
    authState: authReducer,
    appDataState: appDataReducer,
    categoriesState: categoriesReducer
}

console.log('>> REDUCERSCONTAINER', reducersContainer)

const reducersContainer2={
    authReducer,
    appDataReducer,
    categoriesReducer
}

console.log('>> REDUCERSCONTAINER2', reducersContainer2)

const reducers= combineReducers(reducersContainer)

export default reducers