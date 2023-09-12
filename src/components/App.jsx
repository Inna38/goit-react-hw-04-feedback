import { React, useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const onLeaveFeedback = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const goodTotal = good;
    const total = countTotalFeedback();
    const result = Math.round((goodTotal / total) * 100);
    return result;
  };

   return (
    <Section title="Please leave feedback">
   { feedback &&  <FeedbackOptions options={feedback} onLeaveFeedback={onLeaveFeedback} />
}
      {countTotalFeedback() === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
}
