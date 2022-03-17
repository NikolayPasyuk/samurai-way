import {ActionsTypes} from './store';

let initialState = {}

type InitialState = typeof initialState

export const sidebarReducer = (state: InitialState = initialState, action: ActionsTypes) => {
    return state
}