// // store.js
// import { createStore, compose, applyMiddleware } from 'redux';
// import ListReducer from '../reducer';
// import { ConversationData } from '../mock-response';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(ListReducer, {coversations : ConversationData, selectedId : 1},composeEnhancers(applyMiddleware()));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import ListReducer from '../reducer';

const store = configureStore({
  reducer: {
    list: ListReducer
  },
});

export default store;