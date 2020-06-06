import { applyMiddleware, compose, createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(
    //   thunkMiddleware
    );
  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer,  composedEnhancers);
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}