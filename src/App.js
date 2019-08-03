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
      ["animated", true]
    ]
  );


  // Adding state information


  return (
    <div>
      <StateLessFront decorationMatrix={decorationMatrix}>
      </StateLessFront>
    </div>
  );
}

export default App;
