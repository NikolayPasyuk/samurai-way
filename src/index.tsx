import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}
                 store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)

