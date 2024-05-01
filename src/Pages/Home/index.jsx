import styles from './Home.module.css';
import Logo from '../../assets/icons/logo_start.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';
import ButtonLink from '../../Components/Links/Link/ButtonLink';
import SocialLink from '../../Components/Links/SocialLink';

const Home = () => (
  <div className={styles.background}>
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo da Start Future" />
        </div>
        <div className={styles.links_container}>
          <ButtonLink
            href="https://startfuture.com.br"
            title="Site da Start Future"
          />
          <ButtonLink
            href="https://startfuture.com.br"
            title="Site da Start Future"
          />
          <ButtonLink
            href="https://startfuture.com.br"
            title="Site da Start Future"
          />
        </div>
        <div className={styles.social_container}>
          <SocialLink
            href="https://instagram.com/startfuturebootcamp"
            icon={Instagram}
          />
          <SocialLink
            href="https://instagram.com/startfuturebootcamp"
            icon={Facebook}
          />
          <SocialLink
            href="https://instagram.com/startfuturebootcamp"
            icon={Linkedin}
          />
          <SocialLink
            href="https://instagram.com/startfuturebootcamp"
            icon={Twitter}
          />
          <SocialLink
            href="https://instagram.com/startfuturebootcamp"
            icon={Whatsapp}
          />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
