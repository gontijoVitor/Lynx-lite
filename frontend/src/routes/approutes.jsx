import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home.jsx'
import Login from '../pages/login.jsx'
import Register from '../pages/register.jsx'
import Add from '../pages/add_content.jsx'
import Playlists from '../pages/playlists.jsx'
import Songs from '../pages/songs.jsx'
import Albuns from '../pages/albuns.jsx'
import Search from '../pages/search_results.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add_content" element={<Add />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/albuns" element={<Albuns />} />
      <Route path="/search_results" element={<Search />} />
    </Routes>
  )
}
