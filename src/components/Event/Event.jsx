import { formatTime, formatData } from "utils/formatData";
import { FaMapMarkerAlt, FaAddressBook  } from "react-icons/fa";
import css from './Event.module.css'

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <li className={css.item}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.text}><FaMapMarkerAlt className={css.icon} />{location}</p>
      <p className={css.text}><FaAddressBook className={css.icon} />{speaker}</p>
      <p className={`${css.type} ${css[type]}`}>{type}</p>
      <p className={css.text}>{formatData(start)}</p>
      <p className={css.text}>{formatTime(start, end)}</p>
    </li>
  );
};

