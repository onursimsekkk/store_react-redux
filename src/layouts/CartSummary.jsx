 import React from 'react'
 import { NavLink } from 'react-router-dom';
 import { Dropdown } from 'semantic-ui-react';
 
 function CartSummary() {
   return (
     <>
       <Dropdown item text="Your Cart">
         <Dropdown.Menu>
           <Dropdown.Item>English</Dropdown.Item>
           <Dropdown.Item>Russian</Dropdown.Item>
           <Dropdown.Item>Spanish</Dropdown.Item>
           <Dropdown.Divider/>
           <Dropdown.Item as={NavLink} to="/cart">Go to Cart</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </>
   );
 }
 
 export default CartSummary;
 