import { useEffect, useState } from 'react';
import './Shop.css';
import axios from 'axios';

const Item = (props) => {
  return (
    <div onClick={() => props.callback(props.id)}>
      <img src={props.img} width={200} height={200} alt={props.name} /><br />
      id: {props.id}<br />
      Name: {props.name}<br />
      Price: {props.price} baht<br />
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const url = 'https://studious-yodel-5g49ppv96gq9c7x79-5000.app.github.dev';

  useEffect(() => {
    axios.get(url + '/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log("Error fetching products:", error);
      });
  }, []);

  const handleClick = (id) => {
    alert("Add success!");
    setCart([...cart, products.find(item => item.id === id)]);
  };

  const clearCart = () => {
    setCart([]);
  };

  let total = 0;
  const productsList = products.map(item => <Item key={item.id} callback={handleClick} {...item} />);
  const cartList = cart.map(item => <div key={item.id}>{item.id} {item.name} {item.price} baht</div>);
  
  for (let i = 0; i < cart.length; i++) total += cart[i].price;

  return (
    <>
      <div className='grid-container'>
        {productsList}
      </div>
      <h1>Cart</h1>
      <div>{cartList}</div>
      <button onClick={clearCart}>Clear All</button>
      <h2>Total: {total} baht</h2>
    </>
  );
};

export default Shop;
