import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {ProfileActionsTypes, profileReducer} from './profile-reducer';
import {DialogsActionsTypes, dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {UsersActionsTypes, usersReducer} from './users-reducer';
import {AuthActionsTypes, authReducer} from './auth-reducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
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

type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>

export type AppActionsTypes =
    | AuthActionsTypes
    | DialogsActionsTypes
    | ProfileActionsTypes
    | UsersActionsTypes
    | AppInitializedActionsTypes


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsTypes>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store