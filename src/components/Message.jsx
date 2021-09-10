import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageExample = () => (
  <Message>
    <Message.Header>Sign Up</Message.Header>
    <p>
      Not registered yet? <a href="#">Sign Up</a>
    </p>
  </Message>
);

export default MessageExample;
