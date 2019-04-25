import React from 'react';

export default function Contact() {
  return (
    <div style={c3Style}>
      <h1>Contact</h1>
      <div>
        <strong>Adresse :</strong> React Spring
      </div>
      <div>
        <strong>Phone :</strong> 555-555-555
      </div>
      <div>
        <strong>Mail :</strong> react@spring.com
      </div>
    </div>
  );
}
const c3Style = {
  background: 'skyBlue',
  color: 'black',
  padding: '1.5rem 1.5rem 5rem 1.5rem'
};
