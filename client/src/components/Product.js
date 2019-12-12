import React from 'react';
import { Segment, Header, } from 'semantic-ui-react';

const Product = (name, description, price ) => (
  <Segment>
      <Header>
        { name }
      </Header>
      <Header>
        { description }
      </Header>
      <Header>
        { price }
      </Header>
    
  </Segment>
)


export default Product;