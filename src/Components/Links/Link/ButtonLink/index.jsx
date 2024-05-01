import styles from './css/ButtonLink.module.css';

const ButtonLink = ({ href, title }) => (
  <a className={styles.link} href={href}>
    {title}
  </a>
);

export default ButtonLink;
