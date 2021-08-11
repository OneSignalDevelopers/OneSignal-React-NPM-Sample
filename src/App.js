import './App.css';
import logo from './logo.png'

function App() {

  const onHandleTag = (tag) => {
    console.log('Tagging');
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="tags">
        <button className="btn btn--react" onClick={()=>onHandleTag('react')}>ReactJS</button>
        <button className="btn btn--angular" onClick={()=>onHandleTag('angular')}>Angular</button>
        <button className="btn btn--vue" onClick={()=>onHandleTag('vue')}>Vue</button>
      </div>
    </div>
  );
}

export default App;
