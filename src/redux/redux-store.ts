import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionsTypes, profileReducer} from './profile-reducer';
import {DialogsActionsTypes, dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {UsersActionsTypes, usersReducer} from './users-reducer';
import {AuthActionsTypes, authReducer} from './auth-reducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {StoreType} from './store';
import {reducer as formReducer} from 'redux-form';
import {FormAction} from 'redux-form/lib/actions';
import {AppInitializedActionsTypes, appReducer} from './app-reducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

export type AppActionsTypes =
    | AuthActionsTypes
    | DialogsActionsTypes
    | ProfileActionsTypes
    | UsersActionsTypes
    | AppInitializedActionsTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AppActionsTypes>


export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export default store
