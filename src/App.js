import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import StateLessFront from './Components/Welcome/example.js';
import SignUp from './Components/Register/register.js';
import './App.css';

function App() {

  const [state, setState] = React.useState({
    bottom: false,
  });

  const handleDrawer =  (open) => (event) => {
    setState({...state, bottom: open});
  }

  return (
    <div>
    <StateLessFront handleDrawer={handleDrawer(true)}>
    </StateLessFront>
    <Drawer onClose={handleDrawer(false)} anchor='bottom' >
      <SignUp>
      </SignUp>
    </Drawer>
    </div>
  );
}

export default App;
