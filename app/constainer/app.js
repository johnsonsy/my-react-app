import React, { Component } from 'react';
import FacebookLogin from './FacebookLogin';
import Header from './Header';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reducers from '../reducer'
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    reducers,
    applyMiddleware(ReduxThunk),

);

const App = () => {
    return (
        <Provider store={store}>
            <div className="root_bkg">
                <Header />
                <div className="d-flex justify-content-center">
                    <FacebookLogin />
                </div>
            </div>
        </Provider>
    );
};

export default App;

