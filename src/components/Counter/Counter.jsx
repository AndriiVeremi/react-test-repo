import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './Counter.module.css';

export class Counter extends Component {
  
  state = {
    result: this.props.initState,
  };

  increment = () => {
    this.setState(prevState => ({
      result: prevState.result + 1
    }))
  };

  decrement = () => {
    this.setState(prevState => ({
       result: prevState.result - 1
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <span className={css.result}>{this.state.result}</span>
        <div className={css.wrapper}>
          <button className={css.btn} onClick={this.increment} >Додати +1</button>
          <button className={css.btn} onClick={this.decrement} >Забрати -1</button>
        </div>
      </div>
    );
  }
}
