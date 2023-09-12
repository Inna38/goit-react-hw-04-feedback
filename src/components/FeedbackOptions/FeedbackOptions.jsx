import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const option = Object.keys(options);
  return (
    <div>
      {option.map(el => (
        <button
          key={el}
          name={el}
          type="button"
          onClick={onLeaveFeedback}
          className={css.btn}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    option: PropTypes.string,
  }),
  onLeaveFeebdack: PropTypes.func,
};
