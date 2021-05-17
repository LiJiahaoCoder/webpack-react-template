import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const Home = () => (
  <h1 className="text-primary text-center">
    Webpack React Template
  </h1>
);

const App = () => (
  <Router>
    <Route path="*" element={<Home />} />
  </Router>
);

export default App;
