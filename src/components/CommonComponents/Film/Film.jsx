import css from '../Film/Film.module.css';
export const Film = ({ id, image, title }) => {
  return (
    <li className={css.filmCard} key={id}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </li>
  );
};
