import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      {/* <Profile />  */}
    </div>
  );
}

export default App;
