import styles from './css/Link.module.css';

const Link = ({ href, title }) => (
  <a className={styles.link} href={href}>
    {title}
  </a>
);

export default Link;
