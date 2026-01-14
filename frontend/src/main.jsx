import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Player from './player.jsx'
import Register from './register.jsx'
import Login from './login.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
