import './App.css';
import MyNavBar from './components/MyNavBar';
import Bannner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Bannner />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
