import { DocumentViewer } from './components/'
import './App.css';

const App = () => {

  // if using a class, equivalent of componentDidMount 

  return (
    <div className="App">
      <div className="header">React sample</div>
      <DocumentViewer docUrl={'files/PDFTRON_about.pdf'}/>
    </div>
  );
};

export default App;
