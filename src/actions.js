import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
     } from './constants.js';

export const setSearchField = (text) => {
    // console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobots = () => (dispatch) => { //Como não se trata de um objeto, nós usaremos dispatch para fazer essa function retornar outra function (para não ser um obj)
    dispatch({ type: REQUEST_ROBOTS_PENDING }); //Mandamos o primeiro parâmetro (pending)
    fetch('https://jsonplaceholder.typicode.com/users') //fazemos a chamada API
    .then(response => response.json()) //Pegamos a resposta e puxamos o JSON
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:data })) //E daí setamos o estado para SUCCESS caso dê bom, e retornamos o payload(resultado) como data
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err })) //Caso dê ruim, o estado vira FAILED e mandamos como payload o erro.
}