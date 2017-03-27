import React, { Component } from 'react';
import TodoslistHeader from './todos-list-header.js';
import _ from 'lodash';
import TodosListItem from './todos-list-item';

class Todoslist extends Component {

    renderItems(){

        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />)
    }

    render() {

    return (

        <table>
        <TodoslistHeader />

          <tbody>
              {this.renderItems()}
          </tbody>
        </table>
    );
  }
}

export default Todoslist;
