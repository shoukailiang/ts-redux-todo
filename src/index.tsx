import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Todos, Edit } from './reducers';
import registerServiceWorker from 'src/registerServiceWorker';

const middleware = applyMiddleware(thunk as any);
const reducers = combineReducers({
  todos: Todos,
  editIndex: Edit,
  // tslint:disable-next-line:align
});
let store = createStore(reducers, compose(
  middleware as any,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
));// tslint:disable-line


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
