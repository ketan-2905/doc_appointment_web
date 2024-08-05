import './index.css'
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";


function App() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:drsarajhons@gmail.com'
  };
  return (
    <div className="App">
          <Routes>
            <Route>
          <Home handleEmailClick = {handleEmailClick} />
          </Route>

          </Routes>
     
    </div>
  );
}

export default App;
