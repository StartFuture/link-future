import styles from './css/SocialLink.module.css';

const SocialLink = ({ href, icon }) => (
  <a href={href} className={styles.link} target="_blank" rel="noreferrer">
    <img src={icon} alt="Ícone rede Social" />
  </a>
);

export default SocialLink;
