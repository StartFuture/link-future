import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { LinkStorage } from './Context/LinksContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LinkStorage>
    <App />
  </LinkStorage>,
);
