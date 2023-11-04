import './App.css';
import {Route,BrowserRouter, Routes} from 'react-router-dom';
import Landing from './components/landing/landing';
import Principal from './components/Principal/Principal';
import Creation from './components/Creation/Creation';
import GamePage from './components/GamePage/GamePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element =  {<Landing/>} />
        <Route exact strict path = '/principal' element = {<Principal/>} />
        <Route path = '/principal/:id' element = {<GamePage/>} />
        <Route path = '/creation' element = {<Creation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
