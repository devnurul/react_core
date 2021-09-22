import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Nurul Islam";
  
  var style ={
    backgroundColor: "red"
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>My first paragraph</p>
        
    //   </header>
    // </div>
    <h2 style={style}>My Name: {name} </h2>
  );
}

export default App;
