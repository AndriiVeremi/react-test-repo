import { Event } from "../Event/Event";

import css from './EventBord.module.css'

export const EventBoard = ({ events }) => {
  return (
    <ul className={css.list}>
      {events.map(({name, location, speaker, type, time}) => 
      <Event key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      )}
    </ul>
  );
};
