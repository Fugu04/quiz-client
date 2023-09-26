import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import CreateTest from './pages/CreateTest';
import Testing from './pages/Testing'
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

function App() {
  return (
    
    <div className='container mx-auto px-5 '>
      <Header></Header>
        <Routes>
           <Route path = "/" element= { <Main/> } />
           <Route path = "/create" element= { <CreateTest/> } />
           {/* <Route path = "/testing" element= { <Testing /> } /> */}
           {/* <Route path = "/login" element= { <Login /> } />
           <Route path = "/register" element= { <Registration /> } /> */}
        </Routes>
    </div>
  );
}

export default App;
