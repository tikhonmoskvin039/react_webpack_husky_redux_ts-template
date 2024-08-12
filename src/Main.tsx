import ReactDOM from 'react-dom/client';
import { App } from './Components/App';

const rootElement = document.querySelector('#root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
