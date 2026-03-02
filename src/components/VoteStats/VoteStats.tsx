import css from './VoteStats.module.css';

// Описываем, какие цифры придут в компонент
interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positive: number;
}

const VoteStats = ({ good, neutral, bad, total, positive }: VoteStatsProps) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive: {positive}%</li>
    </ul>
  );
};

export default VoteStats;