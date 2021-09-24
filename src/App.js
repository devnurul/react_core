import logo from './logo.svg';
import './App.css';

function App() {
  const products= [
    {name: "photoshop", price:" $99.99", dis:"This product is very nice and powerfull software"},
    {name: "Illustato", price:"$10.99",dis:"This product is very nice and powerfull software"},
    {name: "PDF", price:"$5.99",dis:"This product is very nice and powerfull software"},
    {name: "MS office", price:"$20.00",dis:"This product is very nice and powerfull software"},
    {name: "MS office", price:"$20.00",dis:"This product is very nice and powerfull software"},
   ]

  const blogs = [
    {title:"How to learn HTML", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"},
    {title:"Css is very prowerfull", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"},
    {title:"Css is very prowerfull", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"}, {title:"Css is very prowerfull", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"}, {title:"Css is very prowerfull", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"}, {title:"Css is very prowerfull", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"}, {title:"Css is very prowerfull", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"}, {title:"Css is very prowerfull", discription:"I love to learn html css and js very much. I dont forgate my programming like specialy learning style by Jillur boss", author: "Nurul", date: "25 sep 2021"},
  ]
  // const productNames = products.map(product => product.name);
 
  return (
    // <div >
    //   <Component name="Sakib"rank="Number one Alrounder"></Component>
    //   <Component name="Mahamudullah" rank="Captain" ></Component>
    //   <Component name="musfikur" rank="Mr. dependable"></Component>
    // </div>,
    <div>
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Product product={products[3]}></Product>

      {
        products.map(product => <li>{<Product product={product}></Product>}</li>)
      },
       {
        blogs.map(blog => <li>{<Blog blog={blog}></Blog>}</li>)
      }



    </div>
  );
}
// function Component (manPower){
//   return(
//     <div style= {{
//       border:"2px solid red",
//       width: "500px",
//       margin:"20px auto",
//       textAlign: "center"
//     }}>
//       <h2>Name: {manPower.name}</h2>
//       <h3>He is cricket of Bangladesh {manPower.rank}</h3>
//     </div>
//   )
// }

function Product(props){
  const productStyle={
    border:" 1px solid gray",
    borderRedius: "5px",
    backgroundColor: "lightgray",
    height:"250px",
    width: "200px",
    float:"left", 
    textAlign:"center",
    margin:"10px",
    }
  const {name, price, dis}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price} </h4>
      <p>{dis}</p>
      <button>Buy Now</button>
    </div>
  )
}



function Blog(propes){
  let blogsStyle={
    border:"1px solid #ddd",
    backgroundColor: "lightgray",
    width:"250px",
    height:"300px",
    float:"left", 
    margin:"10px",
    padding: "10px",
    boxSizing :"border-box"
  }

  const {title, discription, author, date}=propes.blog;
  return(
    <div style={blogsStyle}>
      <h3> {title}</h3>
      <h6> Author name: {author}</h6>
      <h6> Date: {date}</h6>

      
      <p>{discription}</p>
    </div>
  )
}





export default App;
