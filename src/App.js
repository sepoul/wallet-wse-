import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import StateLessFront from './Components/Welcome/example.js';
import SignUp from './Components/Register/register.js';
import './App.css';

function App() {

  const [state, setState] = React.useState({
    bottom: false,
  });

  // Adding state information


  return (
    <div>
      <StateLessFront>
      </StateLessFront>
    </div>
  );
}

export default App;
