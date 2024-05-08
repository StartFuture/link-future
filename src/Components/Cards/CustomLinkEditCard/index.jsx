import { useContext, useState } from 'react';
import Input from '../../Input';
import Button from '../../Button';
import styles from './css/CustomLinkEditCard.module.css';
import { LinksContext } from '../../../Context/LinksContext';

const CustomLinkEditCard = ({ link }) => {
  const [urlValue, setUrlValue] = useState(link.url);
  const [titleValue, setTitleValue] = useState(link.title);
  const { deleteLink, updateLink } = useContext(LinksContext);

  const handleSave = () => {
    updateLink(link.id, titleValue, urlValue);
  };

  const handleDelete = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Deseja realmente excluir este link?')) {
      deleteLink(link.id);
    }
  };

  const handleCancel = () => {
    setTitleValue(link.title);
    setUrlValue(link.url);
  };

  return (
    <div className={styles.container}>
      <Input
        value={titleValue}
        onChange={({ target }) => setTitleValue(target.value)}
      />
      <Input
        value={urlValue}
        onChange={({ target }) => setUrlValue(target.value)}
      />
      <div className={styles.buttons}>
        <Button type="danger" variant="text" onClick={handleDelete}>
          Excluir
        </Button>

        {titleValue !== link.title || urlValue !== link.url ? (
          <>
            <Button type="secondary" variant="text" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>Salvar</Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CustomLinkEditCard;
