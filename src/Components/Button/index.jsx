import styles from './css/Button.module.css';

const Button = ({
  children,
  className,
  onClick = () => {},
  disabled = false,
  // primary, secondary, danger
  type = 'primary',
  // filled, outlined, text
  variant = 'filled',
}) => (
  <button
    className={`
      ${styles.button}
      ${styles[type]}
      ${styles[variant]}
      ${className}
    `}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
);

export default Button;
