import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/Routers/AppRouter';

function App() {
  return (
    <BrowserRouter>
      {/* Main Router */}
      {/* Home page */}
      {/* Time Sheet page */}
      {/* Employee page */}
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;
