export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id}>
      <div>{isOnline}</div>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </li>
  );
};
