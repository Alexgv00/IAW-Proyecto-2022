import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UserState from "./context/UserState"
import Footer from "./components/common/Footer"
import ListRestaurantsPage from "./pages/ListRestaurantsPage"
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <UserState>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ListRestaurantsPage />} path="/" />
          <Route element={<RestaurantDetailPage />} path="/restaurants/:idRestaurant"/>
          <Route element={<LoginPage/>} path="/users/login"/>
          <Route element={<RegisterPage/> } path="/users/register"/>
        </Routes>
        {/* TODO Arreglar estilos Footer */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  </UserState>
  );
}

export default App;
