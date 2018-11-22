import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import rootreducer from './store/reducers/rootreducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import firebaseConfig from './config/firebaseConfig'

const store = createStore(rootreducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebaseConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true}), // redux binding for firebase
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
);
store.firebaseAuthIsReady.then(()=>{
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
})


