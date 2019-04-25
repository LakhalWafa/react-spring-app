import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class About extends Component {
  render() {
    return (
      <Spring
        to={{ opacity: 1 }}
        from={{ opacity: 0 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>About</h1>
              <p>This is a mini App about react spring!</p>
              <button style={btn} onClick={this.props.Toggle}>
                Contact
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: 'slateBlue',
  color: 'white',
  padding: '1.5rem'
};

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0'
};

export default About;
