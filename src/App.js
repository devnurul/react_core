import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <Component name="Sakib"rank="Number one Alrounder"></Component>
      <Component name="Mahamudullah" rank="Captain" ></Component>
      <Component name="musfikur" rank="Mr. dependable"></Component>
    </div>,
    <div>
      <Product></Product>
    </div>
  );
}
function Component (manPower){
  return(
    <div style= {{
      border:"2px solid red",
      width: "500px",
      margin:"20px auto",
      textAlign: "center"
    }}>
      <h2>Name: {manPower.name}</h2>
      <h3>He is cricket of Bangladesh {manPower.rank}</h3>
    </div>
  )
}


function Product(props){
  const productStyle={
    border:" 1px solid gray",
    borderRedius: "5px",
    backgorundColor: "lightgray",
    height:"200px",
    width: "200px",
    float: "left"
  }
  return(
    <div style={productStyle}>
      <h2>Name:</h2>
      <h1> </h1>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
