import React from 'react';

export default function Contact() {
  return (
    <div style={c3Style}>
      <h1>Contact</h1>
      <p>
        <strong>Adresse :</strong> React Spring
        <strong>Phone :</strong> 555-555-555
        <strong>Mail :</strong> react@spring.com
      </p>
    </div>
  );
}
const c3Style = {
  background: 'skyBlue',
  color: 'white',
  padding: '1.5rem 1.5rem 5rem 1.5rem'
};
