import styles from './css/Input.module.css';

const Input = ({ value, onChange }) => (
  <input
    className={styles.input}
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default Input;
