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
  const shouldShowFront = true;

  const handleDrawer =  (open) => (event) => {
    console.log("open: ")
    setState({...state, bottom: open});
  }

  return (
    <div>
    { shouldShowFront ?
        (<StateLessFront handleDrawer={handleDrawer(true)}>
        </StateLessFront>) :
        <span>Front down</span>
    }
    </div>
  );
}

export default App;
