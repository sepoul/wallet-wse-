import React from 'react';
import fblogo from './fblogo.png'
function SignUp(props) {

  const isAnimated = props.isAnimated;

  return (
      <section>
        <h3>Sign Up
        </h3>
        <form>
          { isAnimated ?
              <div className="log-in"> <span className="decoration">WSE
                                       </span>
                                       <caption> WORLD SOCIAL ECONOMY WAS CREATED TO MAKE EVERYONE EQUAL.
                                       </caption>
                                       <table> <tr>
                                                    <label for="traditional">  traditional input
                                                    </label>
                                                    <input type="textarea" name="traditional">
                                                    </input>
                                                    <label for="traditional">  traditional input
                                                    </label>
                                                    <input type="textarea" name="traditional">
                                                    </input>
                                              </tr>
                                              <tr>
                                                    <label for="traditional">  traditional input
                                                    </label>
                                                    <input type="textarea" name="traditional">
                                                    </input>
                                                    <label for="traditional">  traditional input
                                                    </label>
                                                    <input type="textarea" name="traditional">
                                                    </input>
                                              </tr>
                                              <tr>
                                                    <label for="traditional">  traditional input
                                                    </label>
                                                    <input type="textarea" name="traditional">
                                                    </input>
                                                    <label for="traditional">  traditional input
                                                    </label>
                                                    <input type="textarea" name="traditional">
                                                    </input>
                                              </tr>
                                       </table>

              </div> :
              (
                <div>  <p>
                        <div className="Sign-Up">BY GIVING EVERYONE 50 DIGITAL UNITED SOCIAL DOLLAR PER DAY. FOR THEM TO USE IT TO EXCHANGE SECOND HANDED ITEMS.
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
            </div>
          )
        }
        <button type="submit" value="Register">Register</button>
        </form>
      </section>
  );
}

export default SignUp
