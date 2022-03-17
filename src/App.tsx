import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {ActionsTypes, StatePropsType, StoreType} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    state: StatePropsType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/profile"
                       render={() => <Profile store={props.store}/>}/>
            </div>
        </div>
    );
}

export default App;
