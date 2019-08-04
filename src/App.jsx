import React from 'react';
import StateLessFront from './Components/Welcome/example.jsx';
import SignUp from './Components/Register/register.jsx';
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

  return (
    <div> <StateLessFront decorationMatrix={decorationMatrix}>
          </StateLessFront>
    </div>
  );
}

export default App;
