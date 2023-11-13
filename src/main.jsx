import ReactDOM from 'react-dom/client'
import Test from './test/Test.jsx'
import './index.css'
import { CookiesProvider } from 'react-cookie';
import ChekList from './chekList/ChekList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
  <ChekList />
  </CookiesProvider>,
)
