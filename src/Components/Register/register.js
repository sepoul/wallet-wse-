import React from 'react';
import fblogo from './fblogo.png'
function SignUp() {


  return (
      <section>
      <h3>Sign Up</h3>
      <form>
        <p>
          <div className="Sign-Up">Specific stuff, add some spectific level css here
          </div>
          <div className="Sign-Up">
            <label for="traditional">traditional input
            </label>
            <input type="textarea" name="traditional">
            </input>
          </div>
        </p>
        <p>Social media stuff
           <span>Some Icon Here with F
           </span>
           <div>  <span>Here connect to social media
                  </span>
                  <img src={fblogo} alt="FB" className="social">
                  </img>
                  <img src={fblogo} alt="GP" className="social">
                  </img>
                  <img src={fblogo} alt="TWTTR" className="social">
                  </img>
            </div>

      </p>
      </form>
      </section>
  );
}

export default SignUp
