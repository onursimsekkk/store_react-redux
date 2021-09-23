import React from 'react';
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { Route } from 'react-router';
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
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />


          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Dashboard;
