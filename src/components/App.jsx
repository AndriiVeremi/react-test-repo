import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBord/EventBord';
import { Counter } from './Counter/Counter';
import { Form } from './Form/Form';
import { Component } from 'react';
import events from '../data/events.json';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import css from './App.module.css';

const initState = 10;

class App extends Component {
  state = {};

  formSubmitData = data => {
    console.log(data);
  };

  render() {
    return (
      <div className={css.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={data} title="Upload stats" />
        <FriendList friends={friends}/>
        <PageTitle title="Worlds Coalition Conferents" />
        <EventBoard events={events} />
        <Counter initState={initState} />
        <Form onSubmit={this.formSubmitData} />
      </div>
    );
  }
}

export default App;
