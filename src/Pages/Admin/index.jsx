import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import styles from './css/Admin.module.css';
import LinkEdition from './LinkEdition';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Button
          className={styles.button}
          onClick={() => navigate('/')}
          variant="text"
        >
          {'<- Voltar ao site'}
        </Button>

        <LinkEdition />
      </div>
    </div>
  );
};

export default Admin;
