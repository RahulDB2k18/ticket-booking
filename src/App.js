import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
// import Forgot from './components/Forgot';
import Home from './components/Home';
import Protect from './components/Protect';
// import Seats from './components/Seats';
import Profile from './components/Profile';
import Busdetail from './components/Busdetail';
import Bookbus from './components/Bookbus';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          {/* <Route path='/forgot-password' element={<Forgot/>} ></Route> */}
          <Route path='/home' element={ <Protect Child={Home}/>  }/>
          <Route path='/profile' element={ <Protect Child={Profile}/>  }/>
          {/* <Route path='/bookseat' element={<Seats/>} ></Route> */}
          <Route path='/busdetail/:busid' element={ <Protect Child={Busdetail}/>  }/>
          <Route path='/bookbus' element={ <Protect Child={Bookbus}/>  }/>
          <Route path='/bus' element={ <Bookbus/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;