import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Message({ variant = 'info', show, children }) {
  if (!show) return null;

  return (
    <Alert
      variant={variant}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        opacity: 1,
        zIndex: 1050,
      }}
    >
      {children}
    </Alert>
  );
}


export default Message;
