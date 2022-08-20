import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greeting name="JavaScript">Language of the web</Greeting>
      <Greeting name="Golang" />
      <Greeting name="Swift">Language for iOS apps</Greeting>
      <hr />
      <Welcome name="JavaScript">Language of the web</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Java"><button>Click for Java</button></Welcome>
    </div>
  );
}

export default App;
