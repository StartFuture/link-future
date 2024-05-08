import { useContext } from 'react';
import styles from './Home.module.css';
import StartLogo from '../../assets/icons/logo_start.svg';
import ButtonLink from '../../Components/Links/ButtonLink';
import SocialLink from '../../Components/Links/SocialLink';
import { LinksContext } from '../../Context/LinksContext';
import socialIcon from '../../Hooks/socialIcon';

const Home = () => {
  const { filteredSocialLinks, filteredCustomLinks } = useContext(LinksContext);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={StartLogo} alt="Logo da Start" />
          </div>
          <div className={styles.links_container}>
            {filteredCustomLinks?.map(({ title, url, id }) => (
              <ButtonLink key={id} href={url} title={title} />
            ))}
          </div>
          <div className={styles.social_container}>
            {filteredSocialLinks?.map(({ social, url }) => (
              <SocialLink
                key={social}
                social={social}
                href={url}
                icon={socialIcon(social)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
