import AppRoutes from './routes/approutes.jsx'
import Topbar from './components/topbar.jsx';
import Player from './components/player.jsx';

function App() {
  return (
  <div className='app-root'>
    <Topbar />
    <AppRoutes />
    <Player />
  </div>
  )
}

export default App;
