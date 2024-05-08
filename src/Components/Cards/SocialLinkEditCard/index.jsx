import { useContext, useState } from 'react';
import styles from './css/SocialLinkEditCard.module.css';
import socialIcon from '../../../Hooks/socialIcon';
import Input from '../../Input';
import Button from '../../Button';
import { LinksContext } from '../../../Context/LinksContext';

const SocialLinkEditCard = ({ link }) => {
  const { social, url } = link;
  const [urlValue, setUrlValue] = useState(url);
  const { updateSocialLink } = useContext(LinksContext);

  const handleSave = () => {
    updateSocialLink(social, urlValue);
  };

  const handleCancel = () => {
    setUrlValue(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.edit_container}>
        <span className={styles.icon}>
          <img src={socialIcon(social)} alt={social} />
        </span>
        <Input
          value={urlValue}
          onChange={({ target }) => setUrlValue(target.value)}
        />
      </div>
      {urlValue !== url && (
        <div className={styles.buttons}>
          <Button type="secondary" variant="text" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="text" onClick={handleSave}>
            Salvar
          </Button>
        </div>
      )}
    </div>
  );
};

export default SocialLinkEditCard;
