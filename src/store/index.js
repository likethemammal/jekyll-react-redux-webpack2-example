import rootReducer from '../reducers'
import configureStore from "./configure"

//used in devtools
const STORE_NAME_App = 'App'

export const rootStore = configureStore(rootReducer, STORE_NAME_App)
