import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux'; //Os nomes fazem exatamente o que eles dizem LOL
import { createLogger } from 'redux-logger'; //É um logger de ações muito eficiente
import thunkMiddleware from 'redux-thunk'; //Usado para fazer chamadas AJAX no Redux
import { searchRobots, requestRobots } from './reducers'; 


const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //Com logger
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); //Sem logger

ReactDOM.render(
        <Provider store={store}> 
        <App />, 
        </Provider>, document.getElementById('root'));
registerServiceWorker();

// O componente Provider é um parent que vai prover o redux na nossa aplicação
//A store será responsável por armazenar e fazer as mudanças de estado de maneira que não afete os outros componentes