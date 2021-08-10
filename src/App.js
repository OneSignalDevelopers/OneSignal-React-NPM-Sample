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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
