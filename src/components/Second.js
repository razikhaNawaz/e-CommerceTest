import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Store/Cart-Context";

const Second = () => {
  
  const CartCtx = useContext(CartContext);
  console.log('CartCtx', CartCtx.productStore)

  const CartDataHandler=(name,des,price,large,medium,small)=>{
    const cartItems={
      name:name,
      description:des,
      price:price,
      large:large,
      medium:medium,
      small:small
    }
    CartCtx.addToCart(cartItems)
    
  }

 console.log('second run');
  return (
    <div>
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
            <th scope="col">Add to Cart</th>
          </tr>
        </thead>
        <tbody>

          {CartCtx.productStore.map((product, index) => {
            return (
            <tr key={product._id}>
              <th scope="row">{index+1}</th>
              <td>{product.productName}</td>
               <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.large}</td>
              <td>{product.medium}</td>
              <td>{product.small}</td> 
              <td>
                <Button variant="primary" onClick={CartDataHandler.bind(null,product.productName,product.description,product.price,product.large, product.medium,product.small)}>Add to Cart</Button>
              </td>
            </tr>
            )
          })} 
        </tbody>
      </table>
    </div>
  );
};

export default Second;
