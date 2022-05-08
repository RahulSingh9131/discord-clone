
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Channel from './pages/Channel';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/channel" element={<Channel/>}/>
        <Route path="/channel/:channelId" element={<Channel/>}/>
      </Routes>
    </div>
  );
}

export default App;
