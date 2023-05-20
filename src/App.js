// import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';

function App() {
  return (
    // we can't return multiple parent components, so we use fragments 
    <>
    <Editor/>
    </>
  );
}

export default App;
