import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import CreateTest from './components/CreateTest';

function App() {
  return (
    <div className='container mx-auto px-5 '>
      <Header></Header>
      <CreateTest/>
    </div>
  );
}

export default App;
