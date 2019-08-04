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
              <div> <span className="decoration"> Welcome TO the world social economy
                    </span>
                    <p> Here should go some input actually about the beauty of WSE
                    </p>
                    <table> <tr>  <td>Go shotta ya
                                  </td>
                                  <td>Go shotta ya
                                  </td>
                                  <td>Go shotta ya
                                  </td>
                            </tr>
                            <tr>  <td>Go shotta ya
                                  </td>
                                  <td>Go shotta ya
                                  </td>
                                  <td>Go shotta ya
                                  </td>
                            </tr>
                    </table>

              </div> :
              (
                <div>  <p>
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
            </div>
          )
        }
        </form>
      </section>
  );
}

export default SignUp
