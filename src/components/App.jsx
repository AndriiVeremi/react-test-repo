import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBord/EventBord';
import { Counter } from './Counter/Counter';
import css from './App.module.css';
import events from '../data/events.json';

function App() {
  return (
    <div className={css.container}>
      <PageTitle title="Worlds Coalition Conferents" />
      <EventBoard events={events} />
      <Counter />
    </div>
  );
}

export default App;
