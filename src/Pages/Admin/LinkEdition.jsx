import { useContext } from 'react';
import { LinksContext } from '../../Context/LinksContext';
import styles from './css/LinkEdition.module.css';
import CustomLinkEditCard from '../../Components/Cards/CustomLinkEditCard';
import SocialLinkEditCard from '../../Components/Cards/SocialLinkEditCard';
import Button from '../../Components/Button';

const LinkEdition = () => {
  const { customLinks, socialLinks, createLink } = useContext(LinksContext);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Links Customizáveis</h2>
        {customLinks.map((link) => (
          <CustomLinkEditCard key={link.id} link={link} />
        ))}
        <Button
          type="secondary"
          variant="outlined"
          onClick={() => createLink()}
        >
          Adicionar Link
        </Button>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Redes Sociais</h2>
        <div className={styles.social_links}>
          {socialLinks.map((link) => (
            <SocialLinkEditCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LinkEdition;
