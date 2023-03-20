import "./App.css";
import requests from "./API/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import {Outlet, Routes , Route} from "react-router-dom"
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Detailpage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<Detailpage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

