import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from "./pages/Home";

function App() {

  // const Home = () => <h2>Home Page</h2>;
  const Anime = () => <h2>Anime Page</h2>;
  const Manga = () => <h2>Manga Page</h2>;
  const About = () => <h2>About Us</h2>;
  const Favorites = () => <h2>Favorites</h2>;

  return (

    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/anime' element={<Anime />} />
        <Route path='/manga' element={<Manga />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />

      </Routes>

    </Router>


  )
}

export default App
