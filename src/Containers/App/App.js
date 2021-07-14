import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from '../Heading';
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import PageThree from '../PageThree';
import PageFour from '../PageFour';

function App() {
  return (
    <div className="App">
      <Heading />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </div>
  );
}

export default App;
