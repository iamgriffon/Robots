import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => { //Essa função recebe o parâmetro de state.
  return {
    searchField: state.searchRobots.searchField, //state.SearchBotos.searchField = estado._função_que_puxa_o_estado(reducers.js)._estado_a_ser_mudado.
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    err: state.requestRobots.err
  }
}

const mapDispatchToProps = (dispatch) => { //essa function precisa de um parametro dispatch que é o ativa a ação do redux
  return { //Se vai retornar um objeto, SEMPRE TENHA RETURN.
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    // console.log(this.props.store.getState());
    this.props.onRequestRobots();
  }
  render() {
  const { searchField, onSearchChange, robots, isPending } = this.props;
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
    return isPending ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboBuddies</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
//O connect é uma aplicação de nível maior, é uma function que vai retornar outra funtion, mas a sintaxe é assim
//Os 2 parametros que ele recebe são: mapStateToProps e mapDispatchToProps,
//Agora o app sabe que existe uma store, e toda vez que houver mudança de estado, ele vai monstrar interesse nessa store