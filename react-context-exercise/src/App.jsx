import { Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { BeerPage } from './pages/BeerPage';
import { BeerDetailPage } from './pages/BeerDetailPage';

function App() {
  return (
    <Routes>
    <Route element={<NavBar />}>
      <Route path="/" element={<BeerPage />} />
      <Route path="/details/:id" element={<BeerDetailPage />} />
    </Route>
  </Routes>
  );
}

export default App
