import css from './Counter.module.css'

export const Counter = () => {
  return (
    <div className={css.container}>
      <span className={css.result}>0</span>
      <div className={css.wrapper}>
        <button className={css.btn}>Додати +1</button>
        <button className={css.btn}>Забрати -1</button>
      </div>
    </div>
  );
};
