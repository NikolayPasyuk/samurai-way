import React, {ComponentType} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import store, {AppStateType} from './redux/redux-store';
import {Preloader} from './components/common/preloader/Preloader';
import './Reset.css';
import Music from './components/Music/Music';

type mapStatePropsType = {
    initialized: boolean
}

type mapDispatchPropsType = {
    initializeApp: () => void
}
export type AppPropsType = mapStatePropsType & mapDispatchPropsType


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div>
                <HeaderContainer/>
                <div className="main-wrapper">
                    <Navbar/>
                    <div className="main-content">
                        <Switch>
                            <Route exact path="/"
                                   render={() => <Redirect to={'/profile'}/>}/>
                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}/>
                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>
                            <Route path="/music"
                                   render={() => <Music/>}/>
                            <Route path="/login"
                                   render={() => <LoginPage/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose<ComponentType>(
    withRouter,
    connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialNetworkApp;