import './Shop.css';

const Item = (props) => {
  return (
    <div>
      <img src={props.img} width={200} height={200} alt={props.name} /><br/>
      id: {props.id}<br/>
      Name: {props.name}<br/>
      Price: {props.price}<br/>
    </div>
  );
}

const Shop = () => {
  const products = [
    {id: 0, name: "Notebook Acer Swift", price: 45900, img: "https://img.advice.co.th/images_nas/pic_product4/A0147295/A0147295_s.jpg"},
    {id: 1, name: "Notebook Asus Vivo", price: 19900, img: "https://img.advice.co.th/images_nas/pic_product4/A0146010/A0146010_s.jpg"},
    {id: 2, name: "Notebook Lenovo Ideapad", price: 32900, img: "https://img.advice.co.th/images_nas/pic_product4/A0149009/A0149009_s.jpg"},
    {id: 3, name: "Notebook MSI Prestige", price: 54900, img: "https://img.advice.co.th/images_nas/pic_product4/A0149954/A0149954_s.jpg"},
    {id: 4, name: "Notebook DELL XPS", price: 99900, img: "https://img.advice.co.th/images_nas/pic_product4/A0146335/A0146335_s.jpg"},
    {id: 5, name: "Notebook HP Envy", price: 46900, img: "https://img.advice.co.th/images_nas/pic_product4/A0145712/A0145712_s.jpg"}
  ];

  const productsList = products.map(item=><Item {...item}/>)
  return (<><div className='grid-container'>{productsList}</div></>)
}
export default Shop;