import {createStore,applyMiddleware} from  'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
let middlrware= applyMiddleware(thunk)
if(process.env.NODE_ENV==='development'){
  middlrware=composeWithDevTools(middlrware)
}
export default createStore(reducers,middlrware)