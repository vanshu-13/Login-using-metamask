import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Home from "./Pages/Home";
import MyComponent from './Pages/MyComponent';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/' element={<MyComponent/>}/>
        </Routes>

      </Router>
       
    </div>
  );
}

export default App;
