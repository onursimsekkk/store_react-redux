import React from "react";
import GetProductByID from "../services/getProductByID";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react';

function ProductDetail() {
  let { id } = useParams();
  let product = GetProductByID(id);

  return (
    <div>
      <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={product.image}
            />
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>Product ID: {id}</Card.Meta>
            <Card.Description>
              {product.description}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <div>
              <strong>$ {product.price}</strong>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button inverted color="green">
                Add to Cart
              </Button>
              <Button inverted color="red">
                Add to Fav
              </Button>
            </div>
          </Card.Content>
        </Card>
    </div>
  );
}

export default ProductDetail;
