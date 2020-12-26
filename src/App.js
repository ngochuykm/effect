import './App.css';
import Routes from './routes'
import HeaderContainer from './containers/HeaderContainer';
import Background from './image/pexels-jessica-lewis-583846.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      <HeaderContainer/>
      <Routes />
    </div>
  );
}

export default App;
