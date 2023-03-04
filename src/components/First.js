import React, { useContext, useState } from "react";
import classes from "./First.module.css";
import Button from 'react-bootstrap/Button';
import Cart from "./Cart";
import CartContext from "../Store/Cart-Context";

const First = () => {
  const CartCtx=useContext(CartContext);

  const [name, setName]= useState('');
  const [description, setDescription]= useState('');
  const [price, setPrice]= useState('');
  const [large, setLarge]= useState('');
  const [medium, setMedium]= useState('');
  const [small, setSmall]= useState('');

  const nameChangeHandler=(e)=>{
      setName(e.target.value)
  }
  const descriptionChangeHandler=(e)=>{
    setDescription(e.target.value)
  }
  const priceChangeHandler=(e)=>{
    setPrice(e.target.value)
  }
  const largeChangeHandler=(e)=>{
    setLarge(e.target.value)
  }
  const mediumChangeHandler=(e)=>{
    setMedium(e.target.value)
  }
  const smallChangeHandler=(e)=>{
    setSmall(e.target.value)
  }
  
const submitHandler=(e)=>{
  e.preventDefault()

  const products={
    productName:name,
    description:description,
    price:price,
    large:large,
    small:small,
    medium:medium
  }
   CartCtx.addProduct(products)
  
 }



  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.name}>
          <label >Product name</label>
          <input type="text" required onChange={nameChangeHandler} value={name}></input>
        </div>
        <div className={classes.description}>
        <label >Description</label>
          <input type="text" required onChange={descriptionChangeHandler} value={description}></input>
        </div>
        <div className={classes.price}>
        <label >Price</label>
          <input type="number" required onChange={priceChangeHandler} value={price}></input>
        </div>
        <div className={classes.large}>
        <label >Large</label>
          <input type="number" required onChange={largeChangeHandler} value={large}></input >
        </div>
        <div className={classes.medium}>
        <label >Medium</label>
          <input type="number" required onChange={mediumChangeHandler} value={medium}></input>
        </div>
        <div className={classes.small}>
        <label >Small</label>
          <input type="number" required onChange={smallChangeHandler} value={small}></input>
        </div>
        <div className={classes.addProduct}>
        <Button type="submit" variant="primary" >Add Product</Button>
        </div>
        
      <Cart />
      </form>

    </div>
  );
};
export default First;
