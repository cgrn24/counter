import { tasksReducer } from './../Reducers/counter-reducer'
import { combineReducers, createStore } from 'redux'

const rootReducer = tasksReducer
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
// window.store = store
