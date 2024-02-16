import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Message({ variant = 'info', children }) {
  return <Alert key={variant} variant={variant} style={{ opacity: 1}}>{children}</Alert>;
}

export default Message;
