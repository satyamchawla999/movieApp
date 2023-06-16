import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers'

// const logger = function ({dispatch,getState}) {
//   return function (next) {
//     return function (action) {
//       console.log('ACTION_TYPE = ',action.type)
//       next(action);
//     } 
//   }
// }

const logger = ({dispatch,getState})=>(next)=>(action)=> {
  if(typeof action !== 'function') {
    console.log('ACTION_TYPE = ',action.type)
  }
  next(action);
}

// const thunk = ({dispatch,getState})=>(next)=>(action)=> {
//   if(typeof action === 'function') {
//     action(dispatch)
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);

export const StoreContext = createContext();
// console.log('before state',store.getState())

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:{name:'superman'}
// })

// console.log('after state',store.getState())

class Provider extends React.Component {
  render() {
    const {store} = this.props;
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
