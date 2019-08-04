import React from 'react';
import logo from './../../logo.png';
import logi from './../../logi.png';
import loga from './../../loga.png';
import SignUp from './../Register/register.jsx';

import './../../App.css';


function StateLessFront(props) {
  const decorationMatrix = props.decorationMatrix;
  const isAnimated = decorationMatrix.get("animated");

  return (
    <div className="App" >
      <header className="App-header">
        <div className="Welcome">
          <h1>
          The world social economy
          </h1>
          <div id="images">
            <div> <p component="p">
                                  This platform helps you buy goods using our free wsec. You can
                                  also sell goods using the same currency. Start by making an
                                  account and you can't start your purchases immediatly.
                  </p>
            </div>
            <div> <img src={logi} className="App-logo" alt="logo" />
            </div>
            <div> <img src={loga} className="App-logo" alt="logo" />
            </div>
          </div>
          <article id="chart"> <h5>  To Read our chart
                    </h5>
                    <button>  Chart
                    </button>
                    <aside> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu turpis, tristique in lacus vitae, volutpat interdum nisl. Morbi fringilla diam in faucibus mattis. Vestibulum congue magna in nisi tristique efficitur. In condimentum arcu nec leo ultricies laoreet. Integer diam metus, ornare id facilisis vel, vulputate a purus. Mauris ligula turpis, laoreet a volutpat eu, pharetra quis odio. Aliquam sodales ex sit amet nisl ornare sollicitudin. Sed ac iaculis ante. Suspendisse leo justo, lobortis sed eros vitae, pulvinar elementum turpis. Nulla pellentesque arcu feugiat erat gravida ullamcorper. Curabitur mattis turpis eget nibh pulvinar feugiat. Vestibulum convallis turpis efficitur dolor suscipit, id dictum tortor feugiat. Maecenas ut gravida justo.

Proin luctus vitae tellus non suscipit. Sed vulputate nunc enim, et varius ante rhoncus quis. Curabitur congue consectetur elit, ut tempor lorem malesuada id. Maecenas cursus sagittis fermentum. Quisque nunc nisl, sagittis quis mi vitae, dapibus interdum neque. Ut congue massa sed quam sagittis, non pulvinar ante porta. Phasellus rhoncus nibh varius, auctor justo vitae, ultricies quam. Quisque bibendum suscipit pharetra. Donec sit amet sapien iaculis, luctus lacus sed, condimentum urna. Pellentesque porttitor ut tortor non luctus. Phasellus porta interdum lobortis.

Pellentesque id vestibulum elit, quis fermentum nulla. Pellentesque justo lectus, iaculis in condimentum sed, porta ac nibh. Maecenas dictum ex dui, nec porta nisl imperdiet lacinia. Quisque elementum luctus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit eros ac pulvinar condimentum. Sed faucibus eu enim in mollis. Integer blandit ultricies sapien, pellentesque consequat lectus pulvinar at. Nullam in convallis lorem. Proin facilisis erat nunc, ac bibendum elit tincidunt eu. Sed sed quam leo.

Maecenas eu felis elit. Suspendisse id ex at ipsum placerat rhoncus non in massa. Etiam vitae volutpat tortor, non maximus eros. Aliquam tincidunt nec metus at elementum. Donec vitae urna mollis, viverra eros vel, elementum orci. Suspendisse interdum efficitur libero. Proin sodales sodales est, eget molestie arcu bibendum nec. Sed sed sem hendrerit, dictum ipsum pharetra, condimentum arcu. Mauris mollis erat in lacus convallis laoreet. Maecenas porttitor mi at porta ultricies. Etiam eget tortor id lorem malesuada eleifend. Donec fringilla, nisi nec aliquet euismod, eros lorem suscipit lectus, quis accumsan mauris quam ac dolor. Quisque mi diam, cursus ac fermentum vel, pharetra sed urna. Aliquam vitae libero viverra, iaculis erat a, ullamcorper turpis. Nam sed fringilla tellus.

Aliquam nec erat id mi vestibulum sodales. Quisque scelerisque, urna id imperdiet vehicula, lorem metus lobortis tellus, et consequat ante purus in est. Integer libero sem, tincidunt nec quam vel, finibus rutrum purus. Duis hendrerit imperdiet metus, eget posuere urna gravida ut. Duis ipsum magna, bibendum quis enim ac, faucibus interdum dolor. Donec in nibh arcu. Sed non risus bibendum, ullamcorper felis in, feugiat mauris. Aliquam quis pellentesque ipsum. Vestibulum laoreet luctus felis, in suscipit libero vehicula eu. Sed eget convallis orci. Proin suscipit posuere sem ac porttitor. Nulla vitae viverra odio, sit amet eleifend purus. Aliquam ut enim vitae risus convallis laoreet nec at turpis. Integer vitae ante eu urna mattis suscipit. Nulla euismod eu lorem at eleifend. Sed quis sapien purus.
                    </aside>
          </article>
        </div>
        <div className="Sign-Up">
          <SignUp isAnimated={isAnimated}>
          </SignUp>
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
