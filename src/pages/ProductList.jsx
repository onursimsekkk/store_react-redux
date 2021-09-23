import React from 'react';
import FakeStoreAPI from '../services/fakeStoreAPI';
import { Link } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react';

function ProductList() {

  const products = FakeStoreAPI();
  
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            products.map(product => (
            <Table.Row key={product.id}>
              <Table.Cell><Link to={`/products/${product.id}`}>{product.title}</Link></Table.Cell>
              <Table.Cell>${product.price}</Table.Cell>
              <Table.Cell>{product.description}</Table.Cell> 
              <Table.Cell>{product.category}</Table.Cell>
            </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
}

export default ProductList;