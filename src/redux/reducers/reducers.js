
import {combineReducers} from 'redux'

import appDataReducer from './appDataReducer/appDataReducer'
import authReducer from './authReducer/authReducer'
import categoriesReducer from './categoriesReducer/categoriesReducer'


const reducersContainer={
    authState: authReducer,
    appDataState: appDataReducer,
    categoriesState: categoriesReducer
}

console.log('>> REDUCERS CONTAINER', reducersContainer)



const reducers= combineReducers(reducersContainer)

export default reducers