import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
     } from './constants.js'; //Importando as constantes que criamos

const initialStateSearch = { //Armazenando o estado inicial que será usado na aplicação
    searchField: ''
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    err: ''
}


export const searchRobots = (state=initialStateSearch, action={}) => { //Usando o estado inicial como parâmetro, e a ação como uma ação vazia (para "zerar as ações cada vez que o Redux for ativado")
    // console.log(action.type); 
    switch(action.type) {  //Famoso select case
        case CHANGE_SEARCH_FIELD: //Caso o estado seja alterado e as funções executadas
        return {...state, searchField: action.payload}; //retorne o estado alterado e faça as ações
    default:
        return state;
    }
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return ({...state, isPending: true }) //Muda o estado mudado para true
        case REQUEST_ROBOTS_SUCCESS:
            return ({...state, robots: action.payload, isPending: false }) //Muda o estado mudado para false, e altera o robots com a response da fetch (que vira payload)
        case REQUEST_ROBOTS_FAILED:
            return ({...state, robots: action.payload, isPending: false }) //Muda o estado mudado para false, e altera o robots com a response da fetch (que vira payload)
        default:
            return state;
    }
}