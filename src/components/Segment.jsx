import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

const SegmentExample = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="No documents are listed for this customer." />
    </Header>
    <Button primary>Add Document</Button>
  </Segment>
);

export default SegmentExample;
