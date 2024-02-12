import { combineReducers } from 'redux'
import updateValue from './updater'
import updateColor from './bgUpdater'

const rootReducer = combineReducers({
    updateValue,
    updateColor
})

export default rootReducer

