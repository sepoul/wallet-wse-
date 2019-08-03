import React from 'react';
import StateLessFront from './Components/Welcome/example.js';
import SignUp from './Components/Register/register.js';
import './App.css';
import { LIGHT } from './Types.js';

function App() {

  const [state, setState] = React.useState({
    bottom: false,
  });

  const decorationMatrix = new Map(
    [
      ["background", LIGHT],
      ["animated", false]
    ]
  );


  // Adding state information
  const shouldShowFront = true;

  const handleDrawer =  (open) => (event) => {
    console.log("open: ")
    setState({...state, bottom: open});
  }

  return (
    <div>
    { shouldShowFront ?
        (<StateLessFront decorationMatrix={decorationMatrix}>
        </StateLessFront>) :
        <span>Front down</span>
    }
    </div>
  );
}

export default App;
