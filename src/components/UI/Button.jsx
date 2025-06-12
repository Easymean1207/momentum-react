import React from 'react';

const buttonStyle = {
  padding: '4px 8px',
  margin: '10px',
  fontSize: '16px',
  backgroundColor: '#dcccec',
  color: 'white',
  borderWidth: '1px',
  borderRadius: '10px',
  cursor: 'pointer',
};

function Button({ title, onClick }) {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {title || 'submit'}
    </button>
  );
}

export default Button;
