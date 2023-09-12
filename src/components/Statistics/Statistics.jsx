import PropTypes from 'prop-types';
import css from "./Statistics.module.css"


export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      <p className={css.descr}>Good: {good}</p>
      <p className={css.descr}>Neuteral: {neutral}</p>
      <p className={css.descr}>Bad: {bad}</p>
      <p className={css.descr}>Total: {total}</p>
      <p className={css.descr}>Positive feedback: {positiveFeedback} %</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
}

