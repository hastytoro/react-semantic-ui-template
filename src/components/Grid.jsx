import React from 'react';
import { Grid } from 'semantic-ui-react';

const GridExample = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <p>Content column 1 goes over here</p>
      <p>Content column 1 goes over here</p>
      <p>Content column 1 goes over here</p>
      <p>Content column 1 goes over here</p>
    </Grid.Column>
    <Grid.Column>
      <p>Content column 1 goes over here</p>
      <p>Content column 1 goes over here</p>
      <p>Content column 1 goes over here</p>
      <p>Content column 1 goes over here</p>
    </Grid.Column>
  </Grid>
);

export default GridExample;
