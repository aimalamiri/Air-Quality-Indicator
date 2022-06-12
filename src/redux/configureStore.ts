import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import countries from './countries/countries'
import states from './states/states'

const reducer = combineReducers({
  countries,
  states,
})

const store = configureStore({ reducer })

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
