import React from 'react';

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
                  <a href="#"> Add me image Here
                  </a>
                  <a href="#"> Add me image Here
                  </a>
                  <a href="#"> Add me image Here
                  </a>
            </div>

      </p>
      </form>
      </section>
  );
}

export default SignUp
