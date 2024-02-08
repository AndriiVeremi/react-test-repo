import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBord/EventBord';
import { Counter } from './Counter/Counter';
import { Form } from './Form/Form';
import css from './App.module.css';
import events from '../data/events.json';
import { Component } from 'react';

const initState = 10;

class App extends Component {
  state = {};

  fornSubmitData = data => {
    console.log(data);
  };

  render() {
    return (
      <div className={css.container}>
        <PageTitle title="Worlds Coalition Conferents" />
        <EventBoard events={events} />
        <Counter initState={initState} />
        <Form onSubmit={this.fornSubmitData} />
      </div>
    );
  }
}

export default App;
