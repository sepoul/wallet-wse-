import React from 'react';
import logo from './../../logo.png';
import SignUp from './../Register/register.js';

import './../../App.css';


function StateLessFront(props) {
  const decorationMatrix = props.decorationMatrix;

  decorationMatrix.forEach((x, y) => console.log(x, y));

  return (
    <div className="App" >
      <header className="App-header">
        <div className="Welcome">
          <h1>
          The world social economy
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <section>
          <div className="Sign-Up Drawer-Passage Hallway-Effect">
              <SignUp>
              </SignUp>
          </div>
          <div className="Sign-Up Drawer">
              <SignUp>
              </SignUp>
          </div>
          <div className="Sign-Up Drawer-Passage Hallway-Effect">
              <SignUp>
              </SignUp>
          </div>
        </section>
        <article>
          <h5 variant="h5" component="h3">
            Why we exist
          </h5>
          <p component="p">
            This platform helps you buy goods using our free wsec. You can
            also sell goods using the same currency. Start by making an
            account and you can't start your purchases immediatly.
          </p>
          <a
            component="button"
            variant="body2"
            className="Button"
          >
            Sign Up
          </a>
        </article>
      </header>
      <div>
      </div>
    </div>
  );
}

export default StateLessFront;
