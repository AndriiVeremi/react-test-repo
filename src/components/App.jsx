import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBord/EventBord";
import css from "./App.module.css";
import events from "../data/events.json";

function App() {
  return (
    <div className={css.container}>
      <PageTitle title="Worlds Coalition Conferents" />
      <EventBoard events={events}/>
    </div>
  );
}

export default App;
