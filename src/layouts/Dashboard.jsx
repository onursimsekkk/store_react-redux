import React from 'react';
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { Grid } from 'semantic-ui-react';

function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={4} mobile={16}>
            <Categories />
          </Grid.Column>
          <Grid.Column computer={12} mobile={16}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Dashboard;
