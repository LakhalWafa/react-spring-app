import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';

import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
  state = {
    showContact: false
  };

  toggle = e => {
    this.setState({ showContact: !this.state.showContact });
  };

  render() {
    return (
      <div id="home">
        <Home />
        <About Toggle={this.toggle} />
        <Transition
          native
          items={this.state.showContact}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Contact />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;
