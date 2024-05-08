import styles from './css/ButtonLink.module.css';

const ButtonLink = ({ href, title }) => (
  <a className={styles.link} href={href} target="_blank" rel="noreferrer">
    {title}
  </a>
);

export default ButtonLink;
