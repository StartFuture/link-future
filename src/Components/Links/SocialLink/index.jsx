import styles from './css/SocialLink.module.css';

const SocialLink = ({ href, icon }) => (
  <a className={styles.link} href={href}>
    <img src={icon} alt="Ícone rede Social" />
  </a>
);

export default SocialLink;
