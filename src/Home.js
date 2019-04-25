import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Home = () => {
  return (
    <Spring
      to={{ opacity: 1, marginTop: 0 }}
      from={{ opacity: 0, marginTop: -500 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Home</h1>
            <p>Welcome to React Spring!</p>
            <Spring
              to={{ number: 10 }}
              from={{ number: 0 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>{' '}
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
};

const c1Style = {
  background: 'steelBlue',
  color: 'white',
  padding: '1.5rem'
};

const counter = {
  background: '#333',
  textAlign: 'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1rem auto'
};

export default Home;
