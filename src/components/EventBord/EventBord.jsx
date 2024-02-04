import PropTypes from 'prop-types';
import { Event } from '../Event/Event';
import css from './EventBord.module.css';

export const EventBoard = ({ events }) => {
  return (
    <ul className={css.list}>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </ul>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.shape({
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired,
        })
    }).isRequired
  ),
};
