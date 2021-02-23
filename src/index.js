import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={store.addPost.bind(store)}
      updateNewPostText={store.updateNewPostText.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
