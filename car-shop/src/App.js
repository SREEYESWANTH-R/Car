import './App.css';
import Login from './Components/Client/Login';
import SignIn from './Components/Client/SignIn';
import Landing from './Landing';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <div>
        <Routes>
          
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
