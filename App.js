import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { Provider } from 'react-redux'

import blogReducer from './store/reducers/blog'
import AppNavigator from './navigation/AppNavigator'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  blog: blogReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}