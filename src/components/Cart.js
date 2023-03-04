import { logDOM } from '@testing-library/react';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from '../Store/Cart-Context';

function Cart() {
  const [show, setShow] = useState(false);
 const CartCntx= useContext(CartContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   

  let total=0;
  CartCntx.cartStore.forEach((item)=> {
    total+=Number(item.price)
  })

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        CART
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Description</th>
            <th scope="col">price</th>
            <th scope="col">Large</th>
            <th scope="col">Medium</th>
            <th scope="col">Small</th>
            
          </tr>
        </thead>
        <tbody>

          {CartCntx.cartStore.map((product, index) => {
            return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.large}</td>
              <td>{product.medium}</td>
              <td>{product.small}</td>
              
            </tr>
            )
          })} 
        </tbody>
      </table>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         <p>Total amount: ${total}</p>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart;