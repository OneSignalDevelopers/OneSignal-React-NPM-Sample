import { useEffect } from 'react';
import './App.css';


function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  useEffect(() => {
    OneSignal.push(() => {
      OneSignal.init(
        {
          appId: "68782627-f22d-45b7-b1eb-44b826777b50"
        }
      )
    });
  }, [OneSignal]);

  const onHandleTag = (tag) => {
    OneSignal.sendTag("tech", tag); 
  }

  return (
    <div className="App">
        <button className="btn btn--react" onClick={()=>onHandleTag('react')}>ReactJS</button>
        <button className="btn btn--angular" onClick={()=>onHandleTag('angular')}>angular</button>
        <button className="btn btn--vue" onClick={()=>onHandleTag('vue')}>vue</button>
    </div>
  );
}

export default App;
