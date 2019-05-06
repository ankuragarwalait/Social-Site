import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {adUrls} from './reducers/adUrlsReducer';
import {location} from './reducers/locationReducer';
import {posts} from './reducers/postReducer';
import {userData} from './reducers/userDataReducer';
import {comments} from './reducers/commentsReducer';

const socialApp = combineReducers({
    adUrls,
    location,
    posts,
    userData,
    comments
})
const store = createStore(socialApp)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
