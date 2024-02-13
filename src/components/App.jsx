import { Profile } from './Profile/Profile';
import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBord/EventBord';
import { Counter } from './Counter/Counter';
import { Form } from './Form/Form';
import { Component } from 'react';
import events from '../data/events.json';
import user from '../data/user.json';
import css from './App.module.css';

const initState = 10;

class App extends Component {
  state = {};

  fornSubmitData = data => {
    console.log(data);
  };

  render() {
    return (
      <div className={css.container}>
        {/* <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        /> */}
        <PageTitle title="Worlds Coalition Conferents" />
        <EventBoard events={events} />
        <Counter initState={initState} />
        <Form onSubmit={this.fornSubmitData} />
      </div>
    );
  }
}

export default App;
