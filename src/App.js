import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/base.css';

function App() {
  return (
    <Switch>
      <Route exact path="/"  component={ HomePage } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
