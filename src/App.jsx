import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import { Anime } from "./pages/Anime/Anime";
import { Manga } from "./pages/Manga/Manga";
import { AnimeDetails } from "./components/AnimeDetails/AnimeDetails";


function App() {



  const Favorites = () => <h2>Favorites</h2>;

  return (

    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/anime' element={<Anime />} />
        <Route path='/manga' element={<Manga />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />

      </Routes>

    </Router>


  )
}

export default App
